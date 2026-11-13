# QAICK Desktop Beta 1 — Security & Privacy Information

**Published:** November 13, 2026  
**Applies to:** QAICK Desktop Beta 1 (`1.0.0-rc.1`)  
**Status:** Public technical disclosure based on a bounded source review and an installed Linux production-build observation. **Not an independent security audit or certification.**

This document describes confirmed behavior, limitations, and verification scope. It does not promise that every component, platform, future build, or possible user workflow has been assessed.

## Summary

- **Project storage:** QAICK Desktop saves Projects as JSON files at a location selected by the user. The application stores the selected file location in its local profile.
- **Runner History:** Saved execution History uses local application-profile storage; results can be copied or exported as JSON. Studio's transient Live Run state is not the same as durable Runner History.
- **Credentials and evidence:** Project configuration, execution History, Copy and exported results **can contain readable API credentials, headers, cookies, input values and response data**. This is intentional full-fidelity behavior. QAICK Beta 1 does **not** provide an application-level encrypted vault for API credentials. Treat Project and evidence files as sensitive.
- **API requests:** Desktop HTTP execution sends requests to resolved user-configured HTTP(S) destinations; variable bindings can affect the destination. A controlled Linux test confirmed the configured destination and dependency propagation. The inspected native transport did not follow a tested HTTP 302 redirect. Browser execution can behave differently.
- **Uploads to Zerohead One:** The reviewed production components and bounded Linux observation identified **no application telemetry or automatic Project/results upload to Zerohead One servers**. This is limited evidence, **not a universal guarantee that data never leaves the machine**. User-configured API requests and Scripts can communicate with external services.
- **Automatic third-party contacts:** On a fresh Linux application profile, Chromium automatically downloaded a British English spellchecking dictionary from Google's CDN, without running any API workflow. Consequently, QAICK Beta 1 **is not accurately described as having no automatic external network connections**. The observed dictionary request is not evidence that Project contents or credentials were uploaded.

## What was verified

CODI inspected the frozen product source and installed dependencies corresponding to Beta 1, and observed the production-mode Linux DEB with an isolated application profile and synthetic data. Activities included startup and idle, Project open/edit/save, ordinary HTTP Send, a two-Action dependency Stream, integrated Runner, History/export/Copy, an HTTP redirect response, a failed connection and application shutdown.

The tested Linux application used a local HTTP test server. The controlled requests reached configured loopback endpoints; no alternate HTTP API destination was observed in that test. A fresh-start automatic spelling-dictionary download was independently reproduced through process-aware networking evidence and Chromium NetLog.

**Not verified in this report:** Windows/macOS runtime network behavior; live web-demo network traffic; every possible user Script; long-duration automatic checks; all retry permutations; or decrypted contents of third-party HTTPS connections. Absence of a connection during the bounded run cannot prove absence in every future run.

## Protecting your API data

- Use test credentials and non-sensitive API data when evaluating the beta.
- Keep Project JSON files, local Runner History and exported evidence in locations protected by your operating-system account and file permissions.
- Review exports, copied evidence and screenshots **before sharing**. Full-fidelity artifacts may include secrets; ordinary UI masking does not remove their values from stored results.
- Avoid saving real production credentials as literal inputs or headers unless you accept that those values may be present in readable local artifacts.
- User-selected Project destinations may be network-mounted or cloud-synchronized folders; control over those folders belongs to the user and their environment.
- Clipboard contents may be accessible to other software or clipboard-history services on the same device. Clear the clipboard when appropriate.

## Browser demos versus Desktop

The hosted Studio and Runner web demos are distinct from the native Desktop application. Browser storage, browser networking, hosted page delivery and redirect behavior may differ. This Linux Desktop verification does not certify the hosted demos' data-handling behavior.

## Known limitations and planned checks

- **Spellchecking:** Linux Beta 1 may automatically contact Google's CDN to download a spelling dictionary. A future product decision will consider disabling automatic spellchecking/dictionary downloads; no change has been made to Beta 1.
- **Windows and macOS:** Native automatic-network behavior has not yet been checked under this same observation procedure.
- **Local storage protection:** Current Project/evidence storage is not an application-encrypted secrets vault. Full evidence retention is intentional; users are responsible for protecting and sharing those files appropriately.
- **Other security matters:** This document does not claim formal security certification, comprehensive penetration testing, or that every security-hardening topic is closed.

## Release integrity

Use the official [Beta 1 release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.0-rc.1) and verify the downloaded installer against [SHA256SUMS](SHA256SUMS). The Windows installer is unsigned; the macOS DMG is not Apple notarized.

## Scope and provenance

The underlying November 13, 2026 verification report examined QAICK Studio `0.11.46`, Runner `0.32.34`, Runtime `0.4.14`, HTTP Executor `0.2.28`, Executor `0.4.13`, Contract `0.7.5`, and Electron `44.10.2`. Linux was tested using the distributed DEB package, with synthetic credentials and without opening private owner Projects. Raw traces and synthetic result files were **not** published.

Questions or reports: see [zerohead-one.com](https://zerohead-one.com/). Do **not** include credentials, private Projects or raw execution results in public reports.

© 2026 Zerohead One Inc.
