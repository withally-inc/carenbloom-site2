/* Care & Bloom — Operating Record motion (dependency-free) */
(function () {
  var docEl = document.documentElement;
  docEl.classList.add("js");

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hero: masked load reveal
  var hero = document.querySelector(".hero");
  if (hero) {
    if (reduced) hero.classList.add("is-in");
    else {
      var heroIn = function () { hero.classList.add("is-in"); };
      requestAnimationFrame(function () { requestAnimationFrame(heroIn); });
      setTimeout(heroIn, 600); // rAF is suspended in hidden tabs; never leave the hero invisible
    }
  }

  // Auto-decorate scroll targets with .reveal + stagger indices per group
  var groups = [".kpi-band .kpi", ".ledger .lrow", ".plates .plate", ".split > *", ".doors .door", ".logos-strip img", ".station"];
  groups.forEach(function (sel) {
    var items = document.querySelectorAll(sel);
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add("reveal");
      items[i].style.setProperty("--stagger", String(i % 8));
    }
  });
  document.querySelectorAll(".section-head").forEach(function (el) {
    el.classList.add("reveal");
  });

  if (reduced || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  // KPI count-up: animates the numeric part, keeps prefix/suffix ($100M+, 2, 11)
  function countUp(el) {
    var raw = el.textContent;
    var m = raw.match(/^([^0-9]*)([0-9]+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[2], 10);
    if (!target) return;
    var start = null, dur = 900;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (!reduced && "IntersectionObserver" in window) {
    var seen = new WeakSet();
    var kio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          countUp(entry.target);
          kio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".kpi .value").forEach(function (el) { kio.observe(el); });
  }
})();
