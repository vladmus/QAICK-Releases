# QAICK Desktop 1.0.4 — local candidate

Not published. OWNER review and publication authorization remain separate.

- Script Actions default to 60 seconds and allow a per-Action timeout. Existing Scripts without a value use that default. Cancellation, sandboxing and the overall execution deadline remain in place.
- Desktop and Web outputs use mandatory bundling, minification, selective obfuscation and hash-bound artifact verification. Desktop application code uses ASAR; supported Windows/macOS integrity checks are enforced.
- Windows upgrades retire known obsolete loose application files while preserving user data and unknown files.

Components: Studio 0.11.49, Runner 0.32.47, Runtime 0.4.17, Mock Server 0.8.6, Contract 0.7.7, Executor 0.4.15 and HTTP Executor 0.2.30.

Linux AppImage extracted-payload launch, Script execution and authoring, native collection opening and real Mock HTTP response verified. Windows/macOS final payloads and integrity metadata inspected; native installation and launch remain UNVERIFIED. Windows is unsigned; macOS is ad-hoc signed and not notarized. Linux does not provide Electron embedded ASAR integrity validation. Obfuscation raises inspection effort and does not make shipped JavaScript unrecoverable.

No AI Agent integration. Existing public 1.0.3 downloads remain unchanged.
