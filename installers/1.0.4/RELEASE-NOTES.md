QAICK Desktop 1.0.4 brings Studio, Runner and Mock Server together in one offline-capable application.

- Script Actions use a 60-second default timeout and support a per-Action timeout. Existing Scripts without an explicit value inherit the default; sandboxing, manual cancellation and the overall execution deadline remain intact.
- Production application code is bundled, minified and selectively obfuscated. Desktop uses ASAR with integrity enforcement where supported. All four installers passed the mandatory artifact-hash protection gate.
- Windows upgrades stage the replacement before switching, preserve the previous installation for rollback, and retain unrecognized files outside the active application. Projects, History and settings are preserved.
- A second launch brings the existing Studio main window forward, preserving detached windows and application state.

Components: Studio 0.11.49, Runner 0.32.47, Mock Server 0.8.6, Runtime 0.4.17, Contract 0.7.7, Executor 0.4.15 and HTTP Executor 0.2.30. AI Agent integration is not included.

Download the installer for your platform below and verify it against SHA256SUMS. Save your work and fully quit QAICK before upgrading. Windows x64 is unsigned; macOS Apple Silicon requires macOS 13+ and is ad-hoc signed, not notarized. Do not disable OS security protections globally.

QAICK Desktop is proprietary freeware by Zerohead One Inc. Credits and License are bundled and available offline in Help → About.
