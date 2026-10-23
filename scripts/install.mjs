#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = resolve(packageRoot, "skills");
const require = createRequire(import.meta.url);
const skillsCli = require.resolve("skills/bin/cli.mjs");
const env = { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1" };
const [major, minor] = process.versions.node.split(".").map(Number);

if (major < 22 || (major === 22 && minor < 20)) {
  console.error(`Node.js 22.20 or later is required; found ${process.versions.node}.`);
  process.exit(1);
}

function install(extraArgs, label) {
  const result = spawnSync(
    process.execPath,
    [skillsCli, "add", skillsRoot, ...extraArgs, "--all", "--copy"],
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
