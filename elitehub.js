/* THE NEXUS // Domain 07 — Elite AI Hub governance layer + Domain 08 — Project 444 workspace node
   Elite AI Hub figures and names come from the public pages of https://elitehub.ai (read-only public observation).
   Lens narratives are the Nexus team's interpretation of how the layer applies to Nexus.
   Execution on Elite AI Hub needs institutional credentials at app.elitehub.ai; nothing here calls it.
   All hashing runs locally in the browser with Web Crypto. */
(function () {
  "use strict";

  const EH = {
    url: "https://elitehub.ai/",
    app: "https://app.elitehub.ai/",
    tagline: "Sovereign AI Infrastructure, Cryptographically Attested.",
    stats: [
      { n: 1037, s: "+", l: "Governed engines", sub: "run sanctioned procedures" },
      { n: 265, s: "+", l: "Vertical OS deployed", sub: "across 30 classes" },
      { n: 20, s: "", l: "Canonical architectures", sub: "one sovereign substrate" },
      { n: 6, s: "", l: "Operational planes", sub: "governance → inference" },
      { n: 12, s: "", l: "Ecosystem domains", sub: "defense to media" },
      { n: 100, s: "%", l: "Audit coverage", sub: "every operation sealed" }
    ],
    lenses: [
      { k: "Executive", head: "One gate between every Nexus decision and the real world.",
        pts: ["High-risk actions (live bets, production deploys) cannot run without a named human sign-off.",
              "Every decision leaves a sealed, timestamped receipt you can hand to a board or auditor.",
              "Risk is visible before it is taken, not reconstructed after."] },
      { k: "Architecture", head: "Authority cascades down seven layers, L01 to L07.",
        pts: ["Omni Omega sets constitutional rules; Omni Gate authorises; the Control Plane routes.",
              "Nexus domains attach at the Command Center and run on the Engine Fleet.",
              "Evidence is anchored in the Trust Fabric before results are delivered."] },
      { k: "Government", head: "Policy bound to jurisdiction, evidence fit for court.",
        pts: ["Pick a jurisdiction and the gate validates against that policy set.",
              "Enterprise tier lists data residency controls and on-premise or air-gapped deployment.",
              "Court-grade evidence export with chain-of-custody records."] },
      { k: "Investor", head: "Governance turns a dashboard into an institutional product.",
        pts: ["Governed execution is the moat behind every Nexus SKU: template, hosted and install-plus-rails.",
              "Regulated buyers in 12 domains need verifiable AI oversight before they can adopt.",
              "Audit receipts make each feature defensible, which shortens enterprise sales cycles."] },
      { k: "Technical", head: "Deterministic, hash-chained, inspectable.",
        pts: ["Receipts here are SHA-256 hashes computed in your browser with Web Crypto.",
              "Each receipt includes the previous hash, so tampering with history breaks the chain.",
              "Elite AI Hub lists REST and GraphQL APIs plus SSO/SAML on its Professional tier and up."] },
      { k: "Partner", head: "Nexus as a vertical front end on a sovereign substrate.",
        pts: ["Racing, network capture, market briefs and bot fleets map onto Vertical OS domains.",
              "Shared trust and inference layers mean partners do not rebuild governance per product.",
              "Innovation infrastructure covers discovery through licensing and monetisation."] }
    ],
    layers: [
      { id: "L01", name: "Omni Omega", role: "Sovereign", verb: "Governs", desc: "Constitutional sovereign governance." },
      { id: "L02", name: "Omni Gate", role: "Authorization", verb: "Authorizes", desc: "Authority gate for activation and approvals." },
      { id: "L03", name: "Governance Plane", role: "Oversight", verb: "Oversees", desc: "Jurisdiction-aware enforcement, audit chains, policy binding." },
      { id: "L04", name: "Control Plane", role: "Coordination", verb: "Coordinates", desc: "Routing, execution posture, oversight." },
      { id: "L05", name: "Engine Fleet", role: "Execution", verb: "Executes", desc: "1,037+ governed engines run sanctioned procedures." },
      { id: "L06", name: "Trust Fabric", role: "Attestation", verb: "Verifies", desc: "Custody · attestation · verification · anchoring." },
      { id: "L07", name: "Deployment", role: "Reach", verb: "Delivers", desc: "Enterprise · Mission · Regional · Sovereign · Edge." }
    ],
    modules: [
      { id: "GOV", name: "Governance Plane", desc: "Jurisdiction-aware enforcement, oversight, audit chains and policy binding.", color: "cyan" },
      { id: "CTRL", name: "Control Plane", desc: "Routing, execution posture, oversight, approvals, activation and execution readiness.", color: "blue" },
      { id: "EXEC", name: "Execution Plane", desc: "Where governed engines run sanctioned procedures inside constrained parameters.", color: "amber" },
      { id: "INFER", name: "Sovereign Inference", desc: "Multi-model routing, domain specialists, compliance review, edge/offline models and explainability.", color: "rose" },
      { id: "TRUST", name: "Trust Fabric", desc: "Custody, cryptographic attestation, independent verification, tamper-evident anchoring, post-quantum posture.", color: "emerald" },
      { id: "CMD", name: "Command Center", desc: "Central orchestration for human-governed execution with role-based authority. Public view is read-only.", color: "violet" }
    ],
    stacks: ["Sovereign AI", "Trust", "Intelligence", "Mission", "Identity", "Commercialization", "Deployment", "Adaptive Intelligence"],
    classes: [
      { id: "D01", name: "Enterprise", color: "#22d3ee" },
      { id: "D02", name: "Regional", color: "#38bdf8" },
      { id: "D03", name: "Mission", color: "#f59e0b" },
      { id: "D04", name: "Critical Infra", color: "#f43f5e" },
      { id: "D05", name: "Sovereign", color: "#a855f7" }
    ],
    pipeline: [
      { k: "Discovery", tool: "IP Forge", d: "Surface inventions inside engines, models and workflows." },
      { k: "Mining", tool: "IP Forge", d: "Extract the claimable novelty from raw work." },
      { k: "Validation", tool: "Prior Art Validator", d: "Check novelty against prior art before filing." },
      { k: "Protection", tool: "Patent Workbench", d: "Draft and structure protection." },
      { k: "Custody", tool: "Trust Fabric", d: "Seal the asset with an attested, timestamped record." },
      { k: "Licensing", tool: "Vault Licensing", d: "License sealed assets with provable provenance." },
      { k: "Monetization", tool: "Vault Licensing", d: "Turn custody into revenue." }
    ],
    domains: [
      ["Defense & Mission", 38], ["Sovereign & Government", 34], ["Financial & Capital", 32],
      ["Health & Life Sciences", 28], ["Energy & Utilities", 26], ["Critical Infrastructure", 24],
      ["Smart Cities & Mobility", 22], ["Industrial & Manufacturing", 21], ["Agriculture & Resources", 18],
      ["Logistics & Trade", 14], ["Education & Research", 12], ["Media & Information", 11]
    ],
    tiers: [
      { name: "Starter", price: "Contact", feats: ["Up to 100 sealed assets", "Basic audit logging", "REST API", "Standard SLA"] },
      { name: "Professional", price: "Contact", feats: ["Up to 1,000 sealed assets", "Full audit trail export", "GraphQL + REST", "SSO/SAML", "99.9% SLA"] },
      { name: "Enterprise", price: "Custom", feats: ["Unlimited sealed assets", "Court-grade evidence export", "Enterprise SSO & RBAC", "On-prem / air-gapped", "Data residency", "99.99% SLA"] },
      { name: "Gov & Defense", price: "Special", feats: ["Agencies, defense contractors and public-sector institutions", "Special deployment options"] }
    ],
    evidence: { asset: "Neural Architecture v2.4.1", type: "AI Model Architecture", ts: "2024-01-15T14:32:08Z", block: "847,293", hash: "a7f8c9d2e1b4f6a8c3d5e7f9a1b2c4d6e8f0a2b4c6d8e0f2a4b6c8d0e2f4a6b8" },
    steps: [
      { k: "INIT", t: "Command initiated", d: "Procedure raised through the Decision Interface" },
      { k: "POLICY", t: "Policy validation", d: "Checked against governance policy and authority level" },
      { k: "EXEC", t: "Governed execution", d: "Engine runs inside constrained parameters, fully logged" },
      { k: "SEAL", t: "Evidence sealed", d: "Reasoning transcript and audit receipt hashed and chained" }
    ],
    procedures: [
      { id: "P-01", name: "Cap Botnik weekly quota at 8%", src: "04 · Bot Fleet", risk: "low", engine: "Fleet Throttle Engine" },
      { id: "P-02", name: "Execute Betfair $3.05 vs TAB $2.75 arbitrage", src: "01 · Race Pulse", risk: "high", engine: "Wagering Execution Engine" },
      { id: "P-03", name: "Deploy dual-engine capture under 256 MiB cgroup", src: "02 · Capture Grid", risk: "medium", engine: "Capture Orchestrator" },
      { id: "P-04", name: "Publish META overweight brief to execs", src: "03 · Meta Brief", risk: "medium", engine: "Research Distribution Engine" },
      { id: "P-05", name: "Promote Nexus build to production CDN", src: "06 · Deploy Hub", risk: "high", engine: "Release Engine" },
      { id: "P-06", name: "Sync Project 444 knowledge into Nexus", src: "08 · Project 444", risk: "low", engine: "Knowledge Sync Engine" }
    ]
  };

  const P444 = {
    desc: "A super app of the universe — the Perplexity Computer workspace that holds every Nexus artifact.",
    url: "https://www.perplexity.ai/projects/444-WMd9idUWQqSIIBHzJtwsCQ",
    nodes: [
      { n: "Nexus Overlay app", t: "APP", go: "#section-horse-hub", d: "This live overlay — 20 visuals, 39 assets, 8 domains." },
      { n: "Grok RockBots Horse Hub", t: "APP", go: "#section-horse-hub", d: "Racing odds dashboard feeding Race Pulse." },
      { n: "Deployment bundle (47 files)", t: "CODE", go: "#section-system-options", d: "Vercel and static deployment bundle." },
      { n: "Agent manifest JSON", t: "CODE", go: "#section-system-options", d: "Machine-readable map for agents." },
      { n: "Multi-agent handoff protocol", t: "DOC", go: "#section-system-options", d: "How agents share work across the Nexus." },
      { n: "Network Capture Toolkit overview", t: "PDF", go: "#section-network-capture", d: "Product overview behind Capture Grid." },
      { n: "Market & Company Brief", t: "PDF", go: "#section-meta-brief", d: "META brief behind Domain 03." },
      { n: "Project Lead bot mapping report", t: "CODE", go: "#section-bot-canvas", d: "Fleet mapping behind Domain 04." },
      { n: "GitHub repository", t: "LINK", href: "https://github.com/dukesice19-ai/the-nexus-overlay-system-2500", d: "Source for the overlay." },
      { n: "GitHub Pages site", t: "LINK", href: "https://dukesice19-ai.github.io/the-nexus-overlay-system-2500/", d: "Static production mirror." },
      { n: "Elite AI Hub governance layer", t: "GOV", go: "#section-elite-hub", d: "Domain 07 — governed execution gate." }
    ]
  };

  const ST = {
    procIdx: 0, humanConfirm: false, jurisdiction: "AU", running: false, step: -1, blocked: null, cascade: -1,
    receipts: [], mod: 0, highlightDomain: -1, lens: 0, meshClass: -1, layerHover: -1, pipe: 0,
    notary: { name: "", type: "Model weights", text: "", fileName: "", result: null, busy: false }
  };

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const toast = (m, k) => { if (window.nexusToast) window.nexusToast(m, k); };

  async function sha256(data) {
    const buf = typeof data === "string" ? new TextEncoder().encode(data) : data;
    try {
      const d = await crypto.subtle.digest("SHA-256", buf);
      return Array.from(new Uint8Array(d)).map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch (e) {
      // Fallback for contexts without SubtleCrypto: non-cryptographic, clearly labelled
      let h1 = 0x811c9dc5, out = "";
      for (let r = 0; r < 8; r++) { for (let i = 0; i < buf.length; i++) { h1 ^= buf[i] + r; h1 = Math.imul(h1, 16777619) >>> 0; } out += h1.toString(16).padStart(8, "0"); }
      return out;
    }
  }

  /* ---------- Mesh geometry (12 nodes, 30 links, deterministic) ---------- */
  const MESH = (function () {
    const pts = [[80, 70], [200, 40], [330, 60], [460, 45], [560, 110], [120, 170], [250, 150], [390, 160], [520, 210], [70, 260], [220, 255], [400, 265]];
    const nodes = pts.map((p, i) => ({ x: p[0], y: p[1], c: i % 5 }));
    const pairs = [];
    for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
      pairs.push({ a: i, b: j, d: Math.hypot(dx, dy) });
    }
    pairs.sort((p, q) => p.d - q.d);
    return { nodes, links: pairs.slice(0, 30) };
  })();

  /* ---------- Renderers ---------- */
  function renderSteps() {
    return EH.steps.map((s, i) => {
      let cls = "eh-step";
      if (ST.blocked != null && i === ST.blocked) cls += " blocked";
      else if (i < ST.step || (i === ST.step && !ST.running)) cls += " done";
      else if (i === ST.step && ST.running) cls += " active";
      return `<div class="${cls}"><span class="eh-step-k mono">${String(i + 1).padStart(2, "0")} · ${s.k}</span><strong>${esc(s.t)}</strong><span class="eh-step-d">${esc(s.d)}</span><span class="eh-step-bar"></span></div>`;
    }).join('<div class="eh-step-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>');
  }

  function renderCascade() {
    return EH.layers.map((L, i) => {
      let cls = "eh-layer";
      if (ST.blocked != null && i === ST.cascade) cls += " blocked";
      else if (i < ST.cascade || (i === ST.cascade && !ST.running && ST.step >= 4)) cls += " done";
      else if (i === ST.cascade && ST.running) cls += " active";
      return `<div class="${cls}" style="--i:${i}" data-tt-id="${L.id}" data-tt-prov="ELITEHUB.AI · GOVERNANCE FRAMEWORK" data-tt-title="${L.id} · ${esc(L.name)}" data-tt-desc="${esc(L.desc)}" data-tt-m1="Role|${L.role}" data-tt-m2="Step|${String(i + 1).padStart(2, "0")} / 07 · ${L.verb}">
        <span class="eh-layer-id mono">${L.id}</span>
        <span class="eh-layer-main"><strong>${esc(L.name)}</strong><em>${L.verb}</em></span>
        <span class="eh-layer-role mono">${L.role}</span>
      </div>`;
    }).join("");
  }

  function renderReceipts() {
    if (!ST.receipts.length) return `<div class="eh-empty"><svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true"><rect x="10" y="6" width="28" height="36" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16h16M16 23h16M16 30h10" stroke="currentColor" stroke-width="2"/></svg><p>No sealed receipts yet.</p><span>Pick a procedure, tick the human confirmation gate, then run it. Each receipt is chained to the one before.</span></div>`;
    return ST.receipts.slice(0, 10).map((r, i) => `
      <div class="eh-receipt ${r.ok ? "ok" : "deny"} ${i === 0 ? "fresh" : ""}">
        <div class="eh-r-top mono"><span>${esc(r.id)}</span><span>${esc(r.ts.replace("T", " ").slice(0, 19))} UTC</span></div>
        <div class="eh-r-name">${esc(r.name)}</div>
        <div class="eh-r-src mono">${esc(r.src)} · ${esc(r.engine || "")}</div>
        ${r.ok ? `<div class="eh-r-hash mono" title="${esc(r.hash)}">SHA-256 ${esc(r.hash.slice(0, 24))}…${esc(r.hash.slice(-6))}</div>
        <div class="eh-r-prev mono">prev ${r.prev ? esc(r.prev.slice(0, 12)) + "…" : "genesis"}</div>`
        : `<div class="eh-r-hash mono">DENIED · ${esc(r.reason)}</div>`}
      </div>`).join("");
  }

  function renderMesh() {
    const hl = ST.meshClass;
    const links = MESH.links.map((l, i) => {
      const a = MESH.nodes[l.a], b = MESH.nodes[l.b];
      const on = hl < 0 || a.c === hl || b.c === hl;
      return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="mesh-link ${on ? "" : "dim"}"/>` +
        (on && i % 3 === 0 ? `<circle r="2.6" class="mesh-packet"><animateMotion dur="${(2.2 + (i % 5) * 0.6).toFixed(1)}s" repeatCount="indefinite" path="M${a.x},${a.y} L${b.x},${b.y}"/></circle>` : "");
    }).join("");
    const nodes = MESH.nodes.map((n, i) => {
      const c = EH.classes[n.c];
      const on = hl < 0 || n.c === hl;
      return `<g class="mesh-node ${on ? "" : "dim"}" data-tt-id="NODE-${String(i + 1).padStart(2, "0")}" data-tt-prov="DEPLOYMENT MESH (ILLUSTRATIVE)" data-tt-title="${c.id} · ${c.name} node" data-tt-desc="Illustrative layout of the 12-node, 30-link deployment mesh shown on elitehub.ai." data-tt-m1="Class|${c.name}" data-tt-m2="Links|${MESH.links.filter((l) => l.a === i || l.b === i).length}">
        <circle cx="${n.x}" cy="${n.y}" r="14" fill="${c.color}" opacity="0.12"><animate attributeName="r" values="10;17;10" dur="${3 + (i % 4) * 0.5}s" repeatCount="indefinite"/></circle>
        <circle cx="${n.x}" cy="${n.y}" r="6.5" fill="${c.color}" stroke="#050811" stroke-width="2"/>
        <text x="${n.x}" y="${n.y - 13}" text-anchor="middle" class="mesh-label">${c.id}</text>
      </g>`;
    }).join("");
    return `<svg class="eh-mesh-svg" viewBox="0 0 630 300" role="img" aria-label="Deployment mesh with 12 nodes and 30 links">${links}${nodes}</svg>`;
  }

  function renderNotary() {
    const N = ST.notary;
    const r = N.result;
    return `
      <div class="eh-notary">
        <div class="eh-notary-in">
          <label class="eh-field"><span>Asset name</span><input type="text" data-eh-input="name" value="${esc(N.name)}" placeholder="e.g. Race Pulse model v3" maxlength="80"/></label>
          <label class="eh-field"><span>Asset type</span>
            <select data-eh-action="ntype">${["Model weights", "Dataset", "Source code", "Contract", "Research brief", "Capture file"].map((t) => `<option ${t === N.type ? "selected" : ""}>${t}</option>`).join("")}</select></label>
          <label class="eh-field eh-wide"><span>Paste content to seal</span><textarea data-eh-input="text" rows="4" placeholder="Paste text, a config, a bet slip or any record…">${esc(N.text)}</textarea></label>
          <div class="eh-notary-actions">
            <label class="eh-file"><input type="file" data-eh-action="file"/><span>${N.fileName ? "File: " + esc(N.fileName) : "…or choose a file"}</span></label>
            <button type="button" class="eh-cta" data-eh-action="seal" ${N.busy ? "disabled" : ""}>${N.busy ? "Hashing…" : "Seal evidence"}</button>
          </div>
          <p class="eh-note">Hashing happens on this device. Nothing is uploaded or anchored to a blockchain in this demo.</p>
        </div>
        <div class="eh-cert ${r ? "on" : ""}">
          ${r ? `
            <div class="eh-cert-seal" aria-hidden="true"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="40" cy="40" r="26" fill="none" stroke="currentColor" stroke-width="2"/><path d="M28 41l8 8 16-18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg></div>
            <span class="eh-cert-k mono">CERTIFIED RECORD · LOCAL DEMO</span>
            <h4>${esc(r.name)}</h4>
            <dl>
              <dt>Type</dt><dd>${esc(r.type)}</dd>
              <dt>Source</dt><dd>${esc(r.src)}</dd>
              <dt>Size</dt><dd class="mono">${r.bytes.toLocaleString()} bytes</dd>
              <dt>Timestamp</dt><dd class="mono">${esc(r.ts)}</dd>
              <dt>Anchor</dt><dd>Not anchored (demo)</dd>
            </dl>
            <div class="eh-cert-hash mono">${esc(r.hash)}</div>
            <button type="button" class="reset-card-btn" data-eh-action="copy">Copy hash</button>`
          : `
            <span class="eh-cert-k mono">PUBLIC EXAMPLE · ELITEHUB.AI</span>
            <h4>${esc(EH.evidence.asset)}</h4>
            <dl>
              <dt>Type</dt><dd>${esc(EH.evidence.type)}</dd>
              <dt>Timestamp</dt><dd class="mono">${EH.evidence.ts}</dd>
              <dt>Block</dt><dd class="mono">${EH.evidence.block}</dd>
            </dl>
            <div class="eh-cert-hash mono">${EH.evidence.hash}</div>
            <p class="eh-note">Seal your own content on the left to generate a matching certificate.</p>`}
        </div>
      </div>`;
  }

  function renderPipeline() {
    const p = EH.pipeline[ST.pipe];
    return `
      <div class="eh-pipe">
        ${EH.pipeline.map((s, i) => `<button type="button" class="eh-pipe-step ${i === ST.pipe ? "on" : ""} ${i < ST.pipe ? "past" : ""}" data-eh-action="pipe" data-i="${i}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${s.k}</button>`).join("")}
      </div>
      <div class="eh-pipe-detail"><span class="eh-tag">${esc(p.tool)}</span><p><strong>${esc(p.k)}.</strong> ${esc(p.d)}</p></div>`;
  }

  function renderSection(q) {
    const hay = "elite ai hub elitehub sovereign governance trust fabric command center omni gate inference vertical os evidence notary mesh deployment project 444 perplexity computer workspace";
    if (q && !hay.includes(q)) return "";
    const mod = EH.modules[ST.mod];
    const proc = EH.procedures[ST.procIdx];
    const lens = EH.lenses[ST.lens];
    return `
    <section class="domain-section eh-section" id="section-elite-hub">
      <div class="eh-hero">
        <div class="eh-hero-copy">
          <span class="domain-code">DELIVERABLE 07 // ELITE AI HUB — SOVEREIGN GOVERNANCE &amp; TRUST LAYER</span>
          <h2 class="eh-hero-title">Nothing in the Nexus runs <span class="grad">ungoverned.</span></h2>
          <p class="eh-hero-sub">${esc(EH.tagline)} Every Nexus action passes Elite AI Hub's seven-layer authority cascade — from constitutional rules to sealed evidence — before it touches the real world. Figures come from the public <a href="${EH.url}" target="_blank" rel="noopener">elitehub.ai</a> site.</p>
          <div class="eh-lens" role="tablist" aria-label="Visitor lens">
            ${EH.lenses.map((l, i) => `<button type="button" role="tab" aria-selected="${i === ST.lens}" class="eh-lens-btn ${i === ST.lens ? "on" : ""}" data-eh-action="lens" data-i="${i}">${l.k}</button>`).join("")}
          </div>
          <div class="eh-lens-body" data-key="lens-${ST.lens}">
            <h3>${esc(lens.head)}</h3>
            <ul>${lens.pts.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          </div>
          <div class="eh-hero-ctas">
            <button type="button" class="eh-cta" data-eh-action="jump" data-target="eh-gate">Run a governed procedure</button>
            <a class="eh-ghost" href="${EH.url}" target="_blank" rel="noopener">Visit elitehub.ai ↗</a>
            <a class="eh-ghost" href="${EH.app}" target="_blank" rel="noopener">Institutional sign-in ↗</a>
          </div>
        </div>
        <div class="eh-sigil" aria-hidden="true">
          <svg viewBox="0 0 400 400">
            <defs>
              <radialGradient id="ehCore" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#a855f7" stop-opacity=".55"/><stop offset="1" stop-color="#a855f7" stop-opacity="0"/></radialGradient>
              <linearGradient id="ehRing" x1="0" x2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#a855f7"/></linearGradient>
            </defs>
            <circle cx="200" cy="200" r="190" fill="url(#ehCore)"/>
            ${EH.layers.map((L, i) => { const r = 168 - i * 20; return `<g class="sig-ring" style="--d:${40 + i * 9}s;--dir:${i % 2 ? -1 : 1}"><circle cx="200" cy="200" r="${r}" fill="none" stroke="url(#ehRing)" stroke-opacity="${0.18 + i * 0.07}" stroke-width="${i === 0 ? 2 : 1.2}" stroke-dasharray="${2 + i} ${6 + i * 2}"/><text class="sig-t"><textPath href="#sigp${i}" startOffset="${(i * 13) % 100}%">${L.id} · ${L.name.toUpperCase()}</textPath></text><path id="sigp${i}" d="M ${200 - r},200 a ${r},${r} 0 1,1 ${2 * r},0 a ${r},${r} 0 1,1 ${-2 * r},0" fill="none"/></g>`; }).join("")}
            <g class="sig-core"><polygon points="200,150 243,175 243,225 200,250 157,225 157,175" fill="rgba(10,16,29,.9)" stroke="#a855f7" stroke-width="2"/>
            <text x="200" y="196" text-anchor="middle" class="sig-core-t">OMNI</text><text x="200" y="216" text-anchor="middle" class="sig-core-n">Ω</text></g>
          </svg>
        </div>
      </div>

      <div class="eh-stats">
        ${EH.stats.map((s) => `<div class="eh-stat"><span class="eh-stat-v mono" data-count="${s.n}" data-suffix="${s.s}">${s.n.toLocaleString()}${s.s}</span><span class="eh-stat-l">${s.l}</span><span class="eh-stat-sub">${s.sub}</span></div>`).join("")}
      </div>

      <div class="eh-grid">
        <div class="eh-card eh-span2" id="eh-gate" data-key="gate">
          <div class="eh-card-h"><span class="eh-tag">CMD-CENTER</span><h3>Governed execution gate</h3><span class="eh-live mono"><i></i>${ST.running ? "EXECUTING…" : "COMMAND // ONLINE"}</span></div>
          <div class="eh-controls">
            <label class="eh-field"><span>Procedure</span>
              <select data-eh-action="proc">${EH.procedures.map((p, i) => `<option value="${i}" ${i === ST.procIdx ? "selected" : ""}>${p.id} · ${esc(p.name)}</option>`).join("")}</select>
            </label>
            <label class="eh-field"><span>Jurisdiction</span>
              <select data-eh-action="jur">${["AU", "US", "EU", "UK", "UAE"].map((j) => `<option ${j === ST.jurisdiction ? "selected" : ""}>${j}</option>`).join("")}</select>
            </label>
            <label class="eh-check"><input type="checkbox" data-eh-action="confirm" ${ST.humanConfirm ? "checked" : ""}/><span class="eh-switch" aria-hidden="true"></span> Human confirmation gate</label>
            <button type="button" class="eh-cta" data-eh-action="run" ${ST.running ? "disabled" : ""}>Run governed procedure</button>
          </div>
          <div class="eh-proc-meta mono">Source ${esc(proc.src)} · Engine ${esc(proc.engine)} · Risk <span class="risk-${proc.risk}">${proc.risk.toUpperCase()}</span> · High-risk procedures need the human gate</div>
          <div class="eh-steps" id="eh-steps">${renderSteps()}</div>
        </div>

        <div class="eh-card" data-key="receipts">
          <div class="eh-card-h"><span class="eh-tag">AUDIT</span><h3>Sealed audit receipts</h3><span class="eh-count mono" id="eh-rcount">${ST.receipts.length}</span><button type="button" class="reset-card-btn" data-eh-action="clear">Clear</button></div>
          <div class="eh-receipts" id="eh-receipts">${renderReceipts()}</div>
        </div>

        <div class="eh-card" data-key="cascade">
          <div class="eh-card-h"><span class="eh-tag">L01–L07</span><h3>Authority cascade</h3></div>
          <p class="eh-card-sub">Seven governance layers, from Governs to Delivers. Watch authority flow down when you run a procedure.</p>
          <div class="eh-cascade" id="eh-cascade">${renderCascade()}</div>
        </div>

        <div class="eh-card eh-span2" data-key="mesh">
          <div class="eh-card-h"><span class="eh-tag">MESH</span><h3>Deployment mesh · 12 nodes · 30 links</h3></div>
          <div class="eh-mesh-legend">
            <button type="button" class="eh-chip ${ST.meshClass < 0 ? "on" : ""}" data-eh-action="mesh" data-i="-1">All classes</button>
            ${EH.classes.map((c, i) => `<button type="button" class="eh-chip ${ST.meshClass === i ? "on" : ""}" data-eh-action="mesh" data-i="${i}"><i style="background:${c.color}"></i>${c.id} · ${c.name}</button>`).join("")}
          </div>
          <div class="eh-mesh">${renderMesh()}</div>
          <p class="eh-note">Layout is illustrative; the node and link counts and the five deployment classes match the elitehub.ai mesh display. "Operational reach is a property of the architecture, not a configuration option."</p>
        </div>

        <div class="eh-card eh-span2" data-key="notary">
          <div class="eh-card-h"><span class="eh-tag">TRUST FABRIC</span><h3>Evidence notary</h3></div>
          <div id="eh-notary">${renderNotary()}</div>
        </div>

        <div class="eh-card" data-key="modules">
          <div class="eh-card-h"><span class="eh-tag">PLANES</span><h3>Architecture modules</h3></div>
          <div class="eh-planes">
            ${EH.modules.map((p, i) => `<button type="button" class="eh-plane c-${p.color} ${i === ST.mod ? "on" : ""}" data-eh-action="mod" data-i="${i}"><span class="mono">${p.id}</span>${esc(p.name)}</button>`).join("")}
          </div>
          <div class="eh-plane-detail c-${mod.color}"><strong>${esc(mod.name)}</strong><p>${esc(mod.desc)}</p></div>
        </div>

        <div class="eh-card eh-span2" data-key="pipeline">
          <div class="eh-card-h"><span class="eh-tag">INNOVATION</span><h3>Sovereign innovation pipeline</h3></div>
          <div id="eh-pipeline">${renderPipeline()}</div>
        </div>

        <div class="eh-card" data-key="stacks">
          <div class="eh-card-h"><span class="eh-tag">STACKS</span><h3>8 infrastructure stacks</h3></div>
          <div class="eh-stacks">${EH.stacks.map((s, i) => `<div class="eh-stack" style="--i:${i}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${s}</div>`).join("")}</div>
        </div>

        <div class="eh-card" data-key="vos">
          <div class="eh-card-h"><span class="eh-tag">VOS</span><h3>Vertical OS by domain</h3></div>
          <div class="eh-bars">${EH.domains.map(([n, v], i) => `
            <button type="button" class="eh-bar ${ST.highlightDomain === i ? "on" : ""}" data-eh-action="domain" data-i="${i}"
              data-tt-id="VOS-${String(i + 1).padStart(2, "0")}" data-tt-prov="ELITEHUB.AI PUBLIC" data-tt-title="${esc(n)}"
              data-tt-desc="Vertical Operating Systems listed in the Elite AI Hub Ecosystem Explorer for this domain." data-tt-m1="VOS count|${v}" data-tt-m2="Share of 280|${(v / 280 * 100).toFixed(1)}%">
              <span class="eh-bar-l">${esc(n)}</span>
              <span class="eh-bar-track"><span class="eh-bar-fill" style="--w:${(v / 38 * 100).toFixed(1)}%"></span></span>
              <span class="eh-bar-v mono">${v}</span>
            </button>`).join("")}</div>
        </div>

        <div class="eh-card eh-span2" data-key="tiers">
          <div class="eh-card-h"><span class="eh-tag">TIERS</span><h3>Deployment tiers</h3></div>
          <div class="eh-tiers">
            ${EH.tiers.map((t, i) => `<div class="eh-tier ${i === 2 ? "feat" : ""}"><div class="eh-tier-h"><strong>${t.name}</strong><span class="mono">${t.price}</span></div><ul>${t.feats.map((f) => `<li>${f}</li>`).join("")}</ul></div>`).join("")}
          </div>
          <p class="eh-note">Pricing is set after institutional qualification. SOC 2 Type II, ISO 27001 and HIPAA BAA are listed as available.</p>
        </div>
      </div>
    </section>

    <section class="domain-section p444-section" id="section-project-444">
      <div class="domain-banner">
        <div class="domain-banner-left">
          <span class="domain-code">DELIVERABLE 08 // PERPLEXITY COMPUTER WORKSPACE NODE</span>
          <h2 class="domain-heading">08 · Project 444 — The Workspace Behind the Nexus</h2>
          <p class="domain-desc">${esc(P444.desc)} Click any node to jump to the part of the Nexus it powers. The project page is private and opens only for signed-in members.</p>
        </div>
        <div class="domain-banner-right">
          <span class="source-pill">Private · members only</span>
          <a class="mode-btn" href="${P444.url}" target="_blank" rel="noopener">Open Project 444 ↗</a>
        </div>
      </div>
      <div class="p444-wrap">
        <svg class="p444-map" viewBox="0 0 600 340" role="img" aria-label="Project 444 links every Nexus artifact">
          <defs><radialGradient id="p444g"><stop offset="0" stop-color="#a855f7" stop-opacity=".45"/><stop offset="1" stop-color="#a855f7" stop-opacity="0"/></radialGradient></defs>
          <circle cx="300" cy="170" r="150" fill="url(#p444g)"/>
          <ellipse cx="300" cy="170" rx="240" ry="130" class="p444-orbit"/>
          <ellipse cx="300" cy="170" rx="160" ry="86" class="p444-orbit o2"/>
          ${P444.nodes.map((nd, i) => {
            const a = (i / P444.nodes.length) * Math.PI * 2 - Math.PI / 2;
            const x = 300 + Math.cos(a) * 240, y = 170 + Math.sin(a) * 130;
            return `<line x1="300" y1="170" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="p444-link"/>
              <circle r="2.4" class="p444-pulse"><animateMotion dur="${2.4 + (i % 4) * 0.5}s" begin="${(i * 0.3).toFixed(1)}s" repeatCount="indefinite" path="M300,170 L${x.toFixed(1)},${y.toFixed(1)}"/></circle>
              <g class="p444-node" tabindex="0" role="button" data-eh-action="p444" data-i="${i}" data-tt-id="${nd.t}" data-tt-prov="PROJECT 444 ARTIFACT" data-tt-title="${esc(nd.n)}" data-tt-desc="${esc(nd.d)}" data-tt-m1="Type|${nd.t}" data-tt-m2="Opens|${nd.href ? "External link" : "Nexus section"}">
                <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" class="p444-halo t-${nd.t}"/>
                <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6.5" class="p444-dot t-${nd.t}"/>
              </g>`;
          }).join("")}
          <circle cx="300" cy="170" r="46" class="p444-core"/>
          <circle cx="300" cy="170" r="56" class="p444-core-ring"/>
          <text x="300" y="164" text-anchor="middle" class="p444-core-t">PROJECT</text>
          <text x="300" y="188" text-anchor="middle" class="p444-core-n">444</text>
        </svg>
        <div class="p444-list">
          ${P444.nodes.map((nd, i) => `<button type="button" class="p444-item" data-eh-action="p444" data-i="${i}"><span class="p444-type t-${nd.t} mono">${nd.t}</span><span class="p444-n">${esc(nd.n)}</span><span class="p444-go">${nd.href ? "↗" : "→"}</span></button>`).join("")}
        </div>
      </div>
    </section>`;
  }

  /* ---------- Live updates ---------- */
  function refreshLive() {
    const s = document.getElementById("eh-steps"); if (s) s.innerHTML = renderSteps();
    const c = document.getElementById("eh-cascade"); if (c) c.innerHTML = renderCascade();
    const r = document.getElementById("eh-receipts"); if (r) r.innerHTML = renderReceipts();
    const rc = document.getElementById("eh-rcount"); if (rc) rc.textContent = ST.receipts.length;
    const live = document.querySelector("#section-elite-hub .eh-live"); if (live) live.innerHTML = `<i></i>${ST.running ? "EXECUTING…" : "COMMAND // ONLINE"}`;
    const btn = document.querySelector('[data-eh-action="run"]'); if (btn) btn.disabled = ST.running;
  }
  function refreshNotary() { const n = document.getElementById("eh-notary"); if (n) n.innerHTML = renderNotary(); }

  function rerender() {
    const sec = document.getElementById("section-elite-hub");
    if (!sec) return;
    const y = window.scrollY;
    const holder = document.createElement("div");
    holder.innerHTML = renderSection("");
    const [a, b] = holder.querySelectorAll("section");
    const p = document.getElementById("section-project-444");
    sec.replaceWith(a); if (p && b) p.replaceWith(b);
    window.scrollTo(0, y);
    document.dispatchEvent(new CustomEvent("nexus:rendered"));
  }

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  async function run() {
    if (ST.running) return;
    const proc = EH.procedures[ST.procIdx];
    ST.running = true; ST.blocked = null; ST.step = 0; ST.cascade = 0; refreshLive();
    await wait(420); ST.cascade = 1; refreshLive(); await wait(420);
    ST.step = 1; ST.cascade = 2; refreshLive(); await wait(560);
    const ts = new Date().toISOString();
    if (proc.risk === "high" && !ST.humanConfirm) {
      ST.blocked = 1; ST.cascade = 1; ST.running = false;
      ST.receipts.unshift({ id: proc.id + " · " + ST.jurisdiction, ts, name: proc.name, src: proc.src, engine: proc.engine, ok: false, reason: "human confirmation required for high-risk procedure" });
      refreshLive(); toast("Blocked at Omni Gate — high-risk procedure needs a human sign-off", "deny"); return;
    }
    ST.cascade = 3; refreshLive(); await wait(380);
    ST.step = 2; ST.cascade = 4; refreshLive(); await wait(620);
    ST.step = 3; ST.cascade = 5; refreshLive();
    const prev = (ST.receipts.find((r) => r.ok) || {}).hash || null;
    const hash = await sha256(JSON.stringify({ proc: proc.id, name: proc.name, ts, jur: ST.jurisdiction, confirm: ST.humanConfirm, prev }));
    await wait(420); ST.cascade = 6; refreshLive(); await wait(360);
    ST.receipts.unshift({ id: proc.id + " · " + ST.jurisdiction, ts, name: proc.name, src: proc.src, engine: proc.engine, ok: true, hash, prev });
    ST.step = 4; ST.cascade = 7; ST.running = false; refreshLive();
    toast("Receipt sealed · SHA-256 " + hash.slice(0, 12) + "…", "ok");
  }

  async function seal() {
    const N = ST.notary;
    if (N.busy) return;
    let data, src, bytes;
    if (N.file) { data = await N.file.arrayBuffer(); src = "File · " + N.fileName; bytes = data.byteLength; data = new Uint8Array(data); }
    else if (N.text.trim()) { data = new TextEncoder().encode(N.text); src = "Pasted text"; bytes = data.length; }
    else { toast("Paste some content or choose a file to seal", "deny"); return; }
    N.busy = true; refreshNotary();
    const hash = await sha256(data);
    await wait(500);
    N.result = { name: N.name.trim() || (N.fileName || "Untitled record"), type: N.type, src, bytes, ts: new Date().toISOString(), hash };
    N.busy = false; refreshNotary();
    toast("Evidence sealed locally · " + hash.slice(0, 12) + "…", "ok");
  }

  function jumpTo(sel) {
    const el = document.querySelector(sel);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    const all = document.querySelector('.domain-tab[data-domain="all"]');
    if (all) { all.click(); setTimeout(() => { const e2 = document.querySelector(sel); if (e2) e2.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80); }
  }

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-eh-action]");
    if (!el) return;
    const a = el.getAttribute("data-eh-action");
    const i = +el.getAttribute("data-i");
    if (a === "run") run();
    else if (a === "clear") { ST.receipts = []; ST.step = -1; ST.cascade = -1; ST.blocked = null; refreshLive(); }
    else if (a === "mod") { ST.mod = i; rerender(); }
    else if (a === "lens") { ST.lens = i; rerender(); }
    else if (a === "mesh") { ST.meshClass = i; rerender(); }
    else if (a === "pipe") { ST.pipe = i; const p = document.getElementById("eh-pipeline"); if (p) p.innerHTML = renderPipeline(); }
    else if (a === "domain") { ST.highlightDomain = ST.highlightDomain === i ? -1 : i; rerender(); }
    else if (a === "seal") seal();
    else if (a === "copy") {
      const h = ST.notary.result && ST.notary.result.hash;
      if (h && navigator.clipboard) navigator.clipboard.writeText(h).then(() => toast("Hash copied", "ok"), () => toast("Copy blocked — select the hash manually", "deny"));
    }
    else if (a === "jump") { const t = document.getElementById(el.getAttribute("data-target")); if (t) t.scrollIntoView({ behavior: "smooth", block: "center" }); }
    else if (a === "p444") {
      const nd = P444.nodes[i];
      if (nd.href) window.open(nd.href, "_blank", "noopener");
      else jumpTo(nd.go);
    }
  });
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("g.p444-node")) { e.preventDefault(); e.target.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
  });
  document.addEventListener("change", (e) => {
    const el = e.target.closest("[data-eh-action]");
    if (!el) return;
    const a = el.getAttribute("data-eh-action");
    if (a === "proc") { ST.procIdx = +el.value; ST.step = -1; ST.cascade = -1; ST.blocked = null; rerender(); }
    else if (a === "jur") ST.jurisdiction = el.value;
    else if (a === "confirm") ST.humanConfirm = el.checked;
    else if (a === "ntype") ST.notary.type = el.value;
    else if (a === "file") { const f = el.files && el.files[0]; ST.notary.file = f || null; ST.notary.fileName = f ? f.name : ""; refreshNotary(); }
  });
  document.addEventListener("input", (e) => {
    const k = e.target.getAttribute && e.target.getAttribute("data-eh-input");
    if (k) ST.notary[k] = e.target.value;
  });

  window.NEXUS_ELITEHUB = {
    renderSection,
    run: () => { jumpTo("#section-elite-hub"); setTimeout(run, 500); },
    jumpTo
  };
})();
