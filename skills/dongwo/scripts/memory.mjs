#!/usr/bin/env node
import { randomUUID } from "node:crypto";
import { homedir } from "node:os";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { chmod, mkdir, open, readFile, rename, unlink, writeFile } from "node:fs/promises";

const configuredDir = process.env.CHANYONG_MEMORY_DIR;
if (configuredDir && !isAbsolute(configuredDir)) {
  console.error("CHANYONG_MEMORY_DIR must be an absolute private directory.");
  process.exit(2);
}
const memoryDir = configuredDir ? resolve(configuredDir) : join(homedir(), ".chanyong", "private-memory");
const memoryFile = join(memoryDir, "profile.json");
const lockFile = join(memoryDir, ".profile.lock");
const command = process.argv[2] ?? "list";

async function readStore() {
  try {
    const data = JSON.parse(await readFile(memoryFile, "utf8"));
    if (data.version !== 1 || !Array.isArray(data.entries)) throw new Error("Unsupported memory format.");
    return data;
  } catch (error) {
    if (error?.code === "ENOENT") return { version: 1, entries: [] };
    throw error;
  }
}

async function withLock(action) {
  await mkdir(memoryDir, { recursive: true, mode: 0o700 });
  let handle;
  try {
    handle = await open(lockFile, "wx", 0o600);
  } catch (error) {
    if (error?.code === "EEXIST") throw new Error("Memory store is busy; retry after the other operation finishes.");
    throw error;
  }
  try {
    return await action();
  } finally {
    await handle.close();
    await unlink(lockFile).catch(() => {});
  }
}

async function writeStore(store) {
  const temp = join(dirname(memoryFile), `.profile-${process.pid}-${randomUUID()}.tmp`);
  await writeFile(temp, `${JSON.stringify(store, null, 2)}\n`, { mode: 0o600 });
  await rename(temp, memoryFile);
  await chmod(memoryFile, 0o600).catch(() => {});
}

async function readStdin() {
  let value = "";
  process.stdin.setEncoding("utf8");
  for await (const chunk of process.stdin) {
    value += chunk;
    if (value.length > 65536) throw new Error("Memory input is too large.");
  }
  return JSON.parse(value);
}

function requireText(input, field, max) {
  const value = input[field];
  if (typeof value !== "string" || !value.trim()) throw new Error(`${field} is required.`);
  if (value.length > max) throw new Error(`${field} exceeds ${max} characters.`);
  return value.trim();
}

function validateEntry(input) {
  const category = requireText(input, "category", 64);
  const key = requireText(input, "key", 120);
  const value = requireText(input, "value", 2000);
  const scope = typeof input.scope === "string" && input.scope.trim() ? input.scope.trim() : "global";
  if (scope.length > 120 || !/^(global|project:[^/\\]+)$/.test(scope)) {
    throw new Error("scope must be global or project:<name>.");
  }
  const sensitiveLabel = `${category} ${key}`;
  if (/password|secret|token|api.?key|credential|private.?key|验证码|密码|密钥|令牌/i.test(sensitiveLabel)) {
    throw new Error("Secrets and credentials cannot be stored as personal memory.");
  }
  if (/sk-[A-Za-z0-9_-]{16,}|ghp_[A-Za-z0-9]{20,}|-----BEGIN[^\n]*PRIVATE KEY-----/.test(value)) {
    throw new Error("The value appears to contain a secret and was not stored.");
  }
  return { category, key, value, scope };
}

if (command === "location") {
  console.log(memoryFile);
} else if (command === "list") {
  const store = await readStore();
  const categoryIndex = process.argv.indexOf("--category");
  const scopeIndex = process.argv.indexOf("--scope");
  const category = categoryIndex >= 0 ? process.argv[categoryIndex + 1] : undefined;
  const scope = scopeIndex >= 0 ? process.argv[scopeIndex + 1] : undefined;
  const entries = store.entries.filter((entry) => (!category || entry.category === category) && (!scope || entry.scope === scope));
  console.log(JSON.stringify(entries, null, 2));
} else if (command === "save") {
  const input = validateEntry(await readStdin());
  const saved = await withLock(async () => {
    const store = await readStore();
    const now = new Date().toISOString();
    const existing = store.entries.find((entry) => entry.category === input.category && entry.key === input.key && entry.scope === input.scope);
    if (existing) {
      existing.value = input.value;
      existing.updatedAt = now;
      await writeStore(store);
      return existing;
    }
    const entry = { id: randomUUID(), ...input, source: "user-explicit", createdAt: now, updatedAt: now };
    store.entries.push(entry);
    await writeStore(store);
    return entry;
  });
  console.log(JSON.stringify(saved, null, 2));
} else if (command === "forget") {
  const id = process.argv[3];
  if (!id) throw new Error("forget requires an entry id.");
  await withLock(async () => {
    const store = await readStore();
    const next = store.entries.filter((entry) => entry.id !== id);
    if (next.length === store.entries.length) throw new Error(`No memory found for id ${id}.`);
    store.entries = next;
    await writeStore(store);
  });
  console.log(JSON.stringify({ forgotten: id }));
} else if (command === "clear") {
  if (process.argv[3] !== "--confirm" || process.argv[4] !== "CLEAR-ALL") {
    throw new Error("clear requires --confirm CLEAR-ALL.");
  }
  await withLock(async () => writeStore({ version: 1, entries: [] }));
  console.log(JSON.stringify({ cleared: true }));
} else {
  throw new Error(`Unknown command: ${command}`);
}
