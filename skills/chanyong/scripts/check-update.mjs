#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { homedir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const current = (await readFile(resolve(root, "VERSION"), "utf8")).trim();
const command = `node -e "fetch('https://is.gd/chanyong_install').then(r=>r.text()).then(eval)"`;
const apply = process.argv.includes("--apply");

function parts(version) {
  const calendar = version.replace(/^v/, "").match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})-r(\d+)$/i);
  if (calendar) return calendar.slice(1).map(Number);
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
    if (!apply) {
      console.log(`运行更新：${command}`);
      process.exit(0);
    }

    console.log("chanyong 正在更新，请稍候…");
    const result = spawnSync(process.execPath, ["-e", `fetch('https://is.gd/chanyong_install').then(r=>r.text()).then(eval)`], {
      cwd: process.cwd(),
      env: { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1" },
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    });
    if (result.error || result.status !== 0) {
      const detail = result.error?.message || result.stderr || result.stdout;
      if (detail) process.stderr.write(detail.endsWith("\n") ? detail : `${detail}\n`);
      console.log(`UPDATE_FAILED current=${current}`);
      console.log(`chanyong 更新失败，继续使用 v${current}。需要时可手动运行：${command}`);
      process.exit(0);
    }

    const versionFiles = [homedir(), process.cwd()].flatMap((base) =>
      [".agents", ".claude", ".grok"].map((agent) => resolve(base, agent, "skills", "chanyong", "VERSION")),
    );
    const versions = await Promise.all(versionFiles.map(async (file) => {
      try {
        return { file, version: (await readFile(file, "utf8")).trim() };
      } catch {
        return null;
      }
    }));
    const installed = versions.filter(Boolean);
    const stale = installed.filter(({ version }) => version !== latest);
    if (!installed.length || stale.length) {
      console.log(`UPDATE_UNVERIFIED expected=${latest} stale=${stale.length} found=${installed.length}`);
      console.log(`chanyong 安装命令已结束，但 ${stale.length || "当前"} 个入口未确认到 v${latest}；本轮继续使用已加载版本。`);
      process.exit(0);
    }
    console.log(`UPDATE_APPLIED previous=${current} current=${latest} targets=${installed.length}`);
    console.log(`chanyong 更新成功：v${current} → v${latest}（${date}），已核对 ${installed.length} 个入口。`);
  }
} catch (error) {
  if (apply) console.log(`chanyong 更新检查失败，继续使用 v${current}：${error.message}`);
  process.exit(0);
}
