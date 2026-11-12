# QAICK Desktop — Beta 1 (1.0.0-rc.1)

**Release type: BETA / PRERELEASE — not a stable 1.0.0 release.**

QAICK is a freeware desktop application for building and running HTTP API automation workflows.

### Included
- QAICK Studio: create, edit and save API Actions, Streams and Operations; configure inputs, outputs and explicit dependencies.
- QAICK Runner: execute HTTP API workflows and inspect execution events, responses, outputs and History.
- Integrated Desktop application with native runtime.
- macOS Apple Silicon, Windows x64 and Linux x64 installer options.

### Installer files
- `QAICK-Desktop-1.0.0-rc.1-macOS-arm64.dmg`
- `QAICK-Desktop-1.0.0-rc.1-Windows-x64-Setup.exe`
- `QAICK-Desktop-1.0.0-rc.1-Linux-x64.AppImage`
- `qaick-desktop_1.0.0-rc.1_amd64.deb`
- `SHA256SUMS`

### Beta advisories
- **macOS:** Apple Silicon, macOS 13+. The application is not Apple notarized; macOS may block initial launch. Use the per-app exception in System Settings > Privacy & Security if required.
- **Windows:** the installer is unsigned. Windows SmartScreen may show an unknown-publisher warning. Only continue if you trust the download and have verified its source and checksum.
- **Linux:** native Debian package installation, removal and preservation of application data were verified on Linux Mint 22.3. AppImage extract-and-run was verified; FUSE/double-click launch remains unverified. Other distributions have not been accepted.
- This is **beta software**. Keep backups of important Projects and do not assume every API/server behavior has been validated.
- QAICK automates **API calls only**; it does not record or replay browser UI interactions.

### Build identity
- QAICK Desktop: `1.0.0-rc.1`
- Studio: `0.11.46`
- Runner: `0.32.34`
- Runtime: `0.4.14`
- HTTP Executor: `0.2.28`
- Executor: `0.4.13`
- Contract: `0.7.5`
- Electron: `44.10.2`

### Integrity
All installer SHA-256 checksums are supplied in `SHA256SUMS`. Do not substitute or rename installer bytes without generating and verifying new checksums.

© 2026 Zerohead One Inc.
