The `@changesets/git` patch makes `remoteTagExists` query the full
`refs/tags/<name>` ref. Without it, looking up `shacl-playground@2.0.0`
also matches `@zazuko/shacl-playground@2.0.0`, causing Changesets to skip
the private app's tag and GitHub release.

Remove the patch once the installed Changesets dependency includes this fix.
The release workflow applies the patch after `npm ci` and runs
`test/changesets-git.test.js` to check the collision using a local Git remote.
Regular installs and Docker builds do not apply the patch.
