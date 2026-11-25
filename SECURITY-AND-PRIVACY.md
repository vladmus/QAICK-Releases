# QAICK Desktop — Security & Privacy

**Version `1.0.4` · November 25, 2026**

QAICK Desktop combines Studio, Runner and Mock Server in one local application for authoring API workflows, executing them and inspecting recorded evidence.

## Data handling and intentional requests

QAICK's privacy requirement is that external data exchange occurs through explicit user intention. User-initiated API requests and their responses are part of normal application operation.

The existing assessment found no transmission of Projects, credentials or execution History to Zerohead One, and no QAICK usage analytics or telemetry transmission in the exercised workflows. QAICK does not synchronize these records to a Zerohead One cloud service.

Requests execute from your computer using the destinations, headers, credentials and values configured in your Actions and bindings. Optional Mock routing sends eligible requests to the integrated local Mock Server instead. Recorded execution evidence distinguishes the original API URL, effective destination and response source. The exercised failed Mock-routing case did not silently fall back to the original API.

The integrated Desktop Mock Server listens exclusively on the local loopback interface. The November 25 Linux assessment confirmed that the listener was reachable locally but refused connections through the computer's LAN address.

## Local storage and recorded evidence

- **Projects and Mock collections:** Saved to local files selected by the user.
- **Execution History:** Retained in the local application profile.
- **Results:** Available for inspection, copying and export.
- **Recorded HTTP drafts:** Created by explicitly enabled Studio recording; inactive until approved and saved.

Projects, collections, History and exports can retain authorization headers, cookies, API keys and request/response content. QAICK preserves these original values as execution evidence; it does not silently redact them. Review files and copied evidence before sharing. Operating-system file permissions and clipboard-history settings apply. Files placed in a cloud-synchronized folder or network drive follow that location's storage behavior.

## IPv6 reachability observation — investigated

The corrected-build retest recorded a UDP connection attempt to `[2001:4860:4860::8888]:443` that failed locally with `ENETUNREACH`. No successful external connection or subsequent external send was observed.

The matching Chromium source and recorded NetLog identify this as an IPv6 route-availability check triggered while connecting to the local Mock Server. On the inspected Linux path, the probe associates a UDP socket with a destination and reads its local address; it does not send or receive an application datagram. Port 443 is the source-defined default, not evidence of an HTTPS, QUIC or DNS exchange.

Architectural review examined the source investigation and concluded that no violation of the owner's external-data-exchange requirement was confirmed, and no correction was recommended. This conclusion combines recorded Linux observations with source inspection; an IPv6-connected runtime experiment was not performed.

The November 25, 2026 assessment of Desktop 1.0.4 recorded the same unsuccessful IPv6 connection attempt during startup. No external datagram transmission or reception was observed. This is consistent with the previously investigated Chromium route-availability check. No new violation of QAICK's external-data-exchange requirement was demonstrated.

## Verification basis and result

**Result:** No unintended external data transfer was demonstrated during the observed Linux sessions. Explicitly initiated API communication and Desktop-local communication behaved within the established privacy requirements.

## Desktop and browser demos

This report covers QAICK Desktop. Hosted browser demos use browser storage and networking rules. The hosted Mock Server demo is an authoring interface, not a publicly callable mock endpoint service.

## Downloads and verification

Download [QAICK Desktop 1.0.4](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.4) and verify the installer against the accompanying [SHA256SUMS](https://github.com/vladmus/QAICK-Releases/releases/download/v1.0.4/SHA256SUMS). Installer checksums establish file identity, not a security verdict.

Windows installers are unsigned and macOS builds are ad-hoc signed, not notarized. Your operating system may display a publisher or security warning. Verify the download source and checksum; do not disable operating-system protections globally.

## Contact

For product or security questions, contact **Zerohead One Inc.** at [zeroheadone@gmail.com](mailto:zeroheadone@gmail.com). Product information is available at [zerohead-one.com](https://zerohead-one.com/). Do not include credentials, private Projects or unreviewed execution logs in an initial report.

© 2026 Zerohead One Inc.
