#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const current = (await readFile(resolve(root, "VERSION"), "utf8")).trim();
const command = `node -e "fetch('https://is.gd/chanyong_install').then(r=>r.text()).then(eval)"`;

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
  const release = await response.json();
  const latest = String(release.tag_name || "").replace(/^v/, "");
  const published = new Date(release.published_at || "");
  const date = Number.isNaN(published.valueOf())
    ? "日期未知"
    : new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(published);
  if (latest && isNewer(latest, current)) {
    console.log(`UPDATE_AVAILABLE current=${current} latest=${latest}`);
    console.log(`常用有新版本：v${current} → v${latest}（${date}）`);
    console.log(`回复“更新常用”即可更新，或运行：${command}`);
  }
} catch {
  process.exit(0);
}
