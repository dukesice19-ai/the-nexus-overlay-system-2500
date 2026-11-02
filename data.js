window.NEXUS_DATA = {
  "metadata": {
    "platform": "THE NEXUS // INTERACTIVE DATA OVERLAY SYSTEM",
    "epoch": "2500.11.01-SYD",
    "copyright": "Copyright (c) 2026 GODFREY TRADING PTY LTD. All rights reserved.",
    "prepared_for": "Meta Platforms, Inc. & Executive Operations",
    "archive_sha256": "4a38ddb764d47f19876dcd14aa80da5ca45f89a3e43f4a756972fa46f1d6f64f",
    "encrypted_sha256": "96b3a8803f40f9ad4d80cc5f742f0c142e1223d9c898d7f0abaaded44077fe92"
  },
  "manuals": [
    {
      "id": "M-01",
      "num": "01",
      "file": "01-windows-wireshark-npcap.md",
      "cover": "assets/covers/cover-01.png",
      "title": "Native Windows Wireshark and Npcap Manual",
      "subtitle": "Use this method first for your Windows desktop/laptop's own Ethernet, Wi-Fi IP and loopback troubleshooting. It complements the existing WSL/SSH capture program rather than requiri",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and equipment",
        "Installation and configuration",
        "Bounded commissioning capture",
        "Troubleshooting and vulnerability checks",
        "Retention, rollback and acceptance"
      ],
      "size_bytes": 8246,
      "sha256_short": "e9b6f7862686b173"
    },
    {
      "id": "M-02",
      "num": "02",
      "file": "02-windows-pktmon.md",
      "cover": "assets/covers/cover-02.png",
      "title": "Windows Pktmon Capture and Drop-Diagnostics Manual",
      "subtitle": "Use Pktmon when Windows-side packet drops, virtual networking paths or stack components are central to the problem. Keep its native evidence as well as any PCAPNG conversion becaus",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and software",
        "Preflight and bounded setup",
        "Conversion and commissioning",
        "Troubleshooting and vulnerability interpretation",
        "Storage and rollback"
      ],
      "size_bytes": 7576,
      "sha256_short": "fc5e515fa72e46c4"
    },
    {
      "id": "M-03",
      "num": "03",
      "file": "03-windows-netsh-etw.md",
      "cover": "assets/covers/cover-03.png",
      "title": "Windows netsh and ETW Network Trace Manual",
      "subtitle": "Use a Windows scenario trace when network events and operating-system context matter more than a packet-only view. This is a separate ETL workflow, not a direct input stream for th",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Discovery and configuration",
        "Commissioning and analysis",
        "Troubleshooting and vulnerability checks",
        "Rollback and retention"
      ],
      "size_bytes": 7637,
      "sha256_short": "bc85cee1cd9c84f5"
    },
    {
      "id": "M-04",
      "num": "04",
      "file": "04-linux-dumpcap-tshark.md",
      "cover": "assets/covers/cover-04.png",
      "title": "Linux dumpcap and tshark Capture Manual",
      "subtitle": "Use dumpcap for a bounded Linux-host capture and Wireshark or tshark for later analysis. Start with stopped evidence rather than coupling a privileged capture process to a long-run",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope, reuse and installation",
        "Preflight",
        "Bounded capture",
        "Commissioning and analysis",
        "Troubleshooting and vulnerabilities"
      ],
      "size_bytes": 8168,
      "sha256_short": "5f0c00bef0196175"
    },
    {
      "id": "M-05",
      "num": "05",
      "file": "05-switch-mirroring-and-taps.md",
      "cover": "assets/covers/cover-05.png",
      "title": "Switch Mirroring and Network TAP Manual",
      "subtitle": "Use an approved mirror/SPAN port or TAP when the capture computer must observe traffic other than its own. The physical observation point is part of the measurement and must be doc",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Visibility and equipment",
        "Installation and configuration",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Storage, rollback and handover"
      ],
      "size_bytes": 7537,
      "sha256_short": "d26ab9184feaa8a2"
    },
    {
      "id": "M-06",
      "num": "06",
      "file": "06-wireshark-sshdump.md",
      "cover": "assets/covers/cover-06.png",
      "title": "Wireshark sshdump Remote Capture Manual",
      "subtitle": "Use sshdump when you want Wireshark's own remote-capture interface over SSH. It is an alternative workflow, not a GUI wrapper that automatically inherits the existing SSH PCAP appl",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Setup and authentication",
        "Stream and feedback safeguards",
        "Commissioning",
        "Troubleshooting and rollback"
      ],
      "size_bytes": 8093,
      "sha256_short": "4d1bcd8cbf15ba14"
    },
    {
      "id": "M-07",
      "num": "07",
      "file": "07-wifi-wireless-diagnostics.md",
      "cover": "assets/covers/cover-07.png",
      "title": "Wi-Fi and Wireless Troubleshooting Manual",
      "subtitle": "Use this manual to decide whether the problem is the client's IP connection, the access point or the radio link. Start with your own device's normal connection diagnostics before b",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and equipment",
        "Installation and capture-point selection",
        "Commissioning procedure",
        "Troubleshooting and vulnerabilities",
        "Storage and rollback"
      ],
      "size_bytes": 7440,
      "sha256_short": "f29c6427c3de8172"
    },
    {
      "id": "M-08",
      "num": "08",
      "file": "08-android-pcapdroid.md",
      "cover": "assets/covers/cover-08.png",
      "title": "Galaxy S24 Ultra Android Capture Manual",
      "subtitle": "Use PCAPdroid as an optional, separate workflow for your phone's own app connections. This does not change the existing SSH toolkit's Android role: that toolkit still runs on Linux",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and compatibility",
        "VPN and privacy preflight",
        "Installation and commissioning",
        "TLS and application limits",
        "Troubleshooting and rollback"
      ],
      "size_bytes": 8132,
      "sha256_short": "d22fd02532a21536"
    },
    {
      "id": "M-09",
      "num": "09",
      "file": "09-explicit-web-proxy.md",
      "cover": "assets/covers/cover-09.png",
      "title": "Explicit HTTP and HTTPS Debugging Proxy Manual",
      "subtitle": "Use an explicit mitmproxy-family proxy for an owned test browser or application configured to use it. This is an active, consented debugging path with a trust change, not a passive",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Software, scope and installation",
        "Local setup",
        "Optional HTTPS inspection",
        "Commissioning and storage",
        "Troubleshooting and security interpretation"
      ],
      "size_bytes": 7037,
      "sha256_short": "0b0bdcc8f4a64613"
    },
    {
      "id": "M-10",
      "num": "10",
      "file": "10-tls-session-key-logging.md",
      "cover": "assets/covers/cover-10.png",
      "title": "Owned-Process TLS Session-Key Logging Manual",
      "subtitle": "Use session-key logging when an application you own or administer explicitly supports it and decrypted protocol detail is necessary. It is often a better controlled experiment than",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Configuration",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Rollback and evidence handling"
      ],
      "size_bytes": 6684,
      "sha256_short": "a450468a327858b5"
    },
    {
      "id": "M-11",
      "num": "11",
      "file": "11-remote-wan-vpn.md",
      "cover": "assets/covers/cover-11.png",
      "title": "Remote WAN, SSH and VPN Troubleshooting Manual",
      "subtitle": "Use this manual to separate basic reachability, tunnel health, routing, SSH authentication and application problems. A VPN is an access path to an approved observation point, not a",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Architecture and installation choices",
        "Layered preflight",
        "Optional WireGuard review",
        "Commissioning and capture placement",
        "Troubleshooting and vulnerabilities"
      ],
      "size_bytes": 8195,
      "sha256_short": "c831b6e68b2a2821"
    },
    {
      "id": "M-12",
      "num": "12",
      "file": "12-lan-dns-dhcp-ipv6.md",
      "cover": "assets/covers/cover-12.png",
      "title": "LAN, DNS, DHCP, ARP and IPv6 Troubleshooting Manual",
      "subtitle": "Use this workflow for local addressing, name resolution, neighbor discovery and segmentation problems. Start with configuration and controlled transactions, then use the narrowest ",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Inventory and installation",
        "Setup and evidence plan",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Retention and rollback"
      ],
      "size_bytes": 6899,
      "sha256_short": "c2c1a311f518d607"
    },
    {
      "id": "M-13",
      "num": "13",
      "file": "13-flow-monitoring.md",
      "cover": "assets/covers/cover-13.png",
      "title": "NetFlow, IPFIX and sFlow Monitoring Manual",
      "subtitle": "Use flow records for traffic patterns, capacity questions and historical connection summaries when retaining every packet is unnecessary. Flow monitoring and packet capture are com",
      "stage": "4. Analyse",
      "sections": [
        "Download and setup QR codes",
        "Scope, software and equipment",
        "Installation and configuration",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Retention and rollback"
      ],
      "size_bytes": 6556,
      "sha256_short": "9443e48fa7ae420b"
    },
    {
      "id": "M-14",
      "num": "14",
      "file": "14-zeek-analysis.md",
      "cover": "assets/covers/cover-14.png",
      "title": "Zeek Offline Network-Analysis Manual",
      "subtitle": "Use Zeek first on a stopped, approved capture to generate connection and protocol metadata. Offline analysis avoids adding a new privileged live sensor before the evidence workflow",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and installation",
        "Offline setup and operation",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Retention and rollback"
      ],
      "size_bytes": 6011,
      "sha256_short": "47203efc78847785"
    },
    {
      "id": "M-15",
      "num": "15",
      "file": "15-suricata-passive-ids.md",
      "cover": "assets/covers/cover-15.png",
      "title": "Suricata Passive IDS and Offline Review Manual",
      "subtitle": "Use Suricata for rule-based review of approved traffic, beginning with a saved capture. This manual deliberately stays out of inline blocking so that a diagnostic installation does",
      "stage": "6. Operate",
      "sections": [
        "Download and setup QR codes",
        "Scope and installation",
        "Configuration and test",
        "Commissioning and interpretation",
        "Troubleshooting",
        "Storage, rollback and handover"
      ],
      "size_bytes": 6303,
      "sha256_short": "ea0cbf845d17004e"
    },
    {
      "id": "M-16",
      "num": "16",
      "file": "16-aws-vpc-mirroring.md",
      "cover": "assets/covers/cover-16.png",
      "title": "AWS VPC Traffic Mirroring Manual",
      "subtitle": "Use this workflow only in an AWS environment you administer, with explicit approval for copied traffic, collector infrastructure and billing. A generic Windows or Linux capture ins",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Setup and installation",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Cost, storage and rollback"
      ],
      "size_bytes": 6248,
      "sha256_short": "0e5d1851999ce10c"
    },
    {
      "id": "M-17",
      "num": "17",
      "file": "17-azure-packet-capture.md",
      "cover": "assets/covers/cover-17.png",
      "title": "Azure Network Watcher Packet Capture Manual",
      "subtitle": "Use Azure's supported packet-capture workflow for approved VM or VM Scale Set troubleshooting. Treat the cloud capture service, VM extension and evidence storage as separate commis",
      "stage": "3. Capture",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Configuration",
        "Commissioning",
        "Troubleshooting and vulnerabilities",
        "Retention and rollback"
      ],
      "size_bytes": 6492,
      "sha256_short": "16a0b27660d273b9"
    },
    {
      "id": "M-18",
      "num": "18",
      "file": "18-google-cloud-mirroring.md",
      "cover": "assets/covers/cover-18.png",
      "title": "Google Cloud Packet Mirroring Manual",
      "subtitle": "Use Packet Mirroring for selected approved Compute Engine interfaces with a properly designed collector. This is cloud infrastructure configuration, not a feature enabled merely by",
      "stage": "4. Analyse",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Setup",
        "Commissioning",
        "Troubleshooting and vulnerabilities",
        "Storage, cost and rollback"
      ],
      "size_bytes": 6257,
      "sha256_short": "aa9f02f6f20333e4"
    },
    {
      "id": "M-19",
      "num": "19",
      "file": "19-containers-hubble.md",
      "cover": "assets/covers/cover-19.png",
      "title": "Containers, Virtual Networks and Hubble Observability Manual",
      "subtitle": "Use workload-aware observability when a container or virtual network's policy/path cannot be understood from a single host adapter. Prefer existing instrumentation over replacing a",
      "stage": "4. Analyse",
      "sections": [
        "Download and setup QR codes",
        "Scope and prerequisites",
        "Configuration and installation",
        "Commissioning",
        "Troubleshooting and vulnerability checks",
        "Retention and rollback"
      ],
      "size_bytes": 6122,
      "sha256_short": "a5b17e10461247c5"
    },
    {
      "id": "M-20",
      "num": "20",
      "file": "20-bluetooth-iot-rf.md",
      "cover": "assets/covers/cover-20.png",
      "title": "Bluetooth, IoT and RF Diagnostic Manual",
      "subtitle": "Treat each radio technology as a separate instrumentation problem. Your phone, a Wi-Fi adapter and an Ethernet capture card are not interchangeable receivers for all wireless syste",
      "stage": "5. Validate",
      "sections": [
        "Download and setup QR codes",
        "Scope and equipment decisions",
        "Galaxy Bluetooth diagnostic setup",
        "IoT sniffer setup",
        "Commissioning",
        "Troubleshooting and vulnerabilities"
      ],
      "size_bytes": 6898,
      "sha256_short": "ae08a4d89e092653"
    },
    {
      "id": "M-21",
      "num": "21",
      "file": "21-vulnerability-validation.md",
      "cover": "assets/covers/cover-21.png",
      "title": "Vulnerability Validation, Remediation and Safe-Lab Manual",
      "subtitle": "Use this workflow to turn packet observations into verified, prioritized findings. It is a defensive validation process, not a promise to identify every vulnerability or an instruc",
      "stage": "6. Operate",
      "sections": [
        "Download and setup QR codes",
        "Inventory before scanning",
        "Small authorized service check",
        "Finding and remediation record",
        "Isolated traffic-redirection lab",
        "Acceptance and rollback"
      ],
      "size_bytes": 6782,
      "sha256_short": "b3dea8d76ec77209"
    },
    {
      "id": "M-22",
      "num": "22",
      "file": "22-tcp-troubleshooting.md",
      "cover": "assets/covers/cover-22.png",
      "title": "TCP Capture and Connection Troubleshooting Manual",
      "subtitle": "This manual interprets your reference to \u201cTCP\u201d as Transmission Control Protocol troubleshooting. TCP is the transport used by many applications, not an additional anonymity or pack",
      "stage": "2. Plan",
      "sections": [
        "Download and setup QR codes",
        "Scope and security boundary",
        "Capture setup",
        "Commissioning and diagnostic sequence",
        "Troubleshooting matrix",
        "Vulnerabilities, retention and rollback"
      ],
      "size_bytes": 7012,
      "sha256_short": "58ac035b6f0ab13c"
    },
    {
      "id": "M-23",
      "num": "23",
      "file": "23-pkce-authentication-and-privacy.md",
      "cover": "assets/covers/cover-23.png",
      "title": "PKCE Authentication and Privacy Engineering Manual",
      "subtitle": "This chapter adds the safe part of your latest request: stronger authentication and privacy for an optional future application login. It does not add covert capture, erase logs or ",
      "stage": "2. Plan",
      "sections": [
        "Download and setup QR codes",
        "What PKCE does and does not do",
        "What is runnable in this package",
        "Install and use the local helper",
        "Complete OAuth commissioning requirements",
        "Troubleshooting"
      ],
      "size_bytes": 8757,
      "sha256_short": "5339f5d869e49a14"
    },
    {
      "id": "M-24",
      "num": "24",
      "file": "24-filter-reference.md",
      "cover": "assets/covers/cover-24.png",
      "title": "Network Filter Reference and Validation Manual",
      "subtitle": "This reference covers the major filter families needed across the library: packet acquisition, decoded display, proxy flows, native Windows selectors, cloud selectors, flow-analysi",
      "stage": "2. Plan",
      "sections": [
        "Download and setup QR codes",
        "Choose the correct filter stage",
        "BPF capture filters",
        "Wireshark and tshark display filters",
        "Safe offline export",
        "Other tool and service filters"
      ],
      "size_bytes": 25544,
      "sha256_short": "72126e8e8ab25d9b"
    },
    {
      "id": "M-25",
      "num": "25",
      "file": "25-common-protocol-capture.md",
      "cover": "assets/covers/cover-25.png",
      "title": "Common Protocol Capture: Web, Email, File Transfer and Remote Access",
      "subtitle": "This manual covers capture and analysis of the major application protocols on your network: HTTP/HTTPS, SMTP/IMAP/POP3, FTP/SFTP, and SSH/Telnet. Several of these are plaintext pro",
      "stage": "4. Analyse",
      "sections": [
        "Download and setup QR codes",
        "Service ports",
        "Capture filters",
        "Display filters",
        "Privacy handling",
        "Commissioning"
      ],
      "size_bytes": 7953,
      "sha256_short": "faf193701692d6d6"
    },
    {
      "id": "M-26",
      "num": "26",
      "file": "26-capture-quality-tuning.md",
      "cover": "assets/covers/cover-26.png",
      "title": "Capture Quality and Tuning",
      "subtitle": "This manual improves capture accuracy: snaplen and buffer sizing, ring-buffer math, timestamp precision, drop statistics and semantic filter validation. Quality means the evidence ",
      "stage": "5. Validate",
      "sections": [
        "Download and setup QR codes",
        "Tuning planner",
        "Snaplen decisions",
        "Drop and loss quality",
        "Semantic filter validation",
        "Ring-buffer math"
      ],
      "size_bytes": 8318,
      "sha256_short": "c34841f3a6861587"
    },
    {
      "id": "M-27",
      "num": "27",
      "file": "27-commissioning-walkthrough.md",
      "cover": "assets/covers/cover-27.png",
      "title": "Commissioning Walkthrough: From Package to Working Sensor",
      "subtitle": "This walkthrough prepares bounded commissioning on your own network, starting with a known flow and a verified observation point. For your selected Galaxy S24 tests, use the [phone",
      "stage": "6. Operate",
      "sections": [
        "Download and setup QR codes",
        "Phase 0 \u2014 Scope and approval (C01)",
        "Phase 1 \u2014 Environment (C02, C03)",
        "Phase 2 \u2014 Offline validation (before any capture)",
        "Phase 3 \u2014 Choose the observation point (C04)",
        "Phase 4 \u2014 Known-flow test (C07)"
      ],
      "size_bytes": 16280,
      "sha256_short": "22c1fbf41f59249a"
    },
    {
      "id": "M-28",
      "num": "28",
      "file": "28-passive-background-sensor.md",
      "cover": "assets/covers/cover-28.png",
      "title": "Passive Background Sensor Deployment",
      "subtitle": "This manual deploys a documented, owner-visible packet sensor that runs alongside other services without interrupting them. Non-disruptive operation comes from passive observation ",
      "stage": "1. Understand",
      "sections": [
        "Download and setup QR codes",
        "Design principle",
        "Linux deployment with systemd",
        "Windows deployment",
        "Retention and the audit log",
        "Commissioning"
      ],
      "size_bytes": 8692,
      "sha256_short": "bbe1a6e1d8772fe4"
    },
    {
      "id": "M-29",
      "num": "29",
      "file": "29-hardware-requirements.md",
      "cover": "assets/covers/cover-29.png",
      "title": "Hardware Requirements by Capture Tier",
      "subtitle": "This manual maps every capture method to the hardware it needs, so nothing is bought before the existing equipment is checked. Most tiers need no purchase at all; the only realisti",
      "stage": "4. Analyse",
      "sections": [
        "Download and setup QR codes",
        "Tier requirements",
        "Tiers that depend on unidentified hardware",
        "Storage",
        "Decision gate",
        "How this manual works with the library"
      ],
      "size_bytes": 5507,
      "sha256_short": "b51948caca239383"
    },
    {
      "id": "M-30",
      "num": "30",
      "file": "30-network-packet-fundamentals.md",
      "cover": "assets/covers/cover-30.png",
      "title": "Network Packet Fundamentals and Reading Guide",
      "subtitle": "This manual explains what a network packet is, which header fields matter, how packets travel and are reassembled, and how to read them safely in the capture tools used throughout ",
      "stage": "1. Understand",
      "sections": [
        "Download and setup QR codes",
        "Scope and security boundary",
        "What a packet is",
        "Layers inside one packet",
        "What you are actually looking for",
        "How a packet travels"
      ],
      "size_bytes": 12778,
      "sha256_short": "172c32e7b4bc2820"
    }
  ],
  "filters": [
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    },
    {
      "id": "",
      "family": "",
      "category": "",
      "expression": "",
      "purpose": "",
      "manuals": []
    }
  ],
  "qr_entries": [
    {
      "id": "pcapdroid-play",
      "code": "Q01",
      "name": "PCAPdroid",
      "group": "Phone and Windows",
      "url": "https://play.google.com/store/apps/details?id=com.emanuelef.remote_capture",
      "type": "App store",
      "device": "Galaxy S24 / Android",
      "use": "Run A: open the developer's Google Play listing and review Install. Availability and compatibility must be checked on the phone."
    },
    {
      "id": "pcapdroid-releases",
      "code": "Q02",
      "name": "PCAPdroid developer releases",
      "group": "Phone and Windows",
      "url": "https://github.com/emanuele-f/PCAPdroid/releases",
      "type": "Release selector",
      "device": "Galaxy S24 / Android",
      "use": "Optional alternative to Google Play, not a second required app. Review the appropriate developer release; do not bypass an installation or device-policy warning."
    },
    {
      "id": "wireshark",
      "code": "Q03",
      "name": "Wireshark",
      "group": "Phone and Windows",
      "url": "https://www.wireshark.org/download.html",
      "type": "Download selector",
      "device": "Windows analysis computer",
      "use": "View stopped captures from either run. Choose the actual Windows architecture; the Windows installer offers Npcap for native live capture."
    },
    {
      "id": "npcap",
      "code": "Q04",
      "name": "Npcap",
      "group": "Phone and Windows",
      "url": "https://npcap.com/#download",
      "type": "Download selector",
      "device": "Windows capture computer",
      "use": "Optional separate driver installation or repair for native live capture. Do not install a second copy merely because Wireshark's installer already supplied it."
    },
    {
      "id": "wsl",
      "code": "Q05",
      "name": "Windows Subsystem for Linux",
      "group": "Phone and Windows",
      "url": "https://learn.microsoft.com/en-us/windows/wsl/install",
      "type": "Setup guide",
      "device": "Windows toolkit computer",
      "use": "Optional Linux runtime for the bundled Python/SSH helpers. This is a setup guide, not an Android app or a replacement for native Windows packet capture."
    },
    {
      "id": "openssh-windows",
      "code": "Q06",
      "name": "Windows OpenSSH Client",
      "group": "Phone and Windows",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse",
      "type": "Optional-feature guide",
      "device": "Windows administration computer",
      "use": "Use the Client instructions only when remote administration is selected. The page also covers Server; that does not mean you need to enable an SSH server on Windows."
    },
    {
      "id": "python-ubuntu",
      "code": "Q07",
      "name": "Python 3 for Ubuntu 24.04",
      "group": "Linux and WSL",
      "url": "https://packages.ubuntu.com/noble/python3",
      "type": "Package reference",
      "device": "Confirmed Ubuntu 24.04 / WSL",
      "use": "Runtime for the bundled helpers, if absent. Use the approved package manager for the actual OS; this reference is specifically for Ubuntu 24.04."
    },
    {
      "id": "tcpdump-ubuntu",
      "code": "Q08",
      "name": "tcpdump for Ubuntu 24.04",
      "group": "Linux and WSL",
      "url": "https://packages.ubuntu.com/noble/tcpdump",
      "type": "Package reference",
      "device": "Confirmed Ubuntu 24.04 / WSL",
      "use": "Needed for the offline BPF checks and selected Linux/SSH workflows, not for PCAPdroid itself. Use the actual distribution's package manager."
    },
    {
      "id": "dumpcap-ubuntu",
      "code": "Q09",
      "name": "Wireshark common capture tools",
      "group": "Linux and WSL",
      "url": "https://packages.ubuntu.com/noble/wireshark-common",
      "type": "Package reference",
      "device": "Confirmed Ubuntu 24.04 capture host",
      "use": "Linux capture-tool package reference for the commissioned mirror-host route. Review capture permissions separately; installing packages does not establish visibility."
    },
    {
      "id": "tshark-ubuntu",
      "code": "Q10",
      "name": "tshark for Ubuntu 24.04",
      "group": "Linux and WSL",
      "url": "https://packages.ubuntu.com/noble/tshark",
      "type": "Package reference",
      "device": "Confirmed Ubuntu 24.04 / WSL",
      "use": "Optional command-line analysis instead of, or alongside, the Wireshark GUI. This is not a Windows executable or a universal Linux package."
    },
    {
      "id": "openssh-linux",
      "code": "Q11",
      "name": "Ubuntu OpenSSH server",
      "group": "Linux and WSL",
      "url": "https://documentation.ubuntu.com/server/how-to/security/openssh-server/",
      "type": "Installation guide",
      "device": "Approved Ubuntu remote host",
      "use": "Only for a selected remote capture host. Installing or enabling a server is a separate reviewed change, not a result of scanning this code."
    },
    {
      "id": "ubuntu-server",
      "code": "Q12",
      "name": "Ubuntu Server images",
      "group": "Linux and WSL",
      "url": "https://ubuntu.com/download/server",
      "type": "OS image selector",
      "device": "Separately approved new server",
      "use": "Optional new-host provisioning only. The proposed 24.04 baseline is not a claim about your existing server; select the approved release and architecture rather than blindly choosing the newest image."
    },
    {
      "id": "pktmon",
      "code": "Q13",
      "name": "Windows Pktmon",
      "group": "Built-in Windows tools",
      "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/pktmon",
      "type": "Built-in tool guide",
      "device": "Supported Windows computer",
      "use": "Microsoft's in-box diagnostic tool. No separate Pktmon installer is supplied or needed by this QR."
    },
    {
      "id": "netsh",
      "code": "Q14",
      "name": "Windows netsh trace",
      "group": "Built-in Windows tools",
      "url": "https://learn.microsoft.com/en-us/windows/win32/ndf/using-netsh-to-manage-traces",
      "type": "Built-in tool guide",
      "device": "Windows diagnostic computer",
      "use": "Microsoft's netsh tracing instructions. This opens documentation, not a driver download or a running trace."
    },
    {
      "id": "mitmproxy",
      "code": "Q15",
      "name": "mitmproxy",
      "group": "Optional specialist tools",
      "url": "https://docs.mitmproxy.org/stable/overview/installation/",
      "type": "Installation guide",
      "device": "Approved proxy test computer",
      "use": "Only for the separate explicit-proxy manual. Not required for either first S24 run; no certificate is installed by scanning."
    },
    {
      "id": "wireguard",
      "code": "Q16",
      "name": "WireGuard",
      "group": "Optional specialist tools",
      "url": "https://www.wireguard.com/install/",
      "type": "Installation guide",
      "device": "Approved VPN endpoint",
      "use": "Optional for an explicitly selected WireGuard design. Reuse an existing approved VPN first; this is not a request to replace the phone's VPN."
    },
    {
      "id": "nfdump",
      "code": "Q17",
      "name": "nfdump",
      "group": "Optional specialist tools",
      "url": "https://github.com/phaag/nfdump",
      "type": "Project and build guide",
      "device": "Approved flow collector",
      "use": "Project/releases and build information for the flow-monitoring manual. Not a generic Windows installer and not needed for the first phone tests."
    },
    {
      "id": "zeek",
      "code": "Q18",
      "name": "Zeek",
      "group": "Optional specialist tools",
      "url": "https://docs.zeek.org/en/current/install.html",
      "type": "Installation guide",
      "device": "Approved analysis host",
      "use": "Select an appropriate supported package or reviewed build for offline Zeek analysis. This is an optional specialist workflow, not a phone dependency."
    },
    {
      "id": "suricata",
      "code": "Q19",
      "name": "Suricata",
      "group": "Optional specialist tools",
      "url": "https://suricata.io/download/",
      "type": "Release and package selector",
      "device": "Approved IDS analysis host",
      "use": "Choose an approved stable release for the passive/offline IDS manual. A latest development-documentation branch is not a software release pin."
    },
    {
      "id": "nmap",
      "code": "Q20",
      "name": "Nmap",
      "group": "Optional specialist tools",
      "url": "https://nmap.org/download",
      "type": "Download selector",
      "device": "Approved diagnostic computer",
      "use": "Optional for the authorized vulnerability-validation manual. Select the actual platform; scanning this QR does not authorize or run a network scan."
    },
    {
      "id": "aws",
      "code": "Q21",
      "name": "AWS Traffic Mirroring",
      "group": "Cloud and container setup",
      "url": "https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html",
      "type": "Cloud setup guide",
      "device": "Approved AWS environment",
      "use": "Service documentation, not a desktop download. Do not create cloud resources or sessions without the separate scope and cost review."
    },
    {
      "id": "azure",
      "code": "Q22",
      "name": "Azure Network Watcher",
      "group": "Cloud and container setup",
      "url": "https://learn.microsoft.com/en-us/azure/network-watcher/packet-capture-overview",
      "type": "Cloud setup guide",
      "device": "Approved Azure environment",
      "use": "Packet-capture service and prerequisite documentation, not a general installer. Follow the existing extension and storage change process."
    },
    {
      "id": "gcp",
      "code": "Q23",
      "name": "Google Cloud Packet Mirroring",
      "group": "Cloud and container setup",
      "url": "https://cloud.google.com/vpc/docs/packet-mirroring",
      "type": "Cloud setup guide",
      "device": "Approved Google Cloud environment",
      "use": "Service and collector setup documentation, not a phone or desktop app. Resource creation remains a separate approved action."
    },
    {
      "id": "hubble",
      "code": "Q24",
      "name": "Hubble CLI",
      "group": "Cloud and container setup",
      "url": "https://docs.cilium.io/en/stable/observability/hubble/setup.html",
      "type": "CLI and environment setup",
      "device": "Existing approved Cilium environment",
      "use": "Use compatible client-download instructions for the existing environment. The guide also includes cluster-changing commands; do not replace the CNI or enable cluster services merely to follow a QR."
    }
  ],
  "lab_results": [
    {
      "check": "real_two_engine_sustained_capture",
      "status": "PASS",
      "engines": [
        "tcpdump",
        "dumpcap"
      ],
      "duration_requested": 120,
      "traffic": {
        "sent": 60000,
        "negative_sent": 600,
        "receiver_datagrams": 60600,
        "seconds": 120.399,
        "peak_cgroup_memory_bytes": 105848832,
        "samples": [
          {
            "elapsed": 0.398,
            "cgroup_memory_bytes": 34033664
          },
          {
            "elapsed": 0.798,
            "cgroup_memory_bytes": 34549760
          },
          {
            "elapsed": 1.198,
            "cgroup_memory_bytes": 34664448
          },
          {
            "elapsed": 1.598,
            "cgroup_memory_bytes": 34926592
          },
          {
            "elapsed": 1.998,
            "cgroup_memory_bytes": 35106816
          },
          {
            "elapsed": 2.398,
            "cgroup_memory_bytes": 35561472
          },
          {
            "elapsed": 2.798,
            "cgroup_memory_bytes": 35835904
          },
          {
            "elapsed": 3.198,
            "cgroup_memory_bytes": 36052992
          },
          {
            "elapsed": 3.598,
            "cgroup_memory_bytes": 35946496
          },
          {
            "elapsed": 3.998,
            "cgroup_memory_bytes": 36413440
          },
          {
            "elapsed": 4.398,
            "cgroup_memory_bytes": 36544512
          },
          {
            "elapsed": 4.798,
            "cgroup_memory_bytes": 36749312
          },
          {
            "elapsed": 5.198,
            "cgroup_memory_bytes": 36954112
          },
          {
            "elapsed": 5.598,
            "cgroup_memory_bytes": 37220352
          },
          {
            "elapsed": 5.998,
            "cgroup_memory_bytes": 37441536
          },
          {
            "elapsed": 6.398,
            "cgroup_memory_bytes": 37699584
          },
          {
            "elapsed": 6.798,
            "cgroup_memory_bytes": 37892096
          },
          {
            "elapsed": 7.198,
            "cgroup_memory_bytes": 38170624
          },
          {
            "elapsed": 7.598,
            "cgroup_memory_bytes": 38449152
          },
          {
            "elapsed": 7.998,
            "cgroup_memory_bytes": 38916096
          },
          {
            "elapsed": 8.398,
            "cgroup_memory_bytes": 39182336
          },
          {
            "elapsed": 8.798,
            "cgroup_memory_bytes": 39194624
          },
          {
            "elapsed": 9.198,
            "cgroup_memory_bytes": 39653376
          },
          {
            "elapsed": 9.598,
            "cgroup_memory_bytes": 39665664
          },
          {
            "elapsed": 9.998,
            "cgroup_memory_bytes": 39866368
          },
          {
            "elapsed": 10.398,
            "cgroup_memory_bytes": 40136704
          },
          {
            "elapsed": 10.798,
            "cgroup_memory_bytes": 40333312
          },
          {
            "elapsed": 11.198,
            "cgroup_memory_bytes": 40603648
          },
          {
            "elapsed": 11.598,
            "cgroup_memory_bytes": 40726528
          },
          {
            "elapsed": 11.998,
            "cgroup_memory_bytes": 41353216
          },
          {
            "elapsed": 12.398,
            "cgroup_memory_bytes": 41299968
          },
          {
            "elapsed": 12.798,
            "cgroup_memory_bytes": 41558016
          },
          {
            "elapsed": 13.198,
            "cgroup_memory_bytes": 41816064
          },
          {
            "elapsed": 13.598,
            "cgroup_memory_bytes": 42094592
          },
          {
            "elapsed": 13.998,
            "cgroup_memory_bytes": 42491904
          },
          {
            "elapsed": 14.398,
            "cgroup_memory_bytes": 42655744
          },
          {
            "elapsed": 14.798,
            "cgroup_memory_bytes": 42782720
          },
          {
            "elapsed": 15.198,
            "cgroup_memory_bytes": 43171840
          },
          {
            "elapsed": 15.598,
            "cgroup_memory_bytes": 43294720
          },
          {
            "elapsed": 15.998,
            "cgroup_memory_bytes": 43675648
          },
          {
            "elapsed": 16.398,
            "cgroup_memory_bytes": 43794432
          },
          {
            "elapsed": 16.798,
            "cgroup_memory_bytes": 43933696
          },
          {
            "elapsed": 17.202,
            "cgroup_memory_bytes": 44339200
          },
          {
            "elapsed": 17.598,
            "cgroup_memory_bytes": 44630016
          },
          {
            "elapsed": 17.998,
            "cgroup_memory_bytes": 44871680
          },
          {
            "elapsed": 18.398,
            "cgroup_memory_bytes": 45101056
          },
          {
            "elapsed": 18.798,
            "cgroup_memory_bytes": 45338624
          },
          {
            "elapsed": 19.198,
            "cgroup_memory_bytes": 45613056
          },
          {
            "elapsed": 19.598,
            "cgroup_memory_bytes": 45563904
          },
          {
            "elapsed": 19.998,
            "cgroup_memory_bytes": 45899776
          },
          {
            "elapsed": 20.398,
            "cgroup_memory_bytes": 46100480
          },
          {
            "elapsed": 20.798,
            "cgroup_memory_bytes": 46456832
          },
          {
            "elapsed": 21.198,
            "cgroup_memory_bytes": 46649344
          },
          {
            "elapsed": 21.598,
            "cgroup_memory_bytes": 46645248
          },
          {
            "elapsed": 21.998,
            "cgroup_memory_bytes": 47116288
          },
          {
            "elapsed": 22.398,
            "cgroup_memory_bytes": 47579136
          },
          {
            "elapsed": 22.798,
            "cgroup_memory_bytes": 47853568
          },
          {
            "elapsed": 23.198,
            "cgroup_memory_bytes": 48050176
          },
          {
            "elapsed": 23.598,
            "cgroup_memory_bytes": 48050176
          },
          {
            "elapsed": 23.998,
            "cgroup_memory_bytes": 48451584
          },
          {
            "elapsed": 24.398,
            "cgroup_memory_bytes": 48533504
          },
          {
            "elapsed": 24.798,
            "cgroup_memory_bytes": 48984064
          },
          {
            "elapsed": 25.198,
            "cgroup_memory_bytes": 49147904
          },
          {
            "elapsed": 25.598,
            "cgroup_memory_bytes": 49041408
          },
          {
            "elapsed": 25.998,
            "cgroup_memory_bytes": 49627136
          },
          {
            "elapsed": 26.398,
            "cgroup_memory_bytes": 49942528
          },
          {
            "elapsed": 26.798,
            "cgroup_memory_bytes": 49799168
          },
          {
            "elapsed": 27.198,
            "cgroup_memory_bytes": 50184192
          },
          {
            "elapsed": 27.598,
            "cgroup_memory_bytes": 50425856
          },
          {
            "elapsed": 27.998,
            "cgroup_memory_bytes": 50774016
          },
          {
            "elapsed": 28.398,
            "cgroup_memory_bytes": 50900992
          },
          {
            "elapsed": 28.798,
            "cgroup_memory_bytes": 51109888
          },
          {
            "elapsed": 29.198,
            "cgroup_memory_bytes": 51396608
          },
          {
            "elapsed": 29.598,
            "cgroup_memory_bytes": 51929088
          },
          {
            "elapsed": 29.998,
            "cgroup_memory_bytes": 52125696
          },
          {
            "elapsed": 30.399,
            "cgroup_memory_bytes": 52137984
          },
          {
            "elapsed": 30.798,
            "cgroup_memory_bytes": 52604928
          },
          {
            "elapsed": 31.198,
            "cgroup_memory_bytes": 52760576
          },
          {
            "elapsed": 31.598,
            "cgroup_memory_bytes": 53092352
          },
          {
            "elapsed": 31.998,
            "cgroup_memory_bytes": 53235712
          },
          {
            "elapsed": 32.398,
            "cgroup_memory_bytes": 53354496
          },
          {
            "elapsed": 32.798,
            "cgroup_memory_bytes": 53616640
          },
          {
            "elapsed": 33.198,
            "cgroup_memory_bytes": 53743616
          },
          {
            "elapsed": 33.598,
            "cgroup_memory_bytes": 54054912
          },
          {
            "elapsed": 33.998,
            "cgroup_memory_bytes": 54472704
          },
          {
            "elapsed": 34.398,
            "cgroup_memory_bytes": 54546432
          },
          {
            "elapsed": 34.798,
            "cgroup_memory_bytes": 54886400
          },
          {
            "elapsed": 35.198,
            "cgroup_memory_bytes": 54751232
          },
          {
            "elapsed": 35.598,
            "cgroup_memory_bytes": 55201792
          },
          {
            "elapsed": 35.998,
            "cgroup_memory_bytes": 55316480
          },
          {
            "elapsed": 36.398,
            "cgroup_memory_bytes": 55738368
          },
          {
            "elapsed": 36.798,
            "cgroup_memory_bytes": 56082432
          },
          {
            "elapsed": 37.198,
            "cgroup_memory_bytes": 56360960
          },
          {
            "elapsed": 37.598,
            "cgroup_memory_bytes": 56750080
          },
          {
            "elapsed": 37.998,
            "cgroup_memory_bytes": 56750080
          },
          {
            "elapsed": 38.398,
            "cgroup_memory_bytes": 56963072
          },
          {
            "elapsed": 38.798,
            "cgroup_memory_bytes": 57303040
          },
          {
            "elapsed": 39.198,
            "cgroup_memory_bytes": 57577472
          },
          {
            "elapsed": 39.598,
            "cgroup_memory_bytes": 57630720
          },
          {
            "elapsed": 39.998,
            "cgroup_memory_bytes": 57970688
          },
          {
            "elapsed": 40.398,
            "cgroup_memory_bytes": 58241024
          },
          {
            "elapsed": 40.798,
            "cgroup_memory_bytes": 58523648
          },
          {
            "elapsed": 41.198,
            "cgroup_memory_bytes": 58736640
          },
          {
            "elapsed": 41.598,
            "cgroup_memory_bytes": 58732544
          },
          {
            "elapsed": 41.998,
            "cgroup_memory_bytes": 58937344
          },
          {
            "elapsed": 42.398,
            "cgroup_memory_bytes": 59203584
          },
          {
            "elapsed": 42.799,
            "cgroup_memory_bytes": 59666432
          },
          {
            "elapsed": 43.198,
            "cgroup_memory_bytes": 59621376
          },
          {
            "elapsed": 43.598,
            "cgroup_memory_bytes": 60145664
          },
          {
            "elapsed": 43.998,
            "cgroup_memory_bytes": 60223488
          },
          {
            "elapsed": 44.398,
            "cgroup_memory_bytes": 60436480
          },
          {
            "elapsed": 44.798,
            "cgroup_memory_bytes": 60817408
          },
          {
            "elapsed": 45.198,
            "cgroup_memory_bytes": 60915712
          },
          {
            "elapsed": 45.598,
            "cgroup_memory_bytes": 61370368
          },
          {
            "elapsed": 45.998,
            "cgroup_memory_bytes": 61460480
          },
          {
            "elapsed": 46.398,
            "cgroup_memory_bytes": 61505536
          },
          {
            "elapsed": 46.798,
            "cgroup_memory_bytes": 62115840
          },
          {
            "elapsed": 47.198,
            "cgroup_memory_bytes": 62324736
          },
          {
            "elapsed": 47.598,
            "cgroup_memory_bytes": 62328832
          },
          {
            "elapsed": 47.998,
            "cgroup_memory_bytes": 62865408
          },
          {
            "elapsed": 48.398,
            "cgroup_memory_bytes": 63070208
          },
          {
            "elapsed": 48.798,
            "cgroup_memory_bytes": 63008768
          },
          {
            "elapsed": 49.198,
            "cgroup_memory_bytes": 63287296
          },
          {
            "elapsed": 49.598,
            "cgroup_memory_bytes": 63709184
          },
          {
            "elapsed": 49.998,
            "cgroup_memory_bytes": 63901696
          },
          {
            "elapsed": 50.398,
            "cgroup_memory_bytes": 64180224
          },
          {
            "elapsed": 50.798,
            "cgroup_memory_bytes": 64262144
          },
          {
            "elapsed": 51.198,
            "cgroup_memory_bytes": 64499712
          },
          {
            "elapsed": 51.598,
            "cgroup_memory_bytes": 64958464
          },
          {
            "elapsed": 51.998,
            "cgroup_memory_bytes": 64970752
          },
          {
            "elapsed": 52.398,
            "cgroup_memory_bytes": 65253376
          },
          {
            "elapsed": 52.798,
            "cgroup_memory_bytes": 65712128
          },
          {
            "elapsed": 53.198,
            "cgroup_memory_bytes": 65789952
          },
          {
            "elapsed": 53.598,
            "cgroup_memory_bytes": 65867776
          },
          {
            "elapsed": 53.998,
            "cgroup_memory_bytes": 66371584
          },
          {
            "elapsed": 54.398,
            "cgroup_memory_bytes": 66191360
          },
          {
            "elapsed": 54.798,
            "cgroup_memory_bytes": 66727936
          },
          {
            "elapsed": 55.198,
            "cgroup_memory_bytes": 66940928
          },
          {
            "elapsed": 55.598,
            "cgroup_memory_bytes": 67334144
          },
          {
            "elapsed": 55.998,
            "cgroup_memory_bytes": 67424256
          },
          {
            "elapsed": 56.398,
            "cgroup_memory_bytes": 67891200
          },
          {
            "elapsed": 56.798,
            "cgroup_memory_bytes": 68091904
          },
          {
            "elapsed": 57.198,
            "cgroup_memory_bytes": 68104192
          },
          {
            "elapsed": 57.598,
            "cgroup_memory_bytes": 68587520
          },
          {
            "elapsed": 57.998,
            "cgroup_memory_bytes": 68587520
          },
          {
            "elapsed": 58.398,
            "cgroup_memory_bytes": 69124096
          },
          {
            "elapsed": 58.798,
            "cgroup_memory_bytes": 68976640
          },
          {
            "elapsed": 59.198,
            "cgroup_memory_bytes": 69361664
          },
          {
            "elapsed": 59.598,
            "cgroup_memory_bytes": 69734400
          },
          {
            "elapsed": 59.998,
            "cgroup_memory_bytes": 69996544
          },
          {
            "elapsed": 60.398,
            "cgroup_memory_bytes": 70115328
          },
          {
            "elapsed": 60.798,
            "cgroup_memory_bytes": 70397952
          },
          {
            "elapsed": 61.198,
            "cgroup_memory_bytes": 70778880
          },
          {
            "elapsed": 61.598,
            "cgroup_memory_bytes": 70897664
          },
          {
            "elapsed": 61.998,
            "cgroup_memory_bytes": 71229440
          },
          {
            "elapsed": 62.398,
            "cgroup_memory_bytes": 71483392
          },
          {
            "elapsed": 62.798,
            "cgroup_memory_bytes": 71680000
          },
          {
            "elapsed": 63.198,
            "cgroup_memory_bytes": 71839744
          },
          {
            "elapsed": 63.598,
            "cgroup_memory_bytes": 71966720
          },
          {
            "elapsed": 63.998,
            "cgroup_memory_bytes": 72425472
          },
          {
            "elapsed": 64.398,
            "cgroup_memory_bytes": 72437760
          },
          {
            "elapsed": 64.798,
            "cgroup_memory_bytes": 72638464
          },
          {
            "elapsed": 65.198,
            "cgroup_memory_bytes": 72908800
          },
          {
            "elapsed": 65.598,
            "cgroup_memory_bytes": 73166848
          },
          {
            "elapsed": 65.998,
            "cgroup_memory_bytes": 73383936
          },
          {
            "elapsed": 66.398,
            "cgroup_memory_bytes": 73854976
          },
          {
            "elapsed": 66.798,
            "cgroup_memory_bytes": 73854976
          },
          {
            "elapsed": 67.198,
            "cgroup_memory_bytes": 74133504
          },
          {
            "elapsed": 67.598,
            "cgroup_memory_bytes": 74334208
          },
          {
            "elapsed": 67.998,
            "cgroup_memory_bytes": 74674176
          },
          {
            "elapsed": 68.398,
            "cgroup_memory_bytes": 74878976
          },
          {
            "elapsed": 68.798,
            "cgroup_memory_bytes": 74895360
          },
          {
            "elapsed": 69.198,
            "cgroup_memory_bytes": 75431936
          },
          {
            "elapsed": 69.598,
            "cgroup_memory_bytes": 75554816
          },
          {
            "elapsed": 69.998,
            "cgroup_memory_bytes": 75751424
          },
          {
            "elapsed": 70.398,
            "cgroup_memory_bytes": 76034048
          },
          {
            "elapsed": 70.798,
            "cgroup_memory_bytes": 76124160
          },
          {
            "elapsed": 71.198,
            "cgroup_memory_bytes": 76578816
          },
          {
            "elapsed": 71.599,
            "cgroup_memory_bytes": 76931072
          },
          {
            "elapsed": 71.998,
            "cgroup_memory_bytes": 77119488
          },
          {
            "elapsed": 72.398,
            "cgroup_memory_bytes": 77316096
          },
          {
            "elapsed": 72.798,
            "cgroup_memory_bytes": 77705216
          },
          {
            "elapsed": 73.198,
            "cgroup_memory_bytes": 77869056
          },
          {
            "elapsed": 73.598,
            "cgroup_memory_bytes": 78196736
          },
          {
            "elapsed": 73.998,
            "cgroup_memory_bytes": 78344192
          },
          {
            "elapsed": 74.398,
            "cgroup_memory_bytes": 78471168
          },
          {
            "elapsed": 74.798,
            "cgroup_memory_bytes": 78548992
          },
          {
            "elapsed": 75.198,
            "cgroup_memory_bytes": 78954496
          },
          {
            "elapsed": 75.598,
            "cgroup_memory_bytes": 79147008
          },
          {
            "elapsed": 75.998,
            "cgroup_memory_bytes": 79167488
          },
          {
            "elapsed": 76.398,
            "cgroup_memory_bytes": 79618048
          },
          {
            "elapsed": 76.798,
            "cgroup_memory_bytes": 80035840
          },
          {
            "elapsed": 77.198,
            "cgroup_memory_bytes": 80117760
          },
          {
            "elapsed": 77.598,
            "cgroup_memory_bytes": 80281600
          },
          {
            "elapsed": 77.998,
            "cgroup_memory_bytes": 80723968
          },
          {
            "elapsed": 78.403,
            "cgroup_memory_bytes": 80850944
          },
          {
            "elapsed": 78.798,
            "cgroup_memory_bytes": 81129472
          },
          {
            "elapsed": 79.198,
            "cgroup_memory_bytes": 81395712
          },
          {
            "elapsed": 79.598,
            "cgroup_memory_bytes": 81600512
          },
          {
            "elapsed": 79.998,
            "cgroup_memory_bytes": 81879040
          },
          {
            "elapsed": 80.398,
            "cgroup_memory_bytes": 81993728
          },
          {
            "elapsed": 80.798,
            "cgroup_memory_bytes": 82542592
          },
          {
            "elapsed": 81.198,
            "cgroup_memory_bytes": 82690048
          },
          {
            "elapsed": 81.598,
            "cgroup_memory_bytes": 82898944
          },
          {
            "elapsed": 81.998,
            "cgroup_memory_bytes": 82919424
          },
          {
            "elapsed": 82.398,
            "cgroup_memory_bytes": 83378176
          },
          {
            "elapsed": 82.798,
            "cgroup_memory_bytes": 83574784
          },
          {
            "elapsed": 83.198,
            "cgroup_memory_bytes": 83861504
          },
          {
            "elapsed": 83.598,
            "cgroup_memory_bytes": 84017152
          },
          {
            "elapsed": 83.998,
            "cgroup_memory_bytes": 84066304
          },
          {
            "elapsed": 84.398,
            "cgroup_memory_bytes": 84598784
          },
          {
            "elapsed": 84.798,
            "cgroup_memory_bytes": 84680704
          },
          {
            "elapsed": 85.198,
            "cgroup_memory_bytes": 84819968
          },
          {
            "elapsed": 85.598,
            "cgroup_memory_bytes": 85278720
          },
          {
            "elapsed": 85.998,
            "cgroup_memory_bytes": 85557248
          },
          {
            "elapsed": 86.398,
            "cgroup_memory_bytes": 85757952
          },
          {
            "elapsed": 86.798,
            "cgroup_memory_bytes": 86028288
          },
          {
            "elapsed": 87.199,
            "cgroup_memory_bytes": 86306816
          },
          {
            "elapsed": 87.598,
            "cgroup_memory_bytes": 86437888
          },
          {
            "elapsed": 87.998,
            "cgroup_memory_bytes": 86704128
          },
          {
            "elapsed": 88.398,
            "cgroup_memory_bytes": 86642688
          },
          {
            "elapsed": 88.798,
            "cgroup_memory_bytes": 86925312
          },
          {
            "elapsed": 89.198,
            "cgroup_memory_bytes": 87212032
          },
          {
            "elapsed": 89.598,
            "cgroup_memory_bytes": 87666688
          },
          {
            "elapsed": 89.998,
            "cgroup_memory_bytes": 87678976
          },
          {
            "elapsed": 90.398,
            "cgroup_memory_bytes": 87953408
          },
          {
            "elapsed": 90.798,
            "cgroup_memory_bytes": 88408064
          },
          {
            "elapsed": 91.198,
            "cgroup_memory_bytes": 88424448
          },
          {
            "elapsed": 91.598,
            "cgroup_memory_bytes": 88543232
          },
          {
            "elapsed": 91.998,
            "cgroup_memory_bytes": 88924160
          },
          {
            "elapsed": 92.398,
            "cgroup_memory_bytes": 89178112
          },
          {
            "elapsed": 92.798,
            "cgroup_memory_bytes": 89374720
          },
          {
            "elapsed": 93.198,
            "cgroup_memory_bytes": 89837568
          },
          {
            "elapsed": 93.598,
            "cgroup_memory_bytes": 89853952
          },
          {
            "elapsed": 93.998,
            "cgroup_memory_bytes": 90312704
          },
          {
            "elapsed": 94.398,
            "cgroup_memory_bytes": 90517504
          },
          {
            "elapsed": 94.798,
            "cgroup_memory_bytes": 90681344
          },
          {
            "elapsed": 95.198,
            "cgroup_memory_bytes": 90697728
          },
          {
            "elapsed": 95.598,
            "cgroup_memory_bytes": 91238400
          },
          {
            "elapsed": 95.999,
            "cgroup_memory_bytes": 91422720
          },
          {
            "elapsed": 96.398,
            "cgroup_memory_bytes": 91508736
          },
          {
            "elapsed": 96.798,
            "cgroup_memory_bytes": 91754496
          },
          {
            "elapsed": 97.198,
            "cgroup_memory_bytes": 92028928
          },
          {
            "elapsed": 97.598,
            "cgroup_memory_bytes": 92483584
          },
          {
            "elapsed": 97.998,
            "cgroup_memory_bytes": 92491776
          },
          {
            "elapsed": 98.398,
            "cgroup_memory_bytes": 92958720
          },
          {
            "elapsed": 98.798,
            "cgroup_memory_bytes": 93151232
          },
          {
            "elapsed": 99.198,
            "cgroup_memory_bytes": 93229056
          },
          {
            "elapsed": 99.598,
            "cgroup_memory_bytes": 93700096
          },
          {
            "elapsed": 99.998,
            "cgroup_memory_bytes": 93966336
          },
          {
            "elapsed": 100.398,
            "cgroup_memory_bytes": 94167040
          },
          {
            "elapsed": 100.798,
            "cgroup_memory_bytes": 94179328
          },
          {
            "elapsed": 101.198,
            "cgroup_memory_bytes": 94310400
          },
          {
            "elapsed": 101.598,
            "cgroup_memory_bytes": 94691328
          },
          {
            "elapsed": 101.998,
            "cgroup_memory_bytes": 95117312
          },
          {
            "elapsed": 102.398,
            "cgroup_memory_bytes": 95281152
          },
          {
            "elapsed": 102.798,
            "cgroup_memory_bytes": 95600640
          },
          {
            "elapsed": 103.198,
            "cgroup_memory_bytes": 95608832
          },
          {
            "elapsed": 103.598,
            "cgroup_memory_bytes": 96137216
          },
          {
            "elapsed": 103.998,
            "cgroup_memory_bytes": 96342016
          },
          {
            "elapsed": 104.398,
            "cgroup_memory_bytes": 96497664
          },
          {
            "elapsed": 104.798,
            "cgroup_memory_bytes": 96735232
          },
          {
            "elapsed": 105.198,
            "cgroup_memory_bytes": 96591872
          },
          {
            "elapsed": 105.598,
            "cgroup_memory_bytes": 97296384
          },
          {
            "elapsed": 105.998,
            "cgroup_memory_bytes": 97419264
          },
          {
            "elapsed": 106.398,
            "cgroup_memory_bytes": 97681408
          },
          {
            "elapsed": 106.798,
            "cgroup_memory_bytes": 97800192
          },
          {
            "elapsed": 107.198,
            "cgroup_memory_bytes": 98070528
          },
          {
            "elapsed": 107.598,
            "cgroup_memory_bytes": 98508800
          },
          {
            "elapsed": 107.998,
            "cgroup_memory_bytes": 98623488
          },
          {
            "elapsed": 108.398,
            "cgroup_memory_bytes": 98983936
          },
          {
            "elapsed": 108.798,
            "cgroup_memory_bytes": 99188736
          },
          {
            "elapsed": 109.198,
            "cgroup_memory_bytes": 99450880
          },
          {
            "elapsed": 109.598,
            "cgroup_memory_bytes": 99594240
          },
          {
            "elapsed": 109.998,
            "cgroup_memory_bytes": 99737600
          },
          {
            "elapsed": 110.398,
            "cgroup_memory_bytes": 100073472
          },
          {
            "elapsed": 110.798,
            "cgroup_memory_bytes": 100466688
          },
          {
            "elapsed": 111.198,
            "cgroup_memory_bytes": 100540416
          },
          {
            "elapsed": 111.598,
            "cgroup_memory_bytes": 100933632
          },
          {
            "elapsed": 111.998,
            "cgroup_memory_bytes": 101142528
          },
          {
            "elapsed": 112.398,
            "cgroup_memory_bytes": 101347328
          },
          {
            "elapsed": 112.798,
            "cgroup_memory_bytes": 101351424
          },
          {
            "elapsed": 113.198,
            "cgroup_memory_bytes": 101687296
          },
          {
            "elapsed": 113.598,
            "cgroup_memory_bytes": 102154240
          },
          {
            "elapsed": 113.998,
            "cgroup_memory_bytes": 102088704
          },
          {
            "elapsed": 114.398,
            "cgroup_memory_bytes": 102371328
          },
          {
            "elapsed": 114.798,
            "cgroup_memory_bytes": 102723584
          },
          {
            "elapsed": 115.198,
            "cgroup_memory_bytes": 103071744
          },
          {
            "elapsed": 115.598,
            "cgroup_memory_bytes": 103079936
          },
          {
            "elapsed": 115.998,
            "cgroup_memory_bytes": 103329792
          },
          {
            "elapsed": 116.398,
            "cgroup_memory_bytes": 103677952
          },
          {
            "elapsed": 116.798,
            "cgroup_memory_bytes": 103890944
          },
          {
            "elapsed": 117.198,
            "cgroup_memory_bytes": 104161280
          },
          {
            "elapsed": 117.598,
            "cgroup_memory_bytes": 104173568
          },
          {
            "elapsed": 117.998,
            "cgroup_memory_bytes": 104509440
          },
          {
            "elapsed": 118.398,
            "cgroup_memory_bytes": 104787968
          },
          {
            "elapsed": 118.798,
            "cgroup_memory_bytes": 105099264
          },
          {
            "elapsed": 119.198,
            "cgroup_memory_bytes": 105226240
          },
          {
            "elapsed": 119.598,
            "cgroup_memory_bytes": 105504768
          },
          {
            "elapsed": 119.998,
            "cgroup_memory_bytes": 105848832
          }
        ]
      },
      "exit_codes": [
        0,
        0
      ],
      "measurements": [
        {
          "valid": true,
          "count": 59988,
          "non_matching_packets": 0,
          "capture_files": 1,
          "capture_bytes": 34313160,
          "largest_capture": 34313160,
          "private_files": true,
          "audit_status": "VERIFIED",
          "audit_records": 3
        },
        {
          "valid": true,
          "count": 60000,
          "non_matching_packets": 0,
          "capture_files": 1,
          "capture_bytes": 35280236,
          "largest_capture": 35280236,
          "private_files": true,
          "audit_status": "VERIFIED",
          "audit_records": 3
        }
      ],
      "cpu_before": "usage_usec 161520\nuser_usec 126064\nsystem_usec 35455\nnr_periods 9\nnr_throttled 5\nthrottled_usec 735014\nnr_bursts 0\nburst_usec 0\n",
      "cpu_after": "usage_usec 2868790\nuser_usec 2212156\nsystem_usec 656633\nnr_periods 1216\nnr_throttled 7\nthrottled_usec 894748\nnr_bursts 0\nburst_usec 0\n"
    },
    {
      "check": "duplicate_directory_refused",
      "status": "PASS",
      "duplicate_exit_code": 5,
      "owner_undisturbed": true,
      "owner_exit_code": 0
    },
    {
      "check": "idle_duration_tcpdump",
      "status": "PASS",
      "exit_code": 0,
      "elapsed_seconds": 2.166
    },
    {
      "check": "idle_duration_dumpcap",
      "status": "PASS",
      "exit_code": 0,
      "elapsed_seconds": 2.25
    },
    {
      "check": "real_engine_ring_rotation",
      "status": "PASS",
      "exit_codes": [
        0,
        0
      ],
      "traffic": {
        "sent": 3000,
        "negative_sent": 30,
        "receiver_datagrams": 2911,
        "seconds": 1.349,
        "peak_cgroup_memory_bytes": 243945472,
        "samples": [
          {
            "elapsed": 0.06,
            "cgroup_memory_bytes": 132673536
          },
          {
            "elapsed": 0.148,
            "cgroup_memory_bytes": 148783104
          },
          {
            "elapsed": 0.245,
            "cgroup_memory_bytes": 158838784
          },
          {
            "elapsed": 0.253,
            "cgroup_memory_bytes": 169017344
          },
          {
            "elapsed": 0.351,
            "cgroup_memory_bytes": 178606080
          },
          {
            "elapsed": 0.447,
            "cgroup_memory_bytes": 185614336
          },
          {
            "elapsed": 0.453,
            "cgroup_memory_bytes": 188661760
          },
          {
            "elapsed": 0.545,
            "cgroup_memory_bytes": 192577536
          },
          {
            "elapsed": 0.549,
            "cgroup_memory_bytes": 194293760
          },
          {
            "elapsed": 0.646,
            "cgroup_memory_bytes": 203436032
          },
          {
            "elapsed": 0.746,
            "cgroup_memory_bytes": 215420928
          },
          {
            "elapsed": 0.749,
            "cgroup_memory_bytes": 218787840
          },
          {
            "elapsed": 0.845,
            "cgroup_memory_bytes": 228057088
          },
          {
            "elapsed": 0.852,
            "cgroup_memory_bytes": 234795008
          },
          {
            "elapsed": 0.948,
            "cgroup_memory_bytes": 243945472
          }
        ]
      },
      "measurements": [
        {
          "valid": true,
          "count": 1136,
          "non_matching_packets": 0,
          "capture_files": 2,
          "capture_bytes": 68228208,
          "largest_capture": 64023984,
          "private_files": true,
          "audit_status": "VERIFIED",
          "audit_records": 3
        },
        {
          "valid": true,
          "count": 1088,
          "non_matching_packets": 0,
          "capture_files": 2,
          "capture_bytes": 65363160,
          "largest_capture": 64041252,
          "private_files": true,
          "audit_status": "VERIFIED",
          "audit_records": 3
        }
      ],
      "note": "High-rate synthetic workload; counts and kernel-drop reports are evidence, not a zero-loss guarantee."
    },
    {
      "check": "real_capture_start_failure",
      "status": "PASS",
      "exit_code": 4,
      "audit_events": [
        "sensor-start",
        "sensor-stop"
      ]
    },
    {
      "check": "real_runner_restart_same_directory",
      "status": "PASS",
      "exit_codes": [
        0,
        0
      ],
      "audit_events": [
        "sensor-start",
        "sensor-stop",
        "retention-review",
        "sensor-start",
        "sensor-stop",
        "retention-review"
      ]
    }
  ],
  "lab_environment": {
    "platform": "Linux-6.1.155-x86_64-with-glibc2.43",
    "python": "3.14.8 (default, Oct  1 2026, 22:01:58) [GCC 14.2.0] & 3.12.15",
    "tools": {
      "tcpdump": "tcpdump version 4.99.6 / libpcap version 1.10.6",
      "dumpcap": "Dumpcap (Wireshark) 4.6.4",
      "tshark": "TShark (Wireshark) 4.6.4",
      "systemd": "systemd 259 (259.1-1~deb13u1)"
    }
  },
  "bots_mapping": [
    {
      "bot_name": "Knowledge Capture: Project Lead",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "12",
      "user_messages": "Unknown (digest reports 12 total messages)",
      "last_activity_aedt": "2026-10-30 11:09 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/<sector>/; /home/box/central-knowledge/",
      "knowledge_capture_records_status": "12 inbox notes total across fleet (7 life, 4 tech, 1 work); money-legal and science inboxes empty; INDEX.md has 'No topic pages yet'; 4 collectors (Science, Tech, Life, New and Unsorted) cut off by Grok Bot request limits",
      "botnik_usage_cross_reference": "Botnik consumes 23% of Daniel's weekly Grok Bot Premium usage limit (35.7% total used as of 2026-10-30 06:38 AEDT; resets Thu 2026-11-05 18:46 AEDT), causing request-limit cutoffs across 4 Knowledge Capture collectors",
      "latest_reply_or_notes": "First collection pass is underway into /home/box/central-knowledge/inbox/<sector>/. Once notes are privacy-cleared and fact-checked, organise them into /home/box/central-knowledge."
    },
    {
      "bot_name": "Quality System: Project Lead",
      "sector": "Quality System",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "9",
      "user_messages": "Unknown (digest reports 9 total messages)",
      "last_activity_aedt": "2026-10-30 11:12 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/workspace/quality-system/; /workspace/quality-system/policies/pol-gen-001-quality-policy.md; /workspace/quality-system/training/",
      "knowledge_capture_records_status": "Not in Knowledge Capture sector; Quality System: Internal Audit was paused by Grok Bot request limits before finishing",
      "botnik_usage_cross_reference": "Shared Grok Bot weekly usage pool (35.7% used, 23% by Botnik); Quality System: Internal Audit cut off by request limits",
      "latest_reply_or_notes": "The project plan, quality manual outline and shared style guide are drafted in /workspace/quality-system/. The plan runs in six phases, from scoping through to audit."
    },
    {
      "bot_name": "FinCode: Project Lead",
      "sector": "FinCode",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "worked without inbound message (bot-only)",
      "total_messages": "2",
      "user_messages": "0",
      "last_activity_aedt": "2026-10-30 11:12 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "Not specified in digest (survey and setup running)",
      "knowledge_capture_records_status": "Not in Knowledge Capture sector; 8 of 10 FinCode bots remain idle (greeting only or never used)",
      "botnik_usage_cross_reference": "Shared Grok Bot weekly usage pool (35.7% used, 23% by Botnik)",
      "latest_reply_or_notes": "The survey and setup are running now. Once they're done, I'll send you the Phase 1 plan with a short list of first tasks for each bot."
    },
    {
      "bot_name": "Digest Collector Bot (Excluded Default)",
      "sector": "Digest / Inventory Tool",
      "bot_uuid_or_id": "1d5e4345-c199-48c4-a401-66f845b440c9",
      "status": "excluded from digest (--exclude default)",
      "total_messages": "N/A",
      "user_messages": "N/A",
      "last_activity_aedt": "2026-11-01 02:30 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/1d5e4345-c199-48c4-a401-66f845b440c9/profile.json",
      "per_bot_digest_paths": "Excluded by default in /workspace/bot-digest/bot_digest.py",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md; /workspace/bot-digest/data/central_knowledge.json; /workspace/bot-digest/data/auto_sections.md",
      "deployment_workspace_paths": "/workspace/bot-digest/bot_digest.py; /home/box/agent-data/search-index.db",
      "knowledge_capture_records_status": "Reads /home/box/central-knowledge/** into /workspace/bot-digest/data/central_knowledge.json",
      "botnik_usage_cross_reference": "Reports Legal: Usage and Cost Monitor finding that Botnik accounts for 23% of weekly Grok Bot usage",
      "latest_reply_or_notes": "Only explicit bot UUID present in uploaded bot_digest.py and digest.md files; runs read-only fleet inventory across 546 bots."
    },
    {
      "bot_name": "Botnik",
      "sector": "Standalone / named bots",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "68",
      "user_messages": "Unknown (digest reports 68 total messages)",
      "last_activity_aedt": "2026-10-30 05:36 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "Packet Squirrel diagram files (on Grok Bot host)",
      "knowledge_capture_records_status": "Tracked in fleet digest; no specific Knowledge Capture note listed",
      "botnik_usage_cross_reference": "Consumes 23% of Daniel's weekly Grok Bot Premium usage limit (roughly two-thirds of the 35.7% used so far; resets Thu 2026-11-05 18:46 AEDT)",
      "latest_reply_or_notes": "A few things only you can decide, so I've marked them in the files: The Packet Squirrel diagrams are labelled 'Remote Attacker via Cloud C2', 'Inline Implant'..."
    },
    {
      "bot_name": "Knowledge Capture: Money and Legal Collector",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "6",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:15 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/money-legal/",
      "knowledge_capture_records_status": "Money-legal inbox is currently empty; scheduled daily weekday catch-ups around 8:00 AM AEDT",
      "botnik_usage_cross_reference": "Impacted by shared Grok Bot usage pool (23% consumed by Botnik)",
      "latest_reply_or_notes": "All four are set up (times are Sydney time): Daily, weekdays around 8am: I'll catch up on new activity from the Money, Treasury and Legal bots."
    },
    {
      "bot_name": "Knowledge Capture: Science Collector",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (cut off by request limits)",
      "total_messages": "4",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:10 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/science/",
      "knowledge_capture_records_status": "0 notes saved (science inbox empty); first sweep cut off by request limits; set to retry once",
      "botnik_usage_cross_reference": "Cut off by Grok Bot request limits driven by 35.7% weekly usage (23% Botnik)",
      "latest_reply_or_notes": "The first science sweep got cut off by request limits before it wrote any notes, probably because the whole team started at once."
    },
    {
      "bot_name": "Knowledge Capture: Tech Collector",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (cut off by request limits)",
      "total_messages": "3",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:10 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/tech/",
      "knowledge_capture_records_status": "4 tech notes present in central knowledge inbox after restart (incremental per-bot saving); initial sweep cut off",
      "botnik_usage_cross_reference": "Cut off by Grok Bot request limits driven by 35.7% weekly usage (23% Botnik)",
      "latest_reply_or_notes": "The first sweep stopped early because of a temporary limit on requests, and no notes were saved. I've restarted it, and this time each bot's note gets saved as it comes in."
    },
    {
      "bot_name": "Knowledge Capture: Life Collector",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (cut off by request limits)",
      "total_messages": "4",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:10 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/life/",
      "knowledge_capture_records_status": "7 life notes present in central knowledge inbox after restart (incremental per-bot saving); initial sweep cut off",
      "botnik_usage_cross_reference": "Cut off by Grok Bot request limits driven by 35.7% weekly usage (23% Botnik)",
      "latest_reply_or_notes": "The first sweep got cut off by a temporary request limit before it wrote any notes, so I've restarted it. This time it saves each bot's note as soon as that bot is processed."
    },
    {
      "bot_name": "Knowledge Capture: New and Unsorted Bots Collector",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (cut off by request limits)",
      "total_messages": "4",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:10 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/",
      "knowledge_capture_records_status": "0 notes saved; inbox folder exists but is empty; sweep stopped due to Grok Bot request limits",
      "botnik_usage_cross_reference": "Cut off by Grok Bot request limits driven by 35.7% weekly usage (23% Botnik)",
      "latest_reply_or_notes": "I had to stop the first sweep before it saved any notes because Grok Bot is limiting requests right now. The inbox folder exists but it's still empty."
    },
    {
      "bot_name": "Knowledge Capture: Work, Career and Property Collector",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "3",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:09 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/inbox/work/",
      "knowledge_capture_records_status": "1 work note present in central knowledge inbox; first sweep started",
      "botnik_usage_cross_reference": "Impacted by shared Grok Bot usage pool (23% consumed by Botnik)",
      "latest_reply_or_notes": "The first sweep has started. Once the notes are in the knowledge base inbox, I'll send you the highlights."
    },
    {
      "bot_name": "Knowledge Capture: Knowledge Indexer",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "3",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:09 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/INDEX.md; /home/box/central-knowledge/index/",
      "knowledge_capture_records_status": "Skeleton index set up (master index, cross-sector connections); INDEX.md still states 'No topic pages yet'",
      "botnik_usage_cross_reference": "Stalled waiting on collectors blocked by Grok Bot usage limits (23% Botnik)",
      "latest_reply_or_notes": "The inbox is still empty since the collectors are only just starting, so I've set up the skeleton in the index folder: a master index, a cross-sector connections page."
    },
    {
      "bot_name": "Knowledge Capture: Fact Checker",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "3",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:09 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/",
      "knowledge_capture_records_status": "Waiting on collector entries to fact-check",
      "botnik_usage_cross_reference": "Stalled waiting on collectors blocked by Grok Bot usage limits (23% Botnik)",
      "latest_reply_or_notes": "The knowledge base is set up but still empty: the inbox, digests and index folders have no entries yet, so there's nothing to fact-check today."
    },
    {
      "bot_name": "Knowledge Capture: Privacy Guard",
      "sector": "Knowledge Capture",
      "bot_uuid_or_id": "UNRESOLVED_IN_DIGEST (requires /home/box/agent-data/agents/ or /workspace/bot-digest/data/roster.md on Grok Bot host)",
      "status": "active (received messages)",
      "total_messages": "3",
      "user_messages": "Unknown",
      "last_activity_aedt": "2026-10-30 11:09 AEDT",
      "agent_config_path": "/home/box/agent-data/agents/<id>/profile.json",
      "per_bot_digest_paths": "/workspace/bot-digest/data/bots/<id>.json; /workspace/bot-digest/data/bots/<id>.md",
      "roster_manifest_paths": "/workspace/bot-digest/data/roster.json; /workspace/bot-digest/data/roster.md",
      "deployment_workspace_paths": "/home/box/central-knowledge/",
      "knowledge_capture_records_status": "Verified knowledge base clean; no personal data in inbox, digests, or index pages",
      "botnik_usage_cross_reference": "Stalled waiting on collectors blocked by Grok Bot usage limits (23% Botnik)",
      "latest_reply_or_notes": "The knowledge base is clean right now. The collectors haven't filed any notes yet, and the index pages only hold structure and bot counts, with nothing personal."
    }
  ],
  "protokit_checklist": [
    {
      "id": "pre",
      "title": "Pre-flight",
      "items": [
        [
          "Hypothesis and success metric are written at the top of the prototype",
          "If you can't state what failure looks like, you're demoing, not testing."
        ],
        [
          "Test script phrases tasks as goals, not instructions",
          "\"You owe a client for last week's work\" \u2014 not \"Click New invoice\"."
        ],
        [
          "Prototype loads from a clean state on refresh",
          "Each tester starts with identical seed data."
        ],
        [
          "Seed data is realistic, including edge cases",
          "Long names, zero items, many items, non-ASCII characters."
        ],
        [
          "Tracking fires for every step in the flow",
          "Check Proto.track.events in the console after a dry run."
        ],
        [
          "Recording, consent and test device are ready",
          ""
        ]
      ]
    },
    {
      "id": "task",
      "title": "Task completion",
      "items": [
        [
          "Tester finds the entry point without help",
          ""
        ],
        [
          "Each screen has one obvious primary action",
          "Watch where the cursor or finger hesitates."
        ],
        [
          "Tester completes the core task end-to-end",
          ""
        ],
        [
          "Time-on-task is within the target",
          "Compare against the time you set in the hypothesis."
        ],
        [
          "No dead ends \u2014 every screen has a way forward and back",
          ""
        ],
        [
          "Tester can explain what just happened at the end",
          "Confirmation copy and state are unambiguous."
        ]
      ]
    },
    {
      "id": "nav",
      "title": "Navigation & wayfinding",
      "items": [
        [
          "Current location is always visible",
          "Active nav item, step indicator or page title."
        ],
        [
          "Browser back behaves as the tester expects",
          ""
        ],
        [
          "Refresh or deep link lands on the same screen",
          "Hash routes make this free."
        ],
        [
          "Labels match the tester's own vocabulary",
          "Note any word they substitute when thinking aloud."
        ]
      ]
    },
    {
      "id": "forms",
      "title": "Forms & input",
      "items": [
        [
          "Required fields are clearly marked",
          ""
        ],
        [
          "Errors appear inline, next to the field",
          "Not only in a banner at the top."
        ],
        [
          "Error messages say how to fix the problem",
          ""
        ],
        [
          "Correct input types trigger the right mobile keyboard",
          "email, tel, number, date."
        ],
        [
          "Entered data survives going back a step",
          ""
        ],
        [
          "Submit shows a busy state and blocks double-submit",
          "aria-busy on the button."
        ]
      ]
    },
    {
      "id": "states",
      "title": "States & feedback",
      "items": [
        [
          "Empty state explains what to do next",
          ""
        ],
        [
          "Loading feedback appears for anything slower than ~300ms",
          "Use Proto.mock({ delay }) to force it."
        ],
        [
          "Error state offers a way to recover",
          "Retry, edit, or contact \u2014 never a dead end."
        ],
        [
          "Success is confirmed visibly",
          "Toast, inline message, or a dedicated screen."
        ],
        [
          "Destructive actions confirm or allow undo",
          ""
        ]
      ]
    },
    {
      "id": "resp",
      "title": "Responsive",
      "items": [
        [
          "No horizontal scroll at 375px",
          ""
        ],
        [
          "Tap targets are at least 44 \u00d7 44px",
          ""
        ],
        [
          "Layout holds at 768px and 1280px",
          ""
        ],
        [
          "Stacked content order still makes sense on mobile",
          ""
        ],
        [
          "Long text wraps or truncates gracefully",
          ""
        ]
      ]
    },
    {
      "id": "a11y",
      "title": "Accessibility",
      "items": [
        [
          "Whole flow is operable by keyboard alone",
          "Tab, Shift+Tab, Enter, Space, Esc, arrows in tabs."
        ],
        [
          "Focus indicator is visible on every interactive element",
          ""
        ],
        [
          "Dialogs trap focus and close with Esc",
          "Native <dialog> handles both."
        ],
        [
          "Body text contrast is at least 4.5:1",
          ""
        ],
        [
          "Every input has a programmatic label",
          ""
        ],
        [
          "Status changes are announced to screen readers",
          "aria-live regions for toasts and async results."
        ]
      ]
    },
    {
      "id": "debrief",
      "title": "Debrief",
      "items": [
        [
          "Single Ease Question (1\u20137) asked after each task",
          ""
        ],
        [
          "Top three issues logged with severity",
          "Critical \u00b7 serious \u00b7 minor."
        ],
        [
          "Notable quotes captured verbatim",
          ""
        ],
        [
          "Ship / iterate / kill decision recorded against the hypothesis",
          ""
        ]
      ]
    }
  ],
  "market_instruments": [
    {
      "symbol": "SPY",
      "name": "S&P 500 ETF",
      "group": "US Benchmark",
      "close": 755.72,
      "change": -13.64,
      "pct": -1.77,
      "mcap_b": 799.0,
      "volume": "77.1M",
      "beta": 1.0
    },
    {
      "symbol": "^IXIC",
      "name": "Nasdaq Composite",
      "group": "US Benchmark",
      "close": 25437.0,
      "change": -747.73,
      "pct": -2.86,
      "mcap_b": null,
      "volume": "7.7B",
      "beta": 1.22
    },
    {
      "symbol": "^RUT",
      "name": "Russell 2000",
      "group": "US Benchmark",
      "close": 2811.84,
      "change": -47.37,
      "pct": -1.66,
      "mcap_b": null,
      "volume": "\u2014",
      "beta": 1.15
    },
    {
      "symbol": "AAPL",
      "name": "Apple Inc.",
      "group": "Mega-Cap Tech",
      "close": 344.63,
      "change": -4.28,
      "pct": -1.23,
      "mcap_b": 5030.0,
      "volume": "67.8M",
      "beta": 1.18
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft Corp.",
      "group": "Mega-Cap Tech",
      "close": 521.91,
      "change": -8.23,
      "pct": -1.55,
      "mcap_b": 3880.0,
      "volume": "35.6M",
      "beta": 1.08
    },
    {
      "symbol": "NVDA",
      "name": "NVIDIA Corp.",
      "group": "Mega-Cap Tech",
      "close": 204.64,
      "change": -9.02,
      "pct": -4.22,
      "mcap_b": 4930.0,
      "volume": "165.9M",
      "beta": 1.68
    },
    {
      "symbol": "TSLA",
      "name": "Tesla, Inc.",
      "group": "Mega-Cap Tech",
      "close": 399.81,
      "change": -3.49,
      "pct": -0.87,
      "mcap_b": 1580.0,
      "volume": "41.6M",
      "beta": 1.82
    },
    {
      "symbol": "AMZN",
      "name": "Amazon.com, Inc.",
      "group": "Mega-Cap Tech",
      "close": 240.35,
      "change": -3.44,
      "pct": -1.41,
      "mcap_b": 2590.0,
      "volume": "104.7M",
      "beta": 1.16
    },
    {
      "symbol": "GOOG",
      "name": "Alphabet Inc.",
      "group": "Mega-Cap Tech",
      "close": 278.22,
      "change": -4.1,
      "pct": -1.45,
      "mcap_b": 3410.0,
      "volume": "44.9M",
      "beta": 1.12
    },
    {
      "symbol": "META",
      "name": "Meta Platforms, Inc.",
      "group": "Mega-Cap Tech",
      "close": 614.99,
      "change": -9.53,
      "pct": -1.53,
      "mcap_b": 1360.0,
      "volume": "25.0M",
      "beta": 1.28,
      "pe": 21.0
    },
    {
      "symbol": "BTCUSD",
      "name": "Bitcoin Spot",
      "group": "Crypto & Macro",
      "close": 77440.12,
      "change": 237.72,
      "pct": 0.31,
      "mcap_b": 1550.0,
      "volume": "18.0B",
      "beta": 0.45
    },
    {
      "symbol": "ETHUSD",
      "name": "Ethereum Spot",
      "group": "Crypto & Macro",
      "close": 2249.37,
      "change": 8.19,
      "pct": 0.37,
      "mcap_b": 271.5,
      "volume": "7.0B",
      "beta": 0.52
    },
    {
      "symbol": "CLUSD",
      "name": "WTI Crude Oil",
      "group": "Crypto & Macro",
      "close": 104.12,
      "change": 2.12,
      "pct": 2.08,
      "mcap_b": null,
      "volume": "251,615",
      "beta": -0.35
    }
  ],
  "meta_quarters": [
    {
      "period": "2025 Q3",
      "rev_b": 51.2,
      "op_profit_b": 20.5,
      "op_margin_pct": 40.1,
      "net_income_b": 2.7,
      "eps": 1.05,
      "ocf_b": 30.0
    },
    {
      "period": "2025 Q4",
      "rev_b": 59.9,
      "op_profit_b": 24.7,
      "op_margin_pct": 41.3,
      "net_income_b": 22.8,
      "eps": 8.88,
      "ocf_b": 36.2
    },
    {
      "period": "2026 Q1",
      "rev_b": 56.3,
      "op_profit_b": 22.9,
      "op_margin_pct": 40.6,
      "net_income_b": 26.8,
      "eps": 10.44,
      "ocf_b": 32.2
    },
    {
      "period": "2026 Q2",
      "rev_b": 60.8,
      "op_profit_b": 18.8,
      "op_margin_pct": 30.9,
      "net_income_b": 15.8,
      "eps": 6.18,
      "ocf_b": 31.9
    },
    {
      "period": "2026 Q3",
      "rev_b": 64.6,
      "op_profit_b": 13.0,
      "op_margin_pct": 20.1,
      "net_income_b": 9.9,
      "eps": 3.83,
      "ocf_b": 32.8
    }
  ],
  "meta_analysts": [
    {
      "date": "2026-10-22",
      "firm": "Citigroup",
      "action": "Maintains",
      "rating": "Buy",
      "target": 905,
      "prior_target": 895,
      "upside_pct": 47.2
    },
    {
      "date": "2026-10-22",
      "firm": "UBS",
      "action": "Maintains",
      "rating": "Buy",
      "target": 892,
      "prior_target": 884,
      "upside_pct": 45.0
    },
    {
      "date": "2026-10-30",
      "firm": "Street Consensus (34 Firms)",
      "action": "Strong Buy (91.2%)",
      "rating": "Strong Buy",
      "target": 862.18,
      "prior_target": 860.0,
      "upside_pct": 40.2
    },
    {
      "date": "2026-10-22",
      "firm": "DA Davidson",
      "action": "Maintains",
      "rating": "Buy",
      "target": 800,
      "prior_target": 700,
      "upside_pct": 30.1
    },
    {
      "date": "2026-10-22",
      "firm": "BMO Capital",
      "action": "Maintains",
      "rating": "Market Perform",
      "target": 685,
      "prior_target": 580,
      "upside_pct": 11.4
    },
    {
      "date": "2026-10-30",
      "firm": "Street Range Bounds",
      "action": "High $1,000 / Low $650",
      "rating": "Range",
      "target": 1000,
      "prior_target": 650,
      "upside_pct": 62.6
    }
  ],
  "racing_runners": [
    {
      "num": 1,
      "name": "Golden Grok",
      "barrier": 4,
      "jockey": "J. McDonald",
      "trainer": "C. Waller",
      "weight_kg": 58.5,
      "form": "1-1-2-1",
      "win_odds": 2.6,
      "place_odds": 1.35,
      "open_odds": 3.1,
      "trend": "firming",
      "speed_mps": 17.15,
      "sectional_600m": 33.42,
      "track": "Randwick R7 \u00b7 1400m Good 4",
      "bookies": {
        "TAB": 2.55,
        "Sportsbet": 2.6,
        "Ladbrokes": 2.5,
        "Neds": 2.55,
        "PointsBet": 2.65,
        "bet365": 2.7,
        "Betfair": 2.76,
        "TopSport": 2.6
      }
    },
    {
      "num": 2,
      "name": "RockBot Rising",
      "barrier": 2,
      "jockey": "Z. Purton",
      "trainer": "G. Waterhouse & A. Bott",
      "weight_kg": 57.0,
      "form": "2-1-1-3",
      "win_odds": 3.8,
      "place_odds": 1.65,
      "open_odds": 4.4,
      "trend": "firming",
      "speed_mps": 17.04,
      "sectional_600m": 33.68,
      "track": "Randwick R7 \u00b7 1400m Good 4",
      "bookies": {
        "TAB": 3.7,
        "Sportsbet": 3.8,
        "Ladbrokes": 3.9,
        "Neds": 3.85,
        "PointsBet": 3.75,
        "bet365": 3.95,
        "Betfair": 4.1,
        "TopSport": 3.85
      }
    },
    {
      "num": 3,
      "name": "NSW Thunder",
      "barrier": 7,
      "jockey": "T. Berry",
      "trainer": "B. Cummings",
      "weight_kg": 56.5,
      "form": "4-2-1-2",
      "win_odds": 5.5,
      "place_odds": 2.1,
      "open_odds": 5.0,
      "trend": "drifting",
      "speed_mps": 16.88,
      "sectional_600m": 33.95,
      "track": "Randwick R7 \u00b7 1400m Good 4",
      "bookies": {
        "TAB": 5.5,
        "Sportsbet": 5.4,
        "Ladbrokes": 5.6,
        "Neds": 5.5,
        "PointsBet": 5.75,
        "bet365": 5.5,
        "Betfair": 6.0,
        "TopSport": 5.65
      }
    },
    {
      "num": 4,
      "name": "Parramatta Prince",
      "barrier": 1,
      "jockey": "J. Moreira",
      "trainer": "C. Maher",
      "weight_kg": 56.0,
      "form": "1-3-5-2",
      "win_odds": 7.5,
      "place_odds": 2.45,
      "open_odds": 8.5,
      "trend": "firming",
      "speed_mps": 16.79,
      "sectional_600m": 34.1,
      "track": "Randwick R7 \u00b7 1400m Good 4",
      "bookies": {
        "TAB": 7.5,
        "Sportsbet": 7.0,
        "Ladbrokes": 7.5,
        "Neds": 7.4,
        "PointsBet": 7.8,
        "bet365": 8.0,
        "Betfair": 8.4,
        "TopSport": 7.6
      }
    },
    {
      "num": 5,
      "name": "Harbour Star",
      "barrier": 9,
      "jockey": "K. McEvoy",
      "trainer": "J. Cummings",
      "weight_kg": 55.0,
      "form": "3-4-2-6",
      "win_odds": 11.0,
      "place_odds": 3.2,
      "open_odds": 9.5,
      "trend": "drifting",
      "speed_mps": 16.61,
      "sectional_600m": 34.48,
      "track": "Randwick R7 \u00b7 1400m Good 4",
      "bookies": {
        "TAB": 11.0,
        "Sportsbet": 10.5,
        "Ladbrokes": 11.0,
        "Neds": 11.0,
        "PointsBet": 12.0,
        "bet365": 11.5,
        "Betfair": 13.0,
        "TopSport": 11.5
      }
    },
    {
      "num": 6,
      "name": "Sydney Cyber",
      "barrier": 5,
      "jockey": "N. Rawiller",
      "trainer": "A. Neasham",
      "weight_kg": 54.5,
      "form": "6-2-8-4",
      "win_odds": 16.0,
      "place_odds": 4.2,
      "open_odds": 15.0,
      "trend": "steady",
      "speed_mps": 16.45,
      "sectional_600m": 34.82,
      "track": "Randwick R7 \u00b7 1400m Good 4",
      "bookies": {
        "TAB": 16.0,
        "Sportsbet": 15.0,
        "Ladbrokes": 17.0,
        "Neds": 16.5,
        "PointsBet": 16.0,
        "bet365": 17.0,
        "Betfair": 19.5,
        "TopSport": 16.5
      }
    }
  ],
  "bot_studio_steps": [
    {
      "type": "log",
      "group": "Core",
      "permission": "sandbox-safe",
      "sensitive": false,
      "timeout_ms": 5000,
      "desc": "Append structured telemetry line to execution console"
    },
    {
      "type": "delay",
      "group": "Core",
      "permission": "sandbox-safe",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Deterministic async sleep inside Worker"
    },
    {
      "type": "set",
      "group": "Core",
      "permission": "sandbox-safe",
      "sensitive": false,
      "timeout_ms": 5000,
      "desc": "Bind template-interpolated value into memory.vars"
    },
    {
      "type": "condition",
      "group": "Core",
      "permission": "sandbox-safe",
      "sensitive": false,
      "timeout_ms": 5000,
      "desc": "Evaluate expression and branch or halt run"
    },
    {
      "type": "code",
      "group": "Core",
      "permission": "sandbox-safe",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Run isolated AsyncFunction snippet inside Worker sandbox"
    },
    {
      "type": "browser.open",
      "group": "Browser",
      "permission": "browser.open",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Navigate Playwright/connector tab to target URL"
    },
    {
      "type": "browser.click",
      "group": "Browser",
      "permission": "browser.click",
      "sensitive": true,
      "timeout_ms": 30000,
      "desc": "Click DOM selector (requires sensitive confirmation if armed)"
    },
    {
      "type": "browser.fill",
      "group": "Browser",
      "permission": "browser.fill",
      "sensitive": true,
      "timeout_ms": 30000,
      "desc": "Fill input selector with interpolated payload"
    },
    {
      "type": "browser.extract",
      "group": "Browser",
      "permission": "browser.extract",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Extract text/attribute from DOM into memory variable"
    },
    {
      "type": "browser.screenshot",
      "group": "Browser",
      "permission": "browser.screenshot",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Capture viewport PNG artifact via local bridge"
    },
    {
      "type": "ai.chat",
      "group": "AI",
      "permission": "ai.chat",
      "sensitive": false,
      "timeout_ms": 60000,
      "desc": "Invoke OpenAI-compatible /v1/chat/completions endpoint"
    },
    {
      "type": "http.get",
      "group": "HTTP",
      "permission": "http.get",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Perform CORS/bridge HTTP GET and parse JSON payload"
    },
    {
      "type": "telegram.send",
      "group": "Telegram",
      "permission": "telegram.send",
      "sensitive": true,
      "timeout_ms": 30000,
      "desc": "Send message via Bot API sendMessage"
    },
    {
      "type": "telegram.updates",
      "group": "Telegram",
      "permission": "telegram.updates",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Poll getUpdates for incoming chat triggers"
    },
    {
      "type": "telegram.delete",
      "group": "Telegram",
      "permission": "telegram.delete",
      "sensitive": true,
      "timeout_ms": 30000,
      "desc": "Delete Telegram message (sensitive action)"
    },
    {
      "type": "discord.send",
      "group": "Discord",
      "permission": "discord.send",
      "sensitive": true,
      "timeout_ms": 30000,
      "desc": "Post message to Discord webhook or channel"
    },
    {
      "type": "discord.messages",
      "group": "Discord",
      "permission": "discord.messages",
      "sensitive": false,
      "timeout_ms": 30000,
      "desc": "Fetch recent channel messages via local connector"
    },
    {
      "type": "discord.delete",
      "group": "Discord",
      "permission": "discord.delete",
      "sensitive": true,
      "timeout_ms": 30000,
      "desc": "Delete Discord message (sensitive action)"
    }
  ]
};
