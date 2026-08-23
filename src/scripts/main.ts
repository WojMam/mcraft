// TODO: integrate contact form

function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !menu) return;

  const close = () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const open = () => {
    toggle.classList.add('is-open');
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) close();
    else open();
  });

  menu.querySelectorAll('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

function initReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (prefersReduced) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  elements.forEach((el) => observer.observe(el));
}

function initMethodSticky() {
  const root = document.querySelector<HTMLElement>('[data-method-sticky]');
  if (!root) return;

  const viewport = root.querySelector<HTMLElement>('[data-method-viewport]');
  const panels = root.querySelectorAll<HTMLElement>('[data-method-panel]');
  const ambient = root.querySelector<HTMLElement>('[data-method-ambient]');
  const tagline = root.querySelector<HTMLElement>('[data-method-tagline]');
  const storySection = document.querySelector<HTMLElement>('#historia');

  if (!viewport || panels.length === 0) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
  const easeOut = (t: number) => 1 - (1 - t) ** 3;
  const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

  type PanelState = { opacity: number; y: number; scale: number };

  const blank = (): PanelState => ({ opacity: 0, y: 18, scale: 0.985 });
  const visible = (): PanelState => ({ opacity: 1, y: 0, scale: 1 });

  const getHeaderOffset = () => {
    const header = document.querySelector<HTMLElement>('[data-header]');
    return header?.offsetHeight ?? 72;
  };

  /** Pinned scroll progress: 0 when sticky engages, 1 when track ends */
  const getProgress = () => {
    const headerOffset = getHeaderOffset();
    const rootTop = root.getBoundingClientRect().top + window.scrollY;
    const scrollRange = Math.max(root.offsetHeight - window.innerHeight + headerOffset, 1);
    const start = rootTop - headerOffset;
    return clamp((window.scrollY - start) / scrollRange, 0, 1);
  };

  /** Pre-pin: how much of the Method frame is already on screen */
  const getApproachFactor = () => {
    const rect = viewport.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom <= 0 || rect.top >= vh) return 0;

    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, vh);
    const visible = Math.max(0, visibleBottom - visibleTop);
    const byCoverage = visible / (vh * 0.38);
    const byEntry = 1 - rect.top / (vh * 0.92);

    return clamp(Math.max(byCoverage, byEntry), 0, 1);
  };

  const storyOverlap = () => {
    if (!storySection) return 0;
    const top = storySection.getBoundingClientRect().top;
    return clamp(1 - top / (window.innerHeight * 1.02), 0, 1);
  };

  const blendTransition = (
    states: PanelState[],
    from: number,
    to: number,
    progress: number,
    zoneStart: number,
    zoneEnd: number,
  ) => {
    const t = easeOut(clamp((progress - zoneStart) / (zoneEnd - zoneStart), 0, 1));
    states[from] = { opacity: 1 - t, y: lerp(0, -14, t), scale: lerp(1, 0.992, t) };
    states[to] = { opacity: t, y: lerp(18, 0, t), scale: lerp(0.985, 1, t) };
  };

  const computeStates = (progress: number, approach: number): PanelState[] => {
    const states = [blank(), blank(), blank()];

    if (progress < 0.05) {
      const entry = Math.max(progress / 0.05, approach);
      const t = easeOut(clamp(entry, 0, 1));
      const entryOpacity = lerp(0.55, 1, t) * lerp(0.82, 1, approach);
      states[0] = { opacity: entryOpacity, y: lerp(22, 0, t), scale: lerp(0.99, 1, t) };
    } else if (progress < 0.27) {
      states[0] = visible();
    } else if (progress < 0.35) {
      blendTransition(states, 0, 1, progress, 0.27, 0.35);
    } else if (progress < 0.57) {
      states[1] = visible();
    } else if (progress < 0.65) {
      blendTransition(states, 1, 2, progress, 0.57, 0.65);
    } else if (progress < 0.87) {
      states[2] = visible();
    } else {
      const overlap = storyOverlap();
      const t = easeOut(clamp((progress - 0.87) / 0.13, 0, 1));
      const fade = Math.max(t * 0.45, t * overlap);
      states[2] = { opacity: 1 - fade * 0.82, y: lerp(0, -12, fade), scale: lerp(1, 0.994, fade) };
    }

    return states;
  };

  const applyPanel = (panel: HTMLElement, state: PanelState) => {
    panel.style.opacity = String(state.opacity);
    panel.style.transform = `translateY(calc(-50% + ${state.y}px)) scale(${state.scale})`;
    panel.classList.toggle('is-active', state.opacity > 0.45);
    panel.setAttribute('aria-hidden', state.opacity > 0.08 ? 'false' : 'true');
  };

  const update = () => {
    const progress = getProgress();
    const approach = getApproachFactor();
    const states = computeStates(progress, approach);

    panels.forEach((panel, index) => {
      applyPanel(panel, states[index] ?? blank());
    });

    if (ambient) {
      const presence = Math.max(progress, approach * 0.6);
      const glowOut = 1 - storyOverlap() * clamp((progress - 0.82) / 0.18, 0, 1) * 0.65;
      const stepBoost = states[1].opacity * 0.08 + states[2].opacity * 0.04;
      ambient.style.opacity = String(presence * glowOut * (0.45 + stepBoost));
      ambient.style.transform = `translateX(${lerp(-12, 18, progress)}px)`;
    }

    if (tagline) {
      const tagPresence = Math.max(clamp(progress / 0.04, 0, 1), approach);
      const tagExit = 1 - storyOverlap() * clamp((progress - 0.85) / 0.15, 0, 1) * 0.5;
      tagline.style.opacity = String(Math.min(tagPresence, 1) * tagExit);
    }
  };

  if (prefersReduced) {
    panels.forEach((panel, index) => {
      applyPanel(panel, index === 0 ? visible() : blank());
    });
    if (ambient) ambient.style.opacity = '0.35';
    if (tagline) tagline.style.opacity = '1';
    return;
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

function initMethodMobile() {
  const steps = document.querySelectorAll<HTMLElement>('[data-method-mobile-step]');
  if (!steps.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    steps.forEach((step) => {
      step.style.opacity = '1';
      step.style.transform = 'none';
    });
    return;
  }

  steps.forEach((step) => {
    step.style.opacity = '0.35';
    step.style.transform = 'translateY(12px)';
    step.style.transition = 'opacity 0.55s ease-out, transform 0.55s ease-out';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const step = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          step.style.opacity = '1';
          step.style.transform = 'translateY(0)';
        } else if (entry.boundingClientRect.top > 0) {
          step.style.opacity = '0.35';
          step.style.transform = 'translateY(12px)';
        }
      });
    },
    { threshold: 0.35, rootMargin: '-10% 0px -10% 0px' },
  );

  steps.forEach((step) => observer.observe(step));
}

function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;

  // Alpha: no backend — keep submit inactive / neutral
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

initHeader();
initMobileMenu();
initReveal();
initMethodSticky();
initMethodMobile();
initContactForm();
