# QAICK Desktop — Security & Privacy

**Version `1.0.1` · November 22, 2026**

QAICK Desktop combines Studio, Runner and Mock Server in one local application for authoring API workflows, executing them and inspecting recorded evidence.

## Data handling and intentional requests

QAICK's privacy requirement is that external data exchange occurs through explicit user intention. User-initiated API requests and their responses are part of normal application operation.

The existing assessment found no transmission of Projects, credentials or execution History to Zerohead One, and no QAICK usage analytics or telemetry transmission in the exercised workflows. QAICK does not synchronize these records to a Zerohead One cloud service.

Requests execute from your computer using the destinations, headers, credentials and values configured in your Actions and bindings. Optional Mock routing sends eligible requests to the integrated local Mock Server instead. Recorded execution evidence distinguishes the original API URL, effective destination and response source. The exercised failed Mock-routing case did not silently fall back to the original API.

## Local storage and recorded evidence

- **Projects and Mock collections:** Saved to local files selected by the user.
- **Execution History:** Retained in the local application profile.
- **Results:** Available for inspection, copying and export.
- **Recorded HTTP drafts:** Created by explicitly enabled Studio recording; inactive until approved and saved.

Projects, collections, History and exports can retain authorization headers, cookies, API keys and request/response content. QAICK preserves these original values as execution evidence; it does not silently redact them. Review files and copied evidence before sharing. Operating-system file permissions and clipboard-history settings apply. Files placed in a cloud-synchronized folder or network drive follow that location's storage behavior.

## Automatic dictionary download — corrected

Sherlock's initial installed 1.0.1 assessment confirmed an automatic spelling-dictionary download from Google's redirector/CDN. Under the owner's requirement against unsolicited external data exchange, that was a confirmed failure. No Project or credential disclosure was demonstrated by that download.

Spellcheck was subsequently disabled before renderer creation, with its dictionary-language list cleared. No dictionaries were bundled.

Sherlock's independent installed Linux retest confirmed:

- No dictionary download, external Chromium URL request or dictionary file during the observed fresh-start and restart sessions.
- Studio, Runner and Mock Server opened normally.
- No fixture request occurred before explicit execution.
- A user-initiated Script and HTTP workflow completed successfully and retained its configured synthetic authorization header and original response values.
- History and exported execution evidence survived restart unchanged.

The original failed assessment remains preserved separately. Its result is not rewritten as a pass.

## IPv6 reachability observation — investigated

The corrected-build retest recorded a UDP connection attempt to `[2001:4860:4860::8888]:443` that failed locally with `ENETUNREACH`. No successful external connection or subsequent external send was observed.

The matching Chromium source and recorded NetLog identify this as an IPv6 route-availability check triggered while connecting to the local Mock Server. On the inspected Linux path, the probe associates a UDP socket with a destination and reads its local address; it does not send or receive an application datagram. Port 443 is the source-defined default, not evidence of an HTTPS, QUIC or DNS exchange.

Archi reviewed the source investigation and concluded that no violation of the owner's external-data-exchange requirement was confirmed, and no correction was recommended. This conclusion combines recorded Linux observations with source inspection; an IPv6-connected runtime experiment was not performed.

## Verification basis and result

**Independent investigator:** Sherlock. Initial assessment: November 21–22, 2026. Corrected installed-build retest: November 22, 2026. **Source investigation:** Codi, reviewed by Archi.

The retest used the installed Linux Desktop 1.0.1, isolated application profiles and synthetic data. It covered fresh startup, idle periods, all three component views, one intentional Script/HTTP execution, restart, History and exported-result equality. Chromium NetLog and process-tree network syscall records supplied the network observations. All 1,471 installed package files matched the tested DEB and remained unchanged. Existing evidence evaluation recorded 21 passing comparisons; negative controls rejected an added dictionary request and altered response data.

The independently retested DEB SHA-256 was `3590284a94588f69f72b66e323bc856c5f61144b2e267edc4f43f91c50322f2c`. Its manifest identified Studio 0.11.49, Runner 0.32.43, Mock Server 0.8.5 and Electron 44.10.2. This identifies the tested package precisely because later installers retain version 1.0.1.

**Result:** The unsolicited dictionary-download correction passed the bounded installed Linux retest. No unintended external data transfer was demonstrated in the observed corrected-build sessions. Original credentials, zero, false, empty strings, null and nested response values were preserved.

This report summarizes existing evidence; no testing was repeated for this update. The security retest applies to the identified Linux package and workflows. Later installer rebuilds and their checksums identify the distributed files; they are not additional independent security tests. No 1.0.1 Windows/macOS security retest is claimed. The work was a focused assessment, not a full penetration test or security certification; Chromium NetLog alone does not cover all native HTTP traffic.

## Desktop and browser demos

This report covers QAICK Desktop. Hosted browser demos use browser storage and networking rules. The hosted Mock Server demo is an authoring interface, not a publicly callable mock endpoint service.

## Downloads and verification

Download [QAICK Desktop 1.0.1](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.1) and verify the installer against the accompanying [SHA256SUMS](https://github.com/vladmus/QAICK-Releases/releases/download/v1.0.1/SHA256SUMS). Installer checksums establish file identity, not a security verdict.

Windows installers are unsigned and macOS builds are ad-hoc signed, not notarized. Your operating system may display a publisher or security warning. Verify the download source and checksum; do not disable operating-system protections globally.

## Contact

For product or security questions, contact **Zerohead One Inc.** at [zeroheadone@gmail.com](mailto:zeroheadone@gmail.com). Product information is available at [zerohead-one.com](https://zerohead-one.com/). Do not include credentials, private Projects or unreviewed execution logs in an initial report.

© 2026 Zerohead One Inc.
