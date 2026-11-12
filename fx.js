/* THE NEXUS // Experience layer
   Boot sequence · particle-network background · hero orbit · live ticker · section rail
   command palette (Ctrl/Cmd+K) · scroll reveals · cursor spotlight · count-ups · toasts */
(function () {
  "use strict";
  const RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  document.documentElement.classList.add("fx");

  const SECTIONS = [
    { id: "nexus-hero", label: "Overview", code: "00" },
    { id: "section-horse-hub", label: "Race Pulse", code: "01", dom: "horse-hub" },
    { id: "section-network-capture", label: "Capture Grid", code: "02", dom: "network-capture" },
    { id: "section-meta-brief", label: "Meta Brief", code: "03", dom: "meta-brief" },
    { id: "section-bot-canvas", label: "Bot Fleet", code: "04", dom: "bot-canvas" },
    { id: "section-asset-vault", label: "Asset Vault", code: "05", dom: "asset-vault" },
    { id: "section-system-options", label: "Deploy Hub", code: "06", dom: "system-options" },
    { id: "section-elite-hub", label: "Elite AI Hub", code: "07", dom: "elite-hub" },
    { id: "section-project-444", label: "Project 444", code: "08", dom: "elite-hub" }
  ];

  /* ---------------- Toasts ---------------- */
  const toastWrap = document.createElement("div");
  toastWrap.className = "fx-toasts"; toastWrap.setAttribute("aria-live", "polite");
  document.body.appendChild(toastWrap);
  window.nexusToast = function (msg, kind) {
    const t = document.createElement("div");
    t.className = "fx-toast " + (kind || "info");
    t.innerHTML = `<i></i><span></span>`; t.querySelector("span").textContent = msg;
    toastWrap.appendChild(t);
    requestAnimationFrame(() => t.classList.add("in"));
    setTimeout(() => { t.classList.remove("in"); setTimeout(() => t.remove(), 400); }, 3600);
  };

  /* ---------------- Navigation helper ---------------- */
  function go(id) {
    const s = SECTIONS.find((x) => x.id === id);
    const scroll = () => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" }); };
    if (document.getElementById(id)) return scroll();
    const all = $('.domain-tab[data-domain="all"]');
    if (all) all.click();
    setTimeout(scroll, 60);
  }
  window.nexusGo = go;

  /* ---------------- Boot sequence ---------------- */
  (function boot() {
    if (RM) return;
    const lines = [
      "NEXUS CORE · EPOCH 2500.11 · cold start",
      "Linking 8 domains · 20 visuals · 39 assets",
      "Race Pulse 60fps · Capture Grid 60,000/60,000 pkts",
      "Elite AI Hub gate · L01 Omni Omega → L07 Deployment",
      "Trust Fabric online · receipts chained · SHA-256",
      "ALL SYSTEMS NOMINAL"
    ];
    const el = document.createElement("div");
    el.className = "fx-boot"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Nexus start-up");
    el.innerHTML = `
      <div class="fx-boot-inner">
        <svg class="fx-boot-mark" viewBox="0 0 120 120" aria-hidden="true">
          <polygon points="60 8 106 34 106 86 60 112 14 86 14 34" class="b1"/>
          <polyline points="106 34 60 60 14 34" class="b2"/><line x1="60" y1="60" x2="60" y2="112" class="b2"/>
          <circle cx="60" cy="60" r="5" class="b3"/>
        </svg>
        <div class="fx-boot-title">THE NEXUS</div>
        <div class="fx-boot-lines mono"></div>
        <div class="fx-boot-bar"><span></span></div>
        <button type="button" class="fx-boot-skip">Enter the Nexus →</button>
      </div>`;
    document.body.appendChild(el);
    document.body.classList.add("fx-booting");
    const box = $(".fx-boot-lines", el);
    let done = false;
    lines.forEach((l, i) => setTimeout(() => {
      if (done) return;
      const d = document.createElement("div"); d.textContent = "› " + l; if (i === lines.length - 1) d.className = "ok"; box.appendChild(d);
    }, 220 + i * 330));
    const close = () => {
      if (done) return; done = true;
      el.classList.add("out"); document.body.classList.remove("fx-booting");
      setTimeout(() => el.remove(), 700);
      window.removeEventListener("keydown", close);
    };
    $(".fx-boot-skip", el).addEventListener("click", close);
    el.addEventListener("click", (e) => { if (e.target === el) close(); });
    window.addEventListener("keydown", close);
    setTimeout(close, 2900);
  })();

  /* ---------------- Scroll progress ---------------- */
  const prog = document.createElement("div"); prog.className = "fx-progress"; document.body.appendChild(prog);
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Particle network background ---------------- */
  (function bg() {
    const c = document.createElement("canvas");
    c.className = "fx-bg"; c.setAttribute("aria-hidden", "true");
    document.body.prepend(c);
    const ctx = c.getContext("2d");
    let W, H, DPR, pts = [], mouse = { x: -9999, y: -9999 };
    function size() {
      DPR = Math.min(2, devicePixelRatio || 1);
      W = c.width = innerWidth * DPR; H = c.height = innerHeight * DPR;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      const n = Math.round(Math.min(110, (innerWidth * innerHeight) / 15000));
      pts = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25 * DPR, vy: (Math.random() - 0.5) * 0.25 * DPR,
        r: (Math.random() * 1.4 + 0.6) * DPR, v: i % 7 === 0
      }));
    }
    size(); addEventListener("resize", size);
    addEventListener("mousemove", (e) => { mouse.x = e.clientX * DPR; mouse.y = e.clientY * DPR; }, { passive: true });
    const LINK = 130;
    function frame() {
      const light = document.documentElement.getAttribute("data-theme") === "light";
      ctx.clearRect(0, 0, W, H);
      const a = light ? 0.35 : 1;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!RM) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const mdx = mouse.x - p.x, mdy = mouse.y - p.y, md = Math.hypot(mdx, mdy);
        if (md < 180 * DPR && !RM) { p.x += mdx * 0.0025; p.y += mdy * 0.0025; }
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
          if (d < LINK * DPR) {
            ctx.strokeStyle = `rgba(56,189,248,${(1 - d / (LINK * DPR)) * 0.16 * a})`;
            ctx.lineWidth = DPR * 0.7;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = p.v ? `rgba(168,85,247,${0.75 * a})` : `rgba(34,211,238,${0.55 * a})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!RM && !document.hidden) requestAnimationFrame(frame); else if (!RM) setTimeout(() => requestAnimationFrame(frame), 500);
    }
    frame();
  })();

  /* ---------------- Hero orbit ---------------- */
  (function hero() {
    const svg = $("#hero-orbit");
    if (!svg) return;
    const nodes = SECTIONS.slice(1);
    const colors = ["#22d3ee", "#10b981", "#38bdf8", "#f59e0b", "#f43f5e", "#64748b", "#a855f7", "#c084fc"];
    const g = svg.querySelector("#orbit-nodes");
    g.innerHTML = nodes.map((n, i) => `
      <g class="orb-node" data-go="${n.id}" tabindex="0" role="button" aria-label="Jump to ${n.label}"
         data-tt-id="DOM-${n.code}" data-tt-prov="NEXUS DOMAIN" data-tt-title="${n.code} · ${n.label}" data-tt-desc="Click to jump straight to this domain." data-tt-m1="Domain|${n.code}" data-tt-m2="Action|Jump">
        <circle r="22" class="orb-halo" style="fill:${colors[i]}"/>
        <circle r="9" class="orb-dot" style="fill:${colors[i]}"/>
        <text y="-16" text-anchor="middle" class="orb-code">${n.code}</text>
        <text y="38" text-anchor="middle" class="orb-label">${n.label}</text>
      </g>`).join("");
    const els = $$(".orb-node", g);
    const lines = svg.querySelector("#orbit-lines");
    let t0 = performance.now(), paused = false;
    svg.addEventListener("mouseenter", () => (paused = true));
    svg.addEventListener("mouseleave", () => (paused = false));
    let ang = 0;
    function place() {
      const now = performance.now(); if (!paused && !RM) ang += (now - t0) * 0.00005; t0 = now;
      let lh = "";
      els.forEach((el, i) => {
        const a = ang + (i / els.length) * Math.PI * 2;
        const x = 300 + Math.cos(a) * 230, y = 300 + Math.sin(a) * 230 * 0.62;
        el.setAttribute("transform", `translate(${x.toFixed(1)},${y.toFixed(1)})`);
        el.style.opacity = (0.55 + 0.45 * ((Math.sin(a) + 1) / 2)).toFixed(2);
        lh += `<line x1="300" y1="300" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`;
      });
      lines.innerHTML = lh;
      if (!RM) requestAnimationFrame(place);
    }
    place();
    svg.addEventListener("click", (e) => { const n = e.target.closest(".orb-node"); if (n) go(n.getAttribute("data-go")); });
    svg.addEventListener("keydown", (e) => { const n = e.target.closest(".orb-node"); if (n && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); go(n.getAttribute("data-go")); } });

    $$("[data-hero-go]").forEach((b) => b.addEventListener("click", () => go(b.getAttribute("data-hero-go"))));
    const pal = $("[data-hero-palette]"); if (pal) pal.addEventListener("click", () => openPalette());
    const gate = $("[data-hero-gate]"); if (gate) gate.addEventListener("click", () => { go("section-elite-hub"); setTimeout(() => { const g2 = document.getElementById("eh-gate"); if (g2) g2.scrollIntoView({ behavior: "smooth", block: "center" }); }, 500); });
  })();

  // Hero only on "All"
  function syncHero() {
    const active = $(".domain-tab.active");
    const dom = active ? active.getAttribute("data-domain") : "all";
    const h = $("#nexus-hero"); if (h) h.hidden = dom !== "all";
  }

  /* ---------------- Count-ups ---------------- */
  const counted = new WeakSet(), countedKeys = new Set();
  function countUp(el) {
    if (counted.has(el)) return; counted.add(el);
    const ck = el.getAttribute("data-count") + "|" + (el.getAttribute("data-suffix") || "") + "|" + ((el.nextElementSibling || {}).textContent || "");
    if (countedKeys.has(ck)) return; countedKeys.add(ck);
    const n = +el.getAttribute("data-count"), suf = el.getAttribute("data-suffix") || "", dec = +(el.getAttribute("data-dec") || 0);
    if (RM) { el.textContent = n.toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf; return; }
    const t0 = performance.now(), D = 1400;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3);
      el.textContent = (n * e).toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------------- Reveal + rail + count observers ---------------- */
  const seen = new Set();
  const io = "IntersectionObserver" in window ? new IntersectionObserver((ents) => {
    ents.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      if (el.hasAttribute("data-count")) countUp(el);
      if (el.classList.contains("rv")) { el.classList.add("in"); seen.add(el._rvk); }
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }) : null;

  function keyOf(el, i) {
    return el.id || el.getAttribute("data-vc-id") || el.getAttribute("data-asset-id") || el.getAttribute("data-key") || (el.className + ":" + i);
  }
  function tag() {
    $$(".vc-card, .eh-card, .vault-card, .domain-banner, .eh-hero, .eh-stat, .p444-wrap, .hero-stat").forEach((el, i) => {
      if (el.classList.contains("rv")) return;
      el._rvk = keyOf(el, i);
      el.classList.add("rv");
      if (!io || seen.has(el._rvk) || RM) { el.classList.add("in"); return; }
      el.style.setProperty("--rvd", ((i % 4) * 60) + "ms");
      io.observe(el);
    });
    $$("[data-count]").forEach((el) => { if (!counted.has(el)) { if (io) io.observe(el); else countUp(el); } });
    buildRail();
    syncHero();
  }
  // Safety net: never leave content hidden
  setInterval(() => { $$(".rv:not(.in)").forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { el.classList.add("in"); seen.add(el._rvk); } }); }, 1200);

  /* ---------------- Section rail ---------------- */
  const rail = document.createElement("nav");
  rail.className = "fx-rail"; rail.setAttribute("aria-label", "Section navigation");
  document.body.appendChild(rail);
  let spy;
  function buildRail() {
    const present = SECTIONS.filter((s) => { const el = document.getElementById(s.id); return el && !el.hidden; });
    rail.innerHTML = present.map((s) => `<button type="button" data-rail="${s.id}" aria-label="${s.label}"><span class="mono">${s.code}</span><em>${s.label}</em></button>`).join("");
    rail.hidden = present.length < 2;
    if (spy) spy.disconnect();
    if (!("IntersectionObserver" in window)) return;
    spy = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) $$("button", rail).forEach((b) => b.classList.toggle("on", b.getAttribute("data-rail") === en.target.id));
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    present.forEach((s) => spy.observe(document.getElementById(s.id)));
  }
  rail.addEventListener("click", (e) => { const b = e.target.closest("[data-rail]"); if (b) go(b.getAttribute("data-rail")); });

  /* ---------------- Cursor spotlight ---------------- */
  document.addEventListener("mousemove", (e) => {
    const c = e.target.closest && e.target.closest(".vc-card, .eh-card, .vault-card, .hero-stat");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px");
    c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  /* ---------------- Command palette ---------------- */
  const pal = document.createElement("div");
  pal.className = "fx-pal"; pal.hidden = true; pal.setAttribute("role", "dialog"); pal.setAttribute("aria-modal", "true"); pal.setAttribute("aria-label", "Command palette");
  pal.innerHTML = `
    <div class="fx-pal-box">
      <div class="fx-pal-in"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2"/></svg>
        <input type="text" placeholder="Jump to a domain, visual or action…" aria-label="Search commands"/><kbd>Esc</kbd></div>
      <div class="fx-pal-list" role="listbox"></div>
      <div class="fx-pal-foot mono"><span>↑↓ navigate</span><span>↵ run</span><span>Ctrl/⌘ K toggle</span></div>
    </div>`;
  document.body.appendChild(pal);
  const pin = $("input", pal), plist = $(".fx-pal-list", pal);
  let items = [], sel = 0;
  const clickId = (id) => () => { const b = document.getElementById(id); if (b) b.click(); };
  function buildItems() {
    const it = [];
    SECTIONS.forEach((s) => it.push({ g: "Go to", t: `${s.code} · ${s.label}`, run: () => go(s.id) }));
    [["all", "All deliverables"], ["horse-hub", "Race Pulse only"], ["network-capture", "Capture Grid only"], ["meta-brief", "Meta Brief only"], ["bot-canvas", "Bot Fleet only"], ["asset-vault", "Asset Vault only"], ["system-options", "Deploy Hub only"], ["elite-hub", "Elite AI Hub + Project 444 only"]]
      .forEach(([d, l]) => it.push({ g: "Filter", t: l, run: () => { const b = $(`.domain-tab[data-domain="${d}"]`); if (b) b.click(); scrollTo({ top: 0, behavior: "smooth" }); } }));
    it.push({ g: "Action", t: "Run a governed procedure", run: () => window.NEXUS_ELITEHUB && window.NEXUS_ELITEHUB.run() });
    it.push({ g: "Action", t: "Open the evidence notary", run: () => { go("section-elite-hub"); setTimeout(() => { const n = document.getElementById("eh-notary"); if (n) n.scrollIntoView({ behavior: "smooth", block: "center" }); }, 450); } });
    it.push({ g: "Action", t: "Toggle X-Ray overlay", run: clickId("toggle-xray-btn") });
    it.push({ g: "Action", t: "Toggle hotspot pins", run: clickId("toggle-hotspots-btn") });
    it.push({ g: "Action", t: "Pause / resume telemetry stream", run: clickId("toggle-stream-btn") });
    it.push({ g: "Action", t: "Switch light / dark theme", run: clickId("toggle-theme-btn") });
    it.push({ g: "Action", t: "Reset all sliders", run: clickId("reset-all-sliders-btn") });
    it.push({ g: "Action", t: "Export all telemetry to CSV", run: clickId("export-full-csv-btn") });
    it.push({ g: "Link", t: "Open elitehub.ai", run: () => window.open("https://elitehub.ai/", "_blank", "noopener") });
    it.push({ g: "Link", t: "Open Project 444 (members only)", run: () => window.open("https://www.perplexity.ai/projects/444-WMd9idUWQqSIIBHzJtwsCQ", "_blank", "noopener") });
    $$(".vc-card").forEach((c) => {
      const id = c.getAttribute("data-vc-id"), t = ($(".vc-title", c) || {}).textContent || id;
      it.push({ g: "Visual", t: `${id} · ${t}`, run: () => { const b = $(`.vc-card[data-vc-id="${id}"] [data-action="open-modal"]`); if (b) b.click(); } });
    });
    return it;
  }
  function renderPal() {
    const q = pin.value.trim().toLowerCase();
    items = buildItems().filter((x) => !q || (x.g + " " + x.t).toLowerCase().includes(q)).slice(0, 40);
    sel = Math.min(sel, Math.max(0, items.length - 1));
    plist.innerHTML = items.length ? items.map((x, i) => `<div class="fx-pal-item ${i === sel ? "on" : ""}" role="option" aria-selected="${i === sel}" data-i="${i}"><span class="fx-pal-g mono">${x.g}</span><span>${x.t.replace(/</g, "&lt;")}</span></div>`).join("")
      : `<div class="fx-pal-empty">No matches. Try "elite", "capture" or "theme".</div>`;
    const on = $(".fx-pal-item.on", plist); if (on) on.scrollIntoView({ block: "nearest" });
  }
  function openPalette() { pal.hidden = false; pin.value = ""; sel = 0; renderPal(); pin.focus(); setTimeout(() => pin.focus(), 10); }
  function closePalette() { pal.hidden = true; }
  function runSel() { const x = items[sel]; closePalette(); if (x) setTimeout(x.run, 30); }
  window.nexusPalette = openPalette;
  pin.addEventListener("input", () => { sel = 0; renderPal(); });
  pin.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); renderPal(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); renderPal(); }
    else if (e.key === "Enter") { e.preventDefault(); runSel(); }
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); closePalette(); }
  });
  plist.addEventListener("mousemove", (e) => { const r = e.target.closest(".fx-pal-item"); if (r && +r.dataset.i !== sel) { sel = +r.dataset.i; $$(".fx-pal-item", plist).forEach((x) => x.classList.toggle("on", +x.dataset.i === sel)); } });
  plist.addEventListener("click", (e) => { const r = e.target.closest(".fx-pal-item"); if (r) { sel = +r.dataset.i; runSel(); } });
  pal.addEventListener("click", (e) => { if (e.target === pal) closePalette(); });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); }
    else if (e.key === "/" && pal.hidden && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openPalette(); }
  });
  const kbtn = document.getElementById("open-palette-btn"); if (kbtn) kbtn.addEventListener("click", openPalette);

  /* ---------------- Ticker ---------------- */
  const tk = $("#fx-ticker-track");
  if (tk) { tk.innerHTML += tk.innerHTML; }

  /* ---------------- Wire up re-renders ---------------- */
  const root = document.getElementById("workspace-root");
  if (root && "MutationObserver" in window) new MutationObserver(() => { clearTimeout(tag._t); tag._t = setTimeout(tag, 30); }).observe(root, { childList: true });
  document.addEventListener("nexus:rendered", () => setTimeout(tag, 10));
  document.addEventListener("click", (e) => { if (e.target.closest(".domain-tab")) setTimeout(tag, 40); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tag); else tag();
  onScroll();
})();
