#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = resolve(packageRoot, "skills");
const registry = JSON.parse(readFileSync(resolve(packageRoot, "family-members.json"), "utf8"));
const releaseVersion = readFileSync(resolve(skillsRoot, "chanyong", "VERSION"), "utf8").trim();
const releaseDate = readFileSync(resolve(skillsRoot, "chanyong", "RELEASE_DATE"), "utf8").trim();
const require = createRequire(import.meta.url);
const skillsCli = require.resolve("skills/bin/cli.mjs");
const env = { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1" };
const targetAgents = ["codex", "claude-code", "grok"];
const [major, minor] = process.versions.node.split(".").map(Number);
const installRoots = [homedir(), process.cwd()];
const agentRoots = [".agents", ".claude", ".grok"];
const previousVersions = new Set();

for (const root of installRoots) {
  for (const agentRoot of agentRoots) {
    const versionFile = resolve(root, agentRoot, "skills", "chanyong", "VERSION");
    if (existsSync(versionFile)) previousVersions.add(readFileSync(versionFile, "utf8").trim());
  }
}

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

const previous = [...previousVersions].filter((version) => version && version !== releaseVersion).sort().join(", ");
const label = globalResult === 0 ? "chanyong" : "chanyong 当前项目";
if (previous) {
  console.log(`\n${label} 已更新：v${previous} → v${releaseVersion}（${releaseDate}）`);
} else if (previousVersions.has(releaseVersion)) {
  console.log(`\n${label} 已是最新版：v${releaseVersion}（${releaseDate}）`);
} else {
  console.log(`\n${label} 已安装：v${releaseVersion}（${releaseDate}）`);
}
