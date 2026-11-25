# QAICK Desktop — Releases

Official distribution repository for **QAICK Desktop**, a freeware API automation application by Zerohead One Inc.

**QAICK Desktop 1.0.3** brings Studio, Runner and Mock Server together in one application. The verified installer checksums are preserved in [installers/1.0.3](installers/1.0.3/).

**QAICK Desktop 1.0.3 was publicly published on November 25, 2026.** Download the official [v1.0.3 GitHub release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.3). The earlier [Beta 1 prerelease](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.0-rc.1) remains available separately.

## New in 1.0.3

Runner corrects clipped error messages and removes the confusing Export JSON button. Use Save Run Result and Open Run Result for saving and reopening historical runs. Existing History and execution evidence remain unchanged. See [1.0.3 release notes](installers/1.0.3/RELEASE-NOTES.md). AI Agent integration is not included.

## What QAICK does

- **Studio:** Create and edit API Actions, Operations and Streams, with explicit input/output bindings.
- **Runner:** Execute workflows, inspect recorded request/response evidence and review History.
- **Mock Server:** Configure local HTTP mock rules and responses, including optional Studio/Runner routing.

Use the components in the main window or detach Runner and Mock Server into separate windows. Studio remains the main window. Load Example Project opens a prepared Project without automatically executing it.

QAICK provides **API workflow automation and execution evidence**. Execution outcomes are not test pass/fail verdicts; Analyzer remains a future component. QAICK does not provide browser UI automation.

## Downloads

The verified Desktop **1.0.3** installer filenames are listed below. Installer binaries are kept outside Git history for distribution through [GitHub Releases](https://github.com/vladmus/QAICK-Releases/releases). The official 1.0.3 download assets are publicly available in the [v1.0.3 release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.3).

| Operating system | Installer |
| --- | --- |
| macOS 13+ on Apple Silicon | `QAICK-Desktop-1.0.3-macOS-arm64.dmg` |
| Windows x64 | `QAICK-Desktop-1.0.3-Windows-x64-Setup.exe` |
| Linux x64 — AppImage | `QAICK-Desktop-1.0.3-Linux-x64.AppImage` |
| Linux x64 — Debian package | `qaick-desktop_1.0.3_amd64.deb` |

Check the installer against [1.0.3 SHA256SUMS](installers/1.0.3/SHA256SUMS) before installation. Save your work and close QAICK before replacing an installation.

The macOS build is not Developer ID notarized and the Windows build is unsigned. macOS Gatekeeper and Windows SmartScreen may require a user-initiated exception. Do not disable operating-system security protections globally. Linux AppImage extract-and-run has been verified; FUSE/double-click launch has not.

## Software license

QAICK Desktop is **proprietary freeware**. Personal, educational and commercial use is permitted under the [QAICK Desktop End-User License Agreement](EULA.md). The Software is licensed, not sold; ownership of its proprietary source code is not transferred to users.

## Credits

[QAICK Desktop Credits](CREDITS.md).

## Security and privacy

Read the [Desktop 1.0.1 Security & Privacy report](SECURITY-AND-PRIVACY.md) for the existing 1.0.1 assessment, independently verified dictionary-download correction, IPv6 investigation and exact verification scope. It is not a separate security assessment of 1.0.3.

Recording and execution evidence can contain credentials and sensitive request/response values. Review collections, Projects and exported results before sharing them.

## Release status

The four 1.0.3 installers use the same corrected application payload and preserved application data identity. Linux packaged startup and About version were verified. Windows/macOS native installation was not repeated here; package-integrity verification is separate from native acceptance. Checksums are tracked in Git; binaries are distributed through GitHub Releases. Diagnostic packages and traces are excluded.

This repository tracks release documents and checksums, **not** installer binaries or QAICK's private product source. Earlier Beta 1 documents and checksums remain available as historical records.

## Feedback

Please use the product website at https://zerohead-one.com/ for contact and product information. Do not post credentials, authorization headers, cookies, private API responses, or proprietary Project data in public issue reports.

© 2026 Zerohead One Inc.
