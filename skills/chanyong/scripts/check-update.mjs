#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const current = (await readFile(resolve(root, "VERSION"), "utf8")).trim();
const command = "npx -y https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz";

function parts(version) {
  return version.replace(/^v/, "").split(".").map((value) => Number.parseInt(value, 10) || 0);
}

function isNewer(candidate, installed) {
  const left = parts(candidate);
  const right = parts(installed);
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    if ((left[index] || 0) !== (right[index] || 0)) return (left[index] || 0) > (right[index] || 0);
  }
  return false;
}

try {
  const response = await fetch("https://api.github.com/repos/xfeem02-beep/chanyong-skill/releases/latest", {
    headers: { Accept: "application/vnd.github+json", "User-Agent": "chanyong-update-check" },
    signal: AbortSignal.timeout(3000),
  });
  if (!response.ok) process.exit(0);
  const latest = String((await response.json()).tag_name || "").replace(/^v/, "");
  if (latest && isNewer(latest, current)) {
    console.log(`UPDATE_AVAILABLE current=${current} latest=${latest}`);
    console.log(command);
  }
} catch {
  process.exit(0);
}
