(() => {
  const targets = [...document.querySelectorAll('.home-hero .index-link, [data-letter-swap]')];
  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canScramble = !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 700px)').matches;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const timers = new WeakMap();

  const randomLetter = () => alphabet[Math.floor(Math.random() * alphabet.length)];

  const renderLetters = (element, label) => {
    const word = document.createElement('span');
    word.className = 'swap-word';
    word.setAttribute('aria-hidden', 'true');

    label.split(/(\s+)/).forEach((part) => {
      if (!part) return;

      if (/^\s+$/.test(part)) {
        word.append(document.createTextNode(part));
        return;
      }

      const segment = document.createElement('span');
      segment.className = 'swap-segment';

      [...part].forEach((char) => {
        const letter = document.createElement('span');
        letter.className = 'swap-letter';
        letter.dataset.final = char;
        letter.textContent = char;
        segment.append(letter);
      });

      word.append(segment);
    });

    element.textContent = '';
    element.append(word);
    return [...word.querySelectorAll('.swap-letter')];
  };

  const resetLetters = (spans) => {
    spans.forEach((span) => {
      span.textContent = span.dataset.final || '';
    });
  };

  const scramble = (target) => {
    const label = target.dataset.swapLabel || '';
    const spans = [...target.querySelectorAll('.swap-letter')];
    const previous = timers.get(target);
    if (previous) window.clearInterval(previous);

    if (reduceMotion) {
      resetLetters(spans);
      return;
    }

    let tick = 0;
    const maxTicks = 13;
    const timer = window.setInterval(() => {
      tick += 1;
      spans.forEach((span, index) => {
        const finalChar = span.dataset.final || '';
        const settleAt = 5 + index * 0.55;
        span.textContent = tick > settleAt ? finalChar : randomLetter();
      });

      if (tick >= maxTicks) {
        window.clearInterval(timer);
        timers.delete(target);
        resetLetters(spans);
      }
    }, 34);

    timers.set(target, timer);
  };

  targets.forEach((target, index) => {
    const isHomeLink = target.matches('.home-hero .index-link');
    const labelElement = isHomeLink ? target.querySelector('strong') : target;
    if (!labelElement) return;

    const label = labelElement.textContent.trim();
    const detail = isHomeLink ? target.querySelector('span:last-child')?.textContent.trim() : '';
    const trigger = isHomeLink ? target : target.closest('a') || target;
    target.dataset.swapLabel = label.toUpperCase();
    target.style.setProperty('--reveal-index', index);

    if (isHomeLink) {
      target.setAttribute('aria-label', detail ? `${label}: ${detail}` : label);
    }

    renderLetters(labelElement, label);

    if (canScramble) {
      trigger.addEventListener('mouseenter', () => scramble(target));
      trigger.addEventListener('focus', () => scramble(target));
    }
  });

  if (reduceMotion) return;

  document.body.classList.add('home-reveal-ready');
  window.requestAnimationFrame(() => {
    document.body.classList.add('home-reveal-in');
  });

  window.setTimeout(() => {
    document.body.classList.remove('home-reveal-ready', 'home-reveal-in');
  }, 1300);
})();
