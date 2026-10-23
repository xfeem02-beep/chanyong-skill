const { spawnSync } = require("node:child_process");

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const installer = `https://github.com/xfeem02-beep/chanyong-skill/releases/latest/download/chanyong-skill-installer.tgz?v=${Date.now()}`;
const env = { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1" };
const result = spawnSync(npx, ["-y", installer], {
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.error) {
  console.error(`chanyong installation failed: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);
