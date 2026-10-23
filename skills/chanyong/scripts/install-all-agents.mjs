import { spawnSync } from "node:child_process";

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const env = { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1" };
const [nodeMajor, nodeMinor] = process.versions.node.split(".").map(Number);
const installer = "https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz";

if (nodeMajor < 22 || (nodeMajor === 22 && nodeMinor < 20)) {
  console.error(`Node.js 22.20 or later is required; found ${process.versions.node}.`);
  process.exit(1);
}

const result = spawnSync(npx, ["--yes", installer], { cwd: process.cwd(), env, stdio: "inherit" });
if (result.error) {
  console.error(`Skill family installation failed: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);
