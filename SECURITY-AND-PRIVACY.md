# QAICK Desktop — Security & Privacy

**Version 1.0.4 · Updated November 25, 2026**

QAICK Desktop combines Studio, Runner and Mock Server in a local application for creating API workflows, running them and inspecting recorded results.

## Your data stays on your computer

Projects and Mock Server collections are saved to files you choose. Execution History is stored in the local application profile. Results can be inspected, copied and saved as Run Result files.

QAICK Desktop does not synchronize Projects, credentials or History to a Zerohead One cloud service. No transmission of these records to Zerohead One, or usage analytics or telemetry transmission, was found in the verified workflows.

Local authoring, saved-result inspection and local Mock Server operation do not require an Internet connection. Requests to external APIs require connectivity to the destination you choose. Credits and License documents are bundled and available offline.

## Requests are under your control

API requests execute from your computer using the destinations, headers, credentials and values configured in your Actions and explicit bindings. Sending these requests and receiving their responses are intentional application operations.

Optional Mock routing sends eligible requests to the local Mock Server. Recorded results distinguish the original API address, actual destination and response source. The verified Mock-routing failure did not silently fall back to the real API.

Studio HTTP recording is optional. When enabled, it creates draft mock rules from Studio Live Run traffic. Drafts remain inactive until reviewed and successfully saved.

## Saved results may contain sensitive information

Projects, collections, History and saved results can contain authorization headers, cookies, API keys and request or response content. QAICK preserves original values as execution evidence and does not silently redact them.

Review files and copied results before sharing. Operating-system file permissions and clipboard-history settings apply. Files saved in a cloud-synchronized folder or network drive follow that location's storage and sharing behavior.

Verification confirmed that recorded request and response values, including empty strings, zero, false and null, were preserved. The tested History records remained unchanged after restarting the application. Opening a saved Run Result did not execute the workflow again.

## Local Mock Server

The integrated Mock Server listens on `127.0.0.1`, using a port assigned automatically when it starts. This address is local to your computer. The verified listener was not bound to a LAN-facing address; access through the computer's LAN address was refused.

The current address is displayed in Mock Server. Local mock requests and responses remain on your computer unless you deliberately configure other external activity.

## No automatic spelling downloads

Spellcheck and its dictionary services are disabled. QAICK Desktop does not bundle or automatically download spelling dictionaries. Independent startup and restart checks found no dictionary download.

## Script execution controls

Script Actions run in the existing sandbox with a default execution limit of **60 seconds**. You can configure the timeout for each Script Action. Existing Scripts without an explicit timeout use the default.

Manual cancellation remains available. The overall Run timeout is separate and can stop execution sooner. Verified timeout and cancellation checks retained the actual outcome without inventing successful outputs. These controls do not constitute an exhaustive guarantee against every possible malicious Script.

## Verification coverage

Developer verification and independent assessment support this report. Independent checks of the final Linux 1.0.4 application covered startup, idle operation, navigation through Studio, Runner and Mock Server, an explicitly initiated Script/HTTP workflow, normal restart and History preservation. **No unintended external data exchange was demonstrated in those observed paths.** The deliberate HTTP request used a controlled local endpoint, and the recorded request and response matched the actual exchange.

Script timeout and cancellation controls also have developer verification and independent Linux verification from an earlier 1.0.4 build. This is separate from the final-build privacy assessment.

All four installer identities below were verified. The same native privacy assessment was not performed on Windows or macOS. These are focused verification results, not a full penetration test, security certification or guarantee covering every possible workflow and environment.

## Downloads and file verification

Download [QAICK Desktop 1.0.4](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.4) and compare the installer with the accompanying [SHA256SUMS](https://github.com/vladmus/QAICK-Releases/releases/download/v1.0.4/SHA256SUMS). A matching checksum confirms file identity; it is not a security verdict.

| Installer | Bytes | SHA-256 |
| --- | ---: | --- |
| `QAICK-Desktop-1.0.4-Linux-x64.AppImage` | 132040496 | `43ed8bb3a9ba6b1d74b27b0a7e5f493ed940fc5fc0cb1f4ba70d6b4bb15e539b` |
| `qaick-desktop_1.0.4_amd64.deb` | 104167404 | `5d149c0cf26d5dfb3438290e3cb07497aa7abb18ffc88a39db0dcda9792b1eeb` |
| `QAICK-Desktop-1.0.4-Windows-x64-Setup.exe` | 118958367 | `220bfefc038fa42e297eb159b9c7c53be6a671d2ba309d22bd70d2bfac6f1fcb` |
| `QAICK-Desktop-1.0.4-macOS-arm64.dmg` | 136506684 | `79662fe253ca1200481cd3a69d754303f77e167eee9a84c88e9664f16cde8ea3` |

Windows installers are unsigned. macOS builds are ad-hoc signed and not notarized. Your operating system may display a publisher or security warning. Verify the download source and checksum; do not disable operating-system protections globally.

## Contact

For product or security questions, contact **Zerohead One Inc.** at [zeroheadone@gmail.com](mailto:zeroheadone@gmail.com). Product information is available at [zerohead-one.com](https://zerohead-one.com/). Do not include credentials, private Projects or unreviewed execution logs in an initial report.

© 2026 Zerohead One Inc.
