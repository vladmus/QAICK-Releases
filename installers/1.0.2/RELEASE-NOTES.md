# QAICK Desktop 1.0.2

QAICK Desktop brings Studio, Runner and Mock Server together in one application.

## Changes

- Mock Server now displays its actual local host and automatically assigned port, with Copy address.
- The right-docked HTTP Console displays actual local Mock Server requests and responses. Collection continues while collapsed; Clear All clears its in-memory exchange history without affecting saved rules.
- Runner handles execution evidence with an unavailable legacy error code without crashing the Inspector.
- The bundled nested Operation example explicitly forwards its required inputs.

Existing Project persistence, execution evidence, Mock routing, and docking behavior are preserved. AI Agent integration is not included.

## Components

Desktop 1.0.2; Studio 0.11.49; Runner 0.32.44; Mock Server 0.8.6; Runtime 0.4.16; Executor 0.4.15; HTTP Executor 0.2.30; Contract 0.7.7.

## Installation

Download the installer for your platform and verify it against SHA256SUMS. Save your work and close QAICK before replacing an installation. Keep your existing Projects, History and application settings.

- Windows x64: QAICK-Desktop-1.0.2-Windows-x64-Setup.exe
- macOS 13+ Apple Silicon: QAICK-Desktop-1.0.2-macOS-arm64.dmg
- Linux x64: QAICK-Desktop-1.0.2-Linux-x64.AppImage
- Debian/Ubuntu x64: qaick-desktop_1.0.2_amd64.deb

The Windows installer is unsigned. The macOS build is ad-hoc signed and not notarized. Operating-system security warnings may require a user-initiated exception; do not disable protections globally.

These are the approved existing installer binaries, published without rebuilding. Diagnostic Script packages and traces are excluded. The previously accepted Windows machine-performance limitation is unchanged.
