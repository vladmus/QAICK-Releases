# QAICK Desktop — Releases

Official distribution repository for **QAICK Desktop**, a freeware API automation application by Zerohead One Inc.

**QAICK Desktop 1.0.4** brings Studio, Runner and Mock Server together in one application. The verified installer checksums are preserved in [installers/1.0.4](installers/1.0.4/).

**QAICK Desktop 1.0.4 was publicly published on November 25, 2026.** Download the official [v1.0.4 GitHub release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.4).

## New in 1.0.4

Script Actions have a configurable timeout with a 60-second default. Production installers include mandatory code protection and exact-hash artifact verification. Windows upgrades preserve the previous installation during migration. A second launch focuses the existing Studio main window while preserving detached windows and current work. See [1.0.4 release notes](installers/1.0.4/RELEASE-NOTES.md). AI Agent integration is not included.

## What QAICK does

- **Studio:** Create and edit API Actions, Operations and Streams, with explicit input/output bindings.
- **Runner:** Execute workflows, inspect recorded request/response evidence and review History.
- **Mock Server:** Configure local HTTP mock rules and responses, including optional Studio/Runner routing.

Use the components in the main window or detach Runner and Mock Server into separate windows. Studio remains the main window. Load Example Project opens a prepared Project without automatically executing it.

QAICK provides **API workflow automation and execution evidence**. Execution outcomes are not test pass/fail verdicts; Analyzer remains a future component. QAICK does not provide browser UI automation.

## Downloads

The verified Desktop **1.0.4** installer filenames are listed below. Installer binaries are kept outside Git history for distribution through [GitHub Releases](https://github.com/vladmus/QAICK-Releases/releases). The official 1.0.4 download assets are publicly available in the [v1.0.4 release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.4).

| Operating system | Installer |
| --- | --- |
| macOS 13+ on Apple Silicon | `QAICK-Desktop-1.0.4-macOS-arm64.dmg` |
| Windows x64 | `QAICK-Desktop-1.0.4-Windows-x64-Setup.exe` |
| Linux x64 — AppImage | `QAICK-Desktop-1.0.4-Linux-x64.AppImage` |
| Linux x64 — Debian package | `qaick-desktop_1.0.4_amd64.deb` |

Check the installer against [1.0.4 SHA256SUMS](installers/1.0.4/SHA256SUMS) before installation. Save your work and close QAICK before replacing an installation.

The macOS build is not Developer ID notarized and the Windows build is unsigned. macOS Gatekeeper and Windows SmartScreen may require a user-initiated exception. Do not disable operating-system security protections globally. Linux AppImage extract-and-run has been verified; FUSE/double-click launch has not.

## Software license

QAICK Desktop is **proprietary freeware**. Personal, educational and commercial use is permitted under the [QAICK Desktop End-User License Agreement](EULA.md). The Software is licensed, not sold; ownership of its proprietary source code is not transferred to users.

## Credits

[QAICK Desktop Credits](CREDITS.md).

## Security and privacy

Read the [Desktop 1.0.1 Security & Privacy report](SECURITY-AND-PRIVACY.md) for the existing 1.0.1 assessment, independently verified dictionary-download correction, IPv6 investigation and exact verification scope. It is not a separate security assessment of 1.0.4.

Recording and execution evidence can contain credentials and sensitive request/response values. Review collections, Projects and exported results before sharing them.

## Release status

All four Desktop 1.0.4 installers passed the mandatory production-protection gate and their complete public downloads match the approved SHA-256 checksums. The release preserves application data identity. Diagnostic packages, traces and AI Agent integration are excluded.

This repository tracks release documents and checksums, **not** installer binaries or QAICK's private product source. Historical documents and checksums remain available; previous unprotected releases and installer downloads have been withdrawn.

## Feedback

Please use the product website at https://zerohead-one.com/ for contact and product information. Do not post credentials, authorization headers, cookies, private API responses, or proprietary Project data in public issue reports.

© 2026 Zerohead One Inc.

## Production protection and verification

Desktop 1.0.4 is publicly available. The release documents and [SHA256SUMS](installers/1.0.4/SHA256SUMS) identify the exact distributed installers. Mandatory artifact protection verification precedes publication. Future release publication continues to require OWNER authorization.
