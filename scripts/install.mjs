#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = resolve(packageRoot, "skills");
const registry = JSON.parse(readFileSync(resolve(packageRoot, "family-members.json"), "utf8"));
const require = createRequire(import.meta.url);
const skillsCli = require.resolve("skills/bin/cli.mjs");
const env = { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1" };
const targetAgents = ["codex", "claude-code", "grok"];
const [major, minor] = process.versions.node.split(".").map(Number);

if (major < 22 || (major === 22 && minor < 20)) {
  console.error(`Node.js 22.20 or later is required; found ${process.versions.node}.`);
  process.exit(1);
}

if (registry.router !== "chanyong" || !Array.isArray(registry.members) || registry.members.length === 0) {
  console.error("Invalid skill family registry.");
  process.exit(1);
}
for (const member of registry.members) {
  if (!member?.name || !member?.group || !existsSync(resolve(skillsRoot, member.name, "SKILL.md"))) {
    console.error(`Missing registered skill: ${member?.name ?? "unknown"}`);
    process.exit(1);
  }
}

function install(extraArgs, label) {
  const result = spawnSync(
    process.execPath,
    [skillsCli, "add", skillsRoot, ...extraArgs, "--skill", "*", "--agent", ...targetAgents, "-y", "--copy"],
    { cwd: process.cwd(), env, stdio: "inherit" },
  );
  if (result.error) {
    console.error(`${label} failed: ${result.error.message}`);
    return 1;
  }
  return result.status ?? 1;
}

const globalResult = install(["--global"], "Global installation");
const projectResult = install([], "Project installation");

if (projectResult !== 0) process.exit(projectResult);
if (globalResult !== 0) {
  console.warn("Project installation succeeded; one or more agents do not support global skills.");
}
