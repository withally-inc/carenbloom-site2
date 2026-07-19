/* Care & Bloom — Operating Record motion (dependency-free)
   Choreography: nav settles first, kicker fades, headline rises line by
   line behind masks, lede follows; below the fold everything reveals on
   scroll with short staggers. All gated on prefers-reduced-motion. */
(function () {
  var docEl = document.documentElement;
  docEl.classList.add("js");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Split the hero headline into masked lines (grouped by rendered y-offset).
  // Bails if the h1 carries inline markup (e.g. an emphasized phrase) — those
  // heroes reveal as a whole via the :not(.is-split) CSS path instead.
  function splitLines(h1) {
    if (h1.children.length > 0) return;
    var text = h1.textContent.trim();
    if (!text) return;
    h1.classList.add("is-split");
    h1.setAttribute("aria-label", text);
    var words = text.split(/\s+/);
    h1.textContent = "";
    var probe = words.map(function (w) {
      var s = document.createElement("span");
      s.style.display = "inline-block";
      s.textContent = w;
      h1.appendChild(s);
      h1.appendChild(document.createTextNode(" "));
      return s;
    });
    var lines = [], lastTop = null;
    probe.forEach(function (s) {
      var top = s.offsetTop;
      if (top !== lastTop) { lines.push([]); lastTop = top; }
      lines[lines.length - 1].push(s.textContent);
    });
    h1.textContent = "";
    lines.forEach(function (lineWords, i) {
      var mask = document.createElement("span");
      mask.className = "hline";
      mask.setAttribute("aria-hidden", "true");
      var inner = document.createElement("span");
      inner.className = "hline-in";
      inner.style.setProperty("--line", String(i));
      inner.textContent = lineWords.join(" ");
      mask.appendChild(inner);
      h1.appendChild(mask);
    });
  }

  var hero = document.querySelector(".hero");
  var h1 = hero && hero.querySelector("h1");
  if (h1 && !reduced) splitLines(h1);

  // Nav intro stagger
  var navKids = document.querySelectorAll(".nav .wordmark, .nav .nav-chips > *, .nav .nav-cta > *");
  navKids.forEach(function (el, i) { el.style.setProperty("--i", String(i)); });

  // Enter: nav + hero together, one choreographed sequence
  function enter() { docEl.classList.add("is-entered"); if (hero) hero.classList.add("is-in"); }
  if (reduced) enter();
  else {
    requestAnimationFrame(function () { requestAnimationFrame(enter); });
    setTimeout(enter, 600); // rAF is suspended in hidden tabs; never leave content invisible
  }

  // Scroll reveals with per-group stagger
  var groups = [".kpi-band .kpi", ".ledger .lrow", ".plates .plate", ".split > *", ".doors .door", ".logos-strip img", ".station"];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.setProperty("--stagger", String(i % 8));
    });
  });
  document.querySelectorAll(".section-head").forEach(function (el) { el.classList.add("reveal"); });

  if (reduced || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  // KPI count-up: expo ease, preserves prefix/suffix ($100M+, 11)
  function countUp(el) {
    var raw = el.textContent;
    var m = raw.match(/^([^0-9]*)([0-9]+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[2], 10);
    if (!target) return;
    var start = null, dur = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (!reduced && "IntersectionObserver" in window) {
    var kio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { countUp(entry.target); kio.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".kpi .value").forEach(function (el) { kio.observe(el); });
  }
})();
