import { existsSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";

const appDirectory = "app";

if (existsSync(appDirectory)) rmSync(appDirectory, { recursive: true, force: true });
mkdirSync(appDirectory, { recursive: true });

execFileSync("tar", ["-xzf", "app.tar.gz", "-C", appDirectory, "--strip-components=1"], {
  stdio: "inherit",
});
