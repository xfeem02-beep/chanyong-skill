import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillsRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const env = { ...process.env, DO_NOT_TRACK: "1" };
const [nodeMajor, nodeMinor] = process.versions.node.split(".").map(Number);

if (nodeMajor < 22 || (nodeMajor === 22 && nodeMinor < 20)) {
  console.error(`Node.js 22.20 or later is required; found ${process.versions.node}.`);
  process.exit(1);
}

function install(args, label) {
  const result = spawnSync(
    npx,
    ["--yes", "skills", "add", skillsRoot, ...args, "--all", "--copy"],
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
