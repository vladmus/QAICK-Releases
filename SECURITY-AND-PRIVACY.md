# QAICK Desktop — Security & Privacy

**QAICK Desktop `1.0.4` · Report revision 3 · November 25, 2026**

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

## Current 1.0.4 verification basis

This revision consolidates existing CODI developer verification and SHERLOCK independent evidence. It covers the final single-instance-corrected Desktop 1.0.4 installers identified below. No investigation, application test or build was repeated for this documentation update. Historical evidence retains its original results and package identities.

The current composition is Desktop **1.0.4**, Studio **0.11.49**, Runner **0.32.47**, Mock Server **0.8.6**, Runtime **0.4.17**, Contract **0.7.7**, Executor **0.4.15**, HTTP Executor **0.2.30** and Electron **44.10.2**. Contract already supported optional Action timeouts; the correction required no Contract schema or version change.

The final product source includes the single-instance correction `5d432d34d70b95acf00940b31d77a686c2af833d`; the packaging freeze is `6668174ef5de5c858ba6ecedc9b02ca7dfa68079`. Secondary launches activate the existing Studio main window rather than creating another application runtime. CODI's earlier native Linux observations preserved unsaved drafts, detached windows and the listener across secondary launches. Active native execution preservation and native Windows/macOS single-instance behavior were not completed in that evidence; simulated lifecycle checks are not substituted for those observations.

### Current independent privacy result

SHERLOCK independently exercised the normal extracted payload of the final Linux AppImage with an isolated profile and synthetic data. Fresh startup, idle/navigation through all three applications, a deliberate Script/HTTP Run, normal quit, same-profile restart and History inspection/export showed **no unintended external data exchange within the observed paths**. This is current 1.0.4 evidence, separate from the historical 1.0.1 retest below.

- No fixture request occurred before the explicit Run. All observed Chromium HTTP URLs were desktop-local; no external HTTP, WebSocket or dictionary request appeared. Descendant network syscall observation supplied coverage beyond Chromium NetLog for the exercised native execution path.
- The deliberate Script/HTTP Run completed and produced exactly one intended local fixture request. Final recorded request values matched the independent receipt, including synthetic content and `0`, `false`, empty string and `null`. Actual response and nested attempt evidence were retained.
- Restart produced no automatic replay or additional fixture request. The complete saved History record, including events, identities, inputs, responses and attempts, was equal before and after restart. Export envelope identifiers/timestamps may legitimately differ.
- The Mock listener actually bound to `127.0.0.1`, not a LAN-facing address, in both sessions. Loopback access succeeded; access through the desktop's own LAN address was refused. Normal quit closed the listeners. A second-computer probe was not performed.
- Spellcheck preferences recorded no dictionaries and disabled the spelling service. No dictionary file or download appeared in the isolated application/profile/cache. The application continues to ship without spellcheck dictionaries.

SHERLOCK recorded **23/23 evidence comparisons passing**, with negative controls detecting an added dictionary URL, an otherwise missed connected-socket send and altered trace data. These are comparisons of existing observations, not 23 new application scenarios.

The intentional request in this retest used a controlled loopback API. It establishes deliberate dispatch, receipt and faithful evidence without contacting a third party; it is not a claim that a fresh external Internet API test was performed. User-configured external requests and their responses remain permitted; the correction does not impose a general network block.

The same failed IPv6 UDP reachability attempt described below was observed again, without successful remote connection or demonstrated data transfer. It is not described as a new leak or as “zero external attempts.” The resolved architectural interpretation is preserved.

### Local operation, user data and platform coverage

Studio authoring, Runner execution/evidence and Mock Server operate locally. Packaged Credits and License documents open offline. User Projects and collections remain user-selected files; History remains local. No QAICK cloud synchronization or usage-telemetry transmission was demonstrated in the exercised paths. These statements do not turn an intentional call to an external API into offline execution.

| Evidence scope | Existing result and boundary |
| --- | --- |
| Final single-instance-corrected Linux 1.0.4 AppImage payload | SHERLOCK current privacy, intentional Script/HTTP evidence, loopback binding, restart and History preservation: bounded PASS. Normal extracted payload; no system installation/upgrade or FUSE-launch claim. |
| Final four installers | SHERLOCK independently matched all four checksums and inspected actual package identity. CODI separately verified the published downloads against the approved installer identities. |
| Earlier 1.0.4 candidate | SHERLOCK independently verified Script timeout, cancellation, sandbox observations, History and offline documents. Its original installer hashes differ from the final single-instance rebuild; those original observations are retained at that scope. |
| Windows x64 | Final package identity verified. Native network privacy and final single-instance/active-execution behavior are not independently verified by these reports. Windows migration developer models are distinct from native upgrade/Norton acceptance. |
| macOS Apple Silicon | Final package identity verified. A separate operator reported earlier 1.0.4 core Script/Mock/History success; it is attributed operator evidence, not SHERLOCK native execution or an exact-final-installer security retest. Native final privacy and configurable-timeout/upgrade coverage remain unverified here. |

Owner Projects, History, settings and protected data were not modified by these assessments. Synthetic profiles and files supplied the evidence. Preservation observations apply to those controlled workflows, not an unperformed audit of every owner file.

## Script execution protection and timeouts

Scripts retain the existing sandbox and manual cancellation. The Script-specific default is now **60,000 ms**, configurable per Script Action using the existing timeout configuration pattern. Older Projects with no explicit Script timeout inherit that default. Saved occurrence configurations retain their own values; changing a reusable definition does not silently rewrite an already configured occurrence. The overall Run timeout remains separate and can end execution sooner.

CODI's developer checks covered Script preview/runtime propagation, validation, Save/Cancel, reload, cancellation and the unchanged execution boundaries. The earlier 1.0.4 SHERLOCK packaged-Linux observations independently demonstrated:

- A legacy Script without an explicit timeout completed after more than one second. A deliberately longer Script reached the inherited limit and returned the actual `SCRIPT_TIMEOUT` error after approximately 60 seconds.
- An explicit 25 ms timeout failed truthfully; invalid zero was rejected without saving the draft. Save, Cancel, reopen and restart preserved the intended configured value.
- Manual Stop produced the observed cancellation evidence without fabricated outputs or HTTP dispatch. A one-second overall Run deadline remained effective even when the Script limit was 60 seconds.
- Script `process` and `require` access returned `undefined` in the exercised sandbox probe. This is a bounded observation, not an exhaustive sandbox-escape assessment.
- History and portable Run Results preserved original recorded outcomes and typed values across restart; opening a saved result did not execute it again.

That campaign recorded 58/58 evidence comparisons passing. The final rebuild preserved the timeout implementation and component identities; the earlier native timeout checks were not rerun or relabeled as final-installer native tests. Existing developer baseline failures outside this correction remain recorded in the original developer report and are not represented as resolved by this security report.

## Historical automatic dictionary download — corrected

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

## Historical 1.0.1 verification basis and result

**Independent investigator:** Sherlock. Initial assessment: November 21–22, 2026. Corrected installed-build retest: November 22, 2026. **Source investigation:** Codi, reviewed by Archi.

The retest used the installed Linux Desktop 1.0.1, isolated application profiles and synthetic data. It covered fresh startup, idle periods, all three component views, one intentional Script/HTTP execution, restart, History and exported-result equality. Chromium NetLog and process-tree network syscall records supplied the network observations. All 1,471 installed package files matched the tested DEB and remained unchanged. Existing evidence evaluation recorded 21 passing comparisons; negative controls rejected an added dictionary request and altered response data.

The independently retested DEB SHA-256 was `3590284a94588f69f72b66e323bc856c5f61144b2e267edc4f43f91c50322f2c`. Its manifest identified Studio 0.11.49, Runner 0.32.43, Mock Server 0.8.5 and Electron 44.10.2. This identifies the tested package precisely because later installers retain version 1.0.1.

**Result:** The unsolicited dictionary-download correction passed the bounded installed Linux retest. No unintended external data transfer was demonstrated in the observed corrected-build sessions. Original credentials, zero, false, empty strings, null and nested response values were preserved.

That historical retest applies to the identified 1.0.1 Linux package and workflows. Later installer rebuilds did not extend its scope. No 1.0.1 Windows/macOS security retest is claimed; current 1.0.4 evidence is reported separately above. The work was a focused assessment, not a full penetration test or security certification; Chromium NetLog alone does not cover all native HTTP traffic.

## Desktop and browser demos

This report covers QAICK Desktop. Hosted browser demos use browser storage and networking rules. The hosted Mock Server demo is an authoring interface, not a publicly callable mock endpoint service.

## Final 1.0.4 installer identities

These are the final single-instance-corrected installers, independently matched in the current SHERLOCK report and matched to public downloads by CODI's existing publication verification. They supersede the earlier 1.0.4 candidate hashes for distribution identity, without changing that candidate's historical evidence.

| Installer | Bytes | SHA-256 |
| --- | ---: | --- |
| `QAICK-Desktop-1.0.4-Linux-x64.AppImage` | 132040496 | `43ed8bb3a9ba6b1d74b27b0a7e5f493ed940fc5fc0cb1f4ba70d6b4bb15e539b` |
| `qaick-desktop_1.0.4_amd64.deb` | 104167404 | `5d149c0cf26d5dfb3438290e3cb07497aa7abb18ffc88a39db0dcda9792b1eeb` |
| `QAICK-Desktop-1.0.4-Windows-x64-Setup.exe` | 118958367 | `220bfefc038fa42e297eb159b9c7c53be6a671d2ba309d22bd70d2bfac6f1fcb` |
| `QAICK-Desktop-1.0.4-macOS-arm64.dmg` | 136506684 | `79662fe253ca1200481cd3a69d754303f77e167eee9a84c88e9664f16cde8ea3` |

## Evidence register and revision history

The following existing records remain preserved with their raw observations and manifests. Private evidence identifiers below support traceability; they are not claims that the raw records are publicly downloadable.

| Existing record | Author / role | Scope used in this revision |
| --- | --- | --- |
| `privacy-1.0.4-current-2026-11-25/REPORT.txt` | SHERLOCK, independent QA | Final installer identities; current Linux network/privacy, loopback, spellcheck, explicit execution, restart and History; 23/23 comparisons. |
| `desktop-1.0.4-independent-2026-11-25/REPORT.txt` | SHERLOCK, independent QA | Earlier candidate's native Linux timeout, cancellation, sandbox and evidence observations; attributed macOS operator evidence. Original hashes and complete evaluation remain in that record. |
| `qaick-single-instance-2026-11-25/REPORT.txt` | CODI, developer/native Linux observations | Single-instance source correction, draft/window preservation and explicitly incomplete active-execution scope. |
| `qaick-windows-104-migration-correction-2026-11-25/REPORT.txt` | CODI, developer verification | Staged Windows migration, retained unknown files and modeled failure recovery; native boundary retained. |
| `qaick-desktop-104-final-2026-11-25/REPORT.txt` | CODI, build/artifact verification | Final source freeze, installer identities and retrieval verification. |
| `qaick-desktop-104-publication-2026-11-25/REPORT.txt` | CODI, publication verification | Authorized release, exact public download/checksum matches; no rebuild. |
| `security-installed-1.0.1-2026-11-21/REPORT.txt`; `no-spellcheck-independent-2026-11-22/REPORT.txt` | SHERLOCK, historical independent QA | Original dictionary failure and bounded corrected-build retest; retained without rewriting either outcome. |

Revision 1 described Desktop 1.0.1 evidence on November 22, 2026; a later download-link update referenced 1.0.4 while retaining that historical assessment. Revision 2, November 25, 2026, consolidated the current final 1.0.4 evidence. **Revision 3, November 25, 2026**, focuses the public report on user data, privacy and verified application security. Internal evidence is unchanged. The prior report revision and original evidence remain in private development history. This is a documentation consolidation, not a new security assessment, certification or platform acceptance.

## Downloads and verification

Download [QAICK Desktop 1.0.4](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.4) and verify the installer against the accompanying [SHA256SUMS](https://github.com/vladmus/QAICK-Releases/releases/download/v1.0.4/SHA256SUMS). Installer checksums establish file identity, not a security verdict.

Windows installers are unsigned and macOS builds are ad-hoc signed, not notarized. Your operating system may display a publisher or security warning. Verify the download source and checksum; do not disable operating-system protections globally.

## Contact

For product or security questions, contact **Zerohead One Inc.** at [zeroheadone@gmail.com](mailto:zeroheadone@gmail.com). Product information is available at [zerohead-one.com](https://zerohead-one.com/). Do not include credentials, private Projects or unreviewed execution logs in an initial report.

© 2026 Zerohead One Inc.
