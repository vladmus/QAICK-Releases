# QAICK Desktop Beta 1 — Security & Privacy Information

**Published:** November 13, 2026  
**Applies to:** QAICK Desktop Beta 1 (`1.0.0-rc.1`)  
**Status:** Public technical disclosure based on bounded source review and installed Linux and Windows production-build observations. **Not an independent security audit or certification.**

This document describes confirmed behavior, limitations, and verification scope. It does not promise that every component, platform, future build, or possible user workflow has been assessed.

## Summary

- **Project storage:** QAICK Desktop saves Projects as JSON files at a location selected by the user. The application stores the selected file location in its local profile.
- **Runner History:** Saved execution History uses local application-profile storage; results can be copied or exported as JSON. Studio's transient Live Run state is not the same as durable Runner History.
- **Credentials and evidence:** Project configuration, execution History, Copy and exported results **can contain readable API credentials, headers, cookies, input values and response data**. This is intentional full-fidelity behavior. QAICK Beta 1 does **not** provide an application-level encrypted vault for API credentials. Treat Project and evidence files as sensitive.
- **API requests:** Desktop HTTP execution sends requests to resolved user-configured HTTP(S) destinations; variable bindings can affect the destination. Controlled Linux and Windows tests confirmed the configured destinations and dependency propagation. The inspected native transport did not follow a tested HTTP 302 redirect. Browser execution can behave differently.
- **Uploads to Zerohead One:** The reviewed production components and bounded Linux and Windows observations identified **no application telemetry or automatic Project/results upload to Zerohead One servers**. This is limited evidence, **not a universal guarantee that data never leaves the machine**. User-configured API requests and Scripts can communicate with external services.
- **Automatic third-party contacts:** On a fresh Linux application profile, Chromium automatically downloaded a British English spellchecking dictionary from Google's CDN, without running any API workflow. Consequently, QAICK Beta 1 **is not accurately described as having no automatic external network connections**. The observed dictionary request is not evidence that Project contents or credentials were uploaded.

## What was verified

CODI inspected the frozen product source and installed dependencies corresponding to Beta 1, and observed the production-mode Linux DEB with an isolated application profile and synthetic data. Activities included startup and idle, Project open/edit/save, ordinary HTTP Send, a two-Action dependency Stream, integrated Runner, History/export/Copy, an HTTP redirect response, a failed connection and application shutdown.

The tested Linux application used a local HTTP test server. The controlled requests reached configured loopback endpoints; no alternate HTTP API destination was observed in that test. A fresh-start automatic spelling-dictionary download was independently reproduced through process-aware networking evidence and Chromium NetLog.

**Not verified in this report:** Windows/macOS runtime network behavior; live web-demo network traffic; every possible user Script; long-duration automatic checks; all retry permutations; or decrypted contents of third-party HTTPS connections. Absence of a connection during the bounded run cannot prove absence in every future run.

## Windows verification addendum — November 13, 2026

A second bounded observation used the installed **Windows 10 Home x64** production-mode QAICK Desktop Beta 1 (Studio `0.11.46`, integrated Runner `0.32.34`) and a **synthetic Project in an existing application profile**. The owner explicitly permitted that narrow test. The profile was not fresh, and unrelated stored results were not inspected.

- **Local data:** The synthetic Project was saved as local JSON; the application-profile association referenced it. Integrated Runner History survived a complete application shutdown and restart. Synthetic Authorization/Cookie values were readable in Project configuration, local History, native Copy and JSON export, consistent with the intentional full-fidelity model.
- **Controlled requests:** Ordinary Send, two-Action Stream with output bindings, integrated Runner and a 302 redirect test contacted the configured loopback fixture at `127.0.0.1:5197`. The tested native HTTP 302 response was not followed. No alternate API destination was observed in that controlled test.
- **Uploads / telemetry:** No uploads to Zerohead One or analytics/telemetry/update/crash-report transmission were identified during the observed startup, idle, workflow, History/export and shutdown activity. A crash was not induced. This is **not** a guarantee of absence in untested conditions.
- **Automatic Windows behavior:** Chromium performed automatic **WPAD proxy-discovery attempts** (DHCP/PAC and `wpad` DNS resolution, without a confirmed HTTP proxy connection) and **IPv6 reachability probes** (failed UDP socket connects). These are not evidence of Project/credential uploads or successful external payload transmission, but they mean startup networking cannot be described as categorically absent.
- **Not established:** Fresh-profile spelling-dictionary behavior on Windows; installed-file byte-for-byte equivalence with extracted installer payload; crash-triggered or long-duration traffic. The installed product/version metadata matched the released candidate, but the installed executable was not independently compared to the installer payload.

This Windows result complements but does not replace the Linux observation. Raw network traces and synthetic credential evidence remain private.

## macOS verification status — November 13, 2026

The installed macOS production build was identified, but an attempted isolated-profile launch still resolved to the existing real user's `~/Library/Application Support/qaick-studio` profile. To protect user data, the investigator did **not** open that Project, create synthetic data or run the requested workflow. **All six macOS privacy/network dispositions remain NOT VERIFIED.** A clean macOS test account or other safely isolated environment is needed before making macOS-specific claims.

## Protecting your API data

- Use test credentials and non-sensitive API data when evaluating the beta.
- Keep Project JSON files, local Runner History and exported evidence in locations protected by your operating-system account and file permissions.
- Review exports, copied evidence and screenshots **before sharing**. Full-fidelity artifacts may include secrets; ordinary UI masking does not remove their values from stored results.
- Avoid saving real production credentials as literal inputs or headers unless you accept that those values may be present in readable local artifacts.
- User-selected Project destinations may be network-mounted or cloud-synchronized folders; control over those folders belongs to the user and their environment.
- Clipboard contents may be accessible to other software or clipboard-history services on the same device. Clear the clipboard when appropriate.

## Browser demos versus Desktop

The hosted Studio and Runner web demos are distinct from the native Desktop application. Browser storage, browser networking, hosted page delivery and redirect behavior may differ. These Linux and Windows Desktop observations do not certify the hosted demos' data-handling behavior.

## Known limitations and planned checks

- **Spellchecking:** Linux Beta 1 may automatically contact Google's CDN to download a spelling dictionary. A future product decision will consider disabling automatic spellchecking/dictionary downloads; no change has been made to Beta 1.
- **Windows:** Existing-profile native observation identified WPAD/proxy-discovery and failed IPv6 probes; fresh-profile dictionary behavior remains unverified.
- **macOS:** An attempted verification was stopped because the test could not be isolated from an existing user profile. No macOS network or storage findings were established.
- **Local storage protection:** Current Project/evidence storage is not an application-encrypted secrets vault. Full evidence retention is intentional; users are responsible for protecting and sharing those files appropriately.
- **Other security matters:** This document does not claim formal security certification, comprehensive penetration testing, or that every security-hardening topic is closed.

## Release integrity

Use the official [Beta 1 release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.0-rc.1) and verify the downloaded installer against [SHA256SUMS](SHA256SUMS). The Windows installer is unsigned; the macOS DMG is not Apple notarized.

## Scope and provenance

The underlying November 13, 2026 verification report examined QAICK Studio `0.11.46`, Runner `0.32.34`, Runtime `0.4.14`, HTTP Executor `0.2.28`, Executor `0.4.13`, Contract `0.7.5`, and Electron `44.10.2`. Linux was tested using the distributed DEB package with an isolated profile. Windows was tested in the installed native application using an owner-authorized synthetic Project within an existing profile. The macOS investigation stopped before touching real user Project data. Raw traces and synthetic result files were **not** published.

Questions or reports: see [zerohead-one.com](https://zerohead-one.com/). Do **not** include credentials, private Projects or raw execution results in public reports.

© 2026 Zerohead One Inc.
