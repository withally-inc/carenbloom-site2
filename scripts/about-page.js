const counters = document.querySelectorAll("[data-count-up]");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function runCountUp(counter) {
  const target = Number.parseInt(counter.dataset.target || "0", 10);
  if (!Number.isFinite(target)) return;

  if (prefersReducedMotion) {
    counter.textContent = String(target);
    return;
  }

  const duration = 760;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = String(Math.round(eased * target));
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

if (counters.length) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCountUp(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    counters.forEach((counter) => observer.observe(counter));
  } else {
    counters.forEach(runCountUp);
  }
}
