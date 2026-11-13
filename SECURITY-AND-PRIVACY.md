# QAICK Desktop — Security & Privacy

**Beta 1 · Version `1.0.0-rc.1` · November 13, 2026**

QAICK Desktop is a local application for building, running and reviewing API workflows. Your Projects, API requests and execution results remain under your control.

## Data collection and privacy

**QAICK Desktop does not collect usage analytics or application telemetry.**

QAICK does not automatically upload your Projects, credentials or execution History to Zerohead One. It does not synchronize these records to a Zerohead One cloud service.

Your API workflows execute from your computer. **HTTP and HTTPS requests are sent directly to the destinations resolved from your configured Actions and bindings**, not through Zerohead One servers. As with any API client, those requests can include the headers, credentials, bodies and other data you choose to send.

## Local data storage

- **Projects:** Stored as JSON files at locations you select.
- **Execution History:** Stored in QAICK's local application profile.
- **Results:** Available for inspection, copying and export to local files.

If you save a Project in a cloud-synchronized folder or network drive, the storage and synchronization behavior of that location applies.

## Credentials and execution evidence

QAICK retains detailed API request and response evidence to support investigation and repeatable workflows.

**Projects, History, copied results and exported files may contain readable API credentials and sensitive response data**, including authorization headers, API keys and cookies. This is intentional full-fidelity evidence retention.

QAICK Desktop Beta 1 does not include an application-managed encrypted credential vault. Protect Project and result files using your operating system's access controls. Review any evidence before sharing it, and remember that copied data may remain in your clipboard or clipboard history.

## Other network activity

QAICK is built on Electron/Chromium. Alongside your API requests, Chromium may make its own supporting network connections—for example, downloading spellchecking dictionaries or performing proxy and network-connectivity checks. These are platform functions, not QAICK usage analytics or uploads of your Projects to Zerohead One.

## Privacy verification — Linux and Windows

On **November 13, 2026**, Zerohead One performed hands-on privacy and network verification of the **installed QAICK Desktop Beta 1 production application** on **Linux Mint 22.3** and **Windows 10 x64**. The checks combined production-code inspection, process-aware network observation and controlled API requests using synthetic data.

Both platforms were exercised through Project saving, HTTP Send, multi-Action Stream execution with output bindings, integrated Runner execution, History, Copy and JSON export. Windows History persistence was also confirmed after an application restart.

**Results of the Linux and Windows verification:**

- **Local storage confirmed:** Projects and Runner History were saved locally, and exported results retained their expected contents.
- **Direct API communication confirmed:** Controlled HTTP requests reached their configured test-server destinations, with data passed correctly between dependent Actions.
- **No Zerohead One data uploads observed:** Neither test recorded transmission of Projects or execution results to Zerohead One.
- **No QAICK telemetry observed:** Neither test recorded QAICK usage analytics or telemetry transmission.
- **Full-fidelity evidence confirmed:** Saved Projects and execution evidence retained configured synthetic credentials, consistent with the behavior described above.

The network checks also distinguished supporting Chromium activity from API execution: Linux downloaded a spelling dictionary, while Windows recorded proxy-discovery and IPv6 reachability activity.

These are **product verification results on the tested Linux and Windows configurations**, not a claim of independent security certification.

## Desktop and web demos

This page describes **QAICK Desktop**. The hosted Studio and Runner web demos operate in a browser, where storage, networking and redirect behavior follow browser rules.

## Official downloads

Get the application from the [official QAICK Desktop Beta 1 release](https://github.com/vladmus/QAICK-Releases/releases/tag/v1.0.0-rc.1). [SHA-256 checksums](SHA256SUMS) are provided to verify downloads.

Beta 1 is distributed without a signed Windows installer or Apple notarization. Your operating system may show a publisher or security warning; review the download source and checksum before proceeding.

## Questions

Visit [Zerohead One](https://zerohead-one.com/) for product information and contact details. Please avoid including credentials, private Projects or unreviewed execution logs in public feedback.

© 2026 Zerohead One Inc.
