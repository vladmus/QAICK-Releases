# QAICK Desktop — Security & Privacy

**Applies to:** QAICK Desktop Beta 1 (`1.0.0-rc.1`)  
**Last updated:** November 13, 2026

QAICK Desktop is a freeware application for creating, saving and running API workflows. This page explains how the current beta handles Projects, execution results, credentials and network communication.

## Your Projects and execution results

QAICK Desktop saves Projects as JSON files in a location you choose. It remembers the selected Project location in the application's local profile.

QAICK Runner keeps execution History in local application-profile storage. You can copy execution information and export results to JSON files. Studio's current Live Run view and Runner's saved History are separate.

Project files may also reside in folders you have configured for cloud synchronization or on network drives. Those locations are managed by you and your operating system.

## API requests and network connections

QAICK Desktop executes HTTP and HTTPS requests using the destinations configured in your API Actions. Inputs and output bindings can determine the final request URL, headers and body. A request can transmit those values to the destination API, including credentials or other sensitive data that you configure.

Desktop API execution uses the native application runtime rather than routing your configured requests through a Zerohead One API-execution service. QAICK Desktop does not provide automatic cloud synchronization of Projects or Runner History to Zerohead One.

The application is built on Electron/Chromium, which may also make operating-system or browser-engine network connections independently of your API workflows. For example, Chromium can download spelling dictionaries from Google's content-delivery network and perform proxy-discovery or network-reachability checks. These connections are distinct from user-configured API execution.

## Credentials and sensitive information

QAICK preserves full execution evidence by design. Depending on the API workflow, **saved Projects, Runner History, copied results and exported JSON may contain readable**:

- Authorization headers, API keys, cookies and other request credentials.
- Request URLs, parameters, headers and bodies.
- API response headers, bodies and values passed between Actions.

QAICK Desktop Beta 1 stores Project configuration and execution evidence locally in readable formats. It does **not** provide an application-managed encrypted credentials vault. Masking a value in a screen does not necessarily remove it from saved or exported evidence.

**Treat Projects and execution results as sensitive data.** Store them in appropriately protected folders, review exports before sharing, and be aware that clipboard contents can be accessible to other applications or clipboard-history tools.

For initial evaluation, use development environments and test credentials rather than production secrets.

## Desktop and browser demos

The downloadable Desktop application and the hosted Studio/Runner web demos use different environments. Desktop Projects use native files and the local application profile; browser versions use browser-managed storage and networking. Browser requests and redirects follow browser behavior and policies.

## Software distribution

Download QAICK Desktop from the [official Beta 1 release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.0-rc.1). Installer checksums are available in [SHA256SUMS](SHA256SUMS).

The Windows installer is unsigned, and the macOS application is not Apple notarized. Follow your operating system's per-application guidance when deciding whether to install or run the beta. Do not disable system-wide security protections.

## Questions and feedback

For product information and contact details, visit [Zerohead One](https://zerohead-one.com/). When reporting an issue, avoid sharing credentials, private Projects or unreviewed execution logs.

© 2026 Zerohead One Inc.
