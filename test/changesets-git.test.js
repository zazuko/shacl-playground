import { strict as assert } from "node:assert";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const changesetsRequire = createRequire(
  require.resolve("@changesets/cli/package.json"),
);
const { remoteTagExists } = await import(
  pathToFileURL(changesetsRequire.resolve("@changesets/git")).href
);

describe("Changesets remote tag lookup", function () {
  it("distinguishes private app tags from scoped library tags", async function () {
    const cwd = process.cwd();
    const repo = mkdtempSync(join(tmpdir(), "changesets-git-"));
    const git = (...args) => execFileSync("git", args, { cwd: repo });

    try {
      git("init", "--quiet");
      git(
        "-c",
        "user.name=Test",
        "-c",
        "user.email=test@example.com",
        "commit",
        "--allow-empty",
        "--no-gpg-sign",
        "--quiet",
        "-m",
        "Initial commit",
      );
      git("remote", "add", "origin", repo);
      git("tag", "@zazuko/shacl-playground@2.0.0");
      process.chdir(repo);

      assert.equal(await remoteTagExists("shacl-playground@2.0.0"), false);
      assert.equal(
        await remoteTagExists("@zazuko/shacl-playground@2.0.0"),
        true,
      );

      git("tag", "shacl-playground@2.0.0");
      assert.equal(await remoteTagExists("shacl-playground@2.0.0"), true);
    } finally {
      process.chdir(cwd);
      rmSync(repo, { recursive: true, force: true });
    }
  });
});
