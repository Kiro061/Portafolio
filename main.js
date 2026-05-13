/**
 * main.js — Alex Rivera Portfolio
 * Clean, vanilla JavaScript with no dependencies.
 * Handles: sticky nav, mobile menu, smooth scroll, intersection
 * observer reveals, skill bar animation, form validation.
 */

/* ============================================================
   UTILITY HELPERS
============================================================ */

/**
 * Shorthand querySelector
 * @param {string} selector
 * @param {Element} [scope=document]
 */
const $ = (selector, scope = document) => scope.querySelector(selector);

/**
 * Shorthand querySelectorAll
 * @param {string} selector
 * @param {Element} [scope=document]
 */
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/* ============================================================
   1. STICKY HEADER — adds .scrolled class on scroll
============================================================ */
(function initStickyHeader() {
  const header = $('#site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  // Throttle for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  onScroll(); // run on load
})();

/* ============================================================
   2. MOBILE NAVIGATION — hamburger toggle
============================================================ */
(function initMobileNav() {
  const toggle = $('#nav-toggle');
  const links  = $('#nav-links');
  if (!toggle || !links) return;

  const open  = () => {
    toggle.classList.add('open');
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? close() : open();
  });

  // Close when a nav link is clicked
  $$('.nav-link, .nav-cta', links).forEach(link => {
    link.addEventListener('click', close);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Close on outside click (when menu is open)
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)) {
      close();
    }
  });
})();

/* ============================================================
   3. SMOOTH SCROLL — for all anchor links
============================================================ */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = $(targetId);
      if (!target) return;

      e.preventDefault();

      // Offset for fixed header
      const headerHeight = $('#site-header')?.offsetHeight || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ============================================================
   4. INTERSECTION OBSERVER — reveal animations on scroll
============================================================ */
(function initRevealObserver() {
  // Elements to reveal on scroll
  const revealTargets = [
    '.about-grid',
    '.skill-card',
    '.project-card',
    '.contact-inner',
    '.section-title',
    '.section-sub',
    '.section-label',
  ];

  // Add .reveal class to all targets
  $$(revealTargets.join(', ')).forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger delay for grid siblings
    const parent = el.parentElement;
    if (parent && el.classList.contains('skill-card')) {
      // Skill cards already have --delay via inline style; respect that
    } else {
      el.style.transitionDelay = `${Math.min(i % 3 * 60, 180)}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'in-view');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  $$('.reveal').forEach(el => observer.observe(el));
})();

/* ============================================================
   5. ACTIVE NAV LINK — highlight current section
============================================================ */
(function initActiveNavHighlight() {
  const sections = $$('main section[id]');
  const navLinks  = $$('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const headerHeight = $('#site-header')?.offsetHeight || 70;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      });
    },
    { rootMargin: `-${headerHeight + 20}px 0px -55% 0px` }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ============================================================
   6. CONTACT FORM — client-side validation & submit UI
============================================================ */
(function initContactForm() {
  const form        = $('#contact-form');
  if (!form) return;

  const nameInput   = $('#name',    form);
  const emailInput  = $('#email',   form);
  const msgInput    = $('#message', form);
  const submitBtn   = $('#submit-btn');
  const successMsg  = $('#form-success');

  /* Helper: show or clear an error message */
  const setError = (inputEl, errorId, message) => {
    const errorEl = $(`#${errorId}`);
    if (errorEl) errorEl.textContent = message;
    inputEl.classList.toggle('error', !!message);
  };

  /* Validate a single email string */
  const isValidEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  /* Validate all fields, return true if all pass */
  const validate = () => {
    let valid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, 'name-error', 'Please enter your name.');
      valid = false;
    } else {
      setError(nameInput, 'name-error', '');
    }

    if (!emailInput.value.trim()) {
      setError(emailInput, 'email-error', 'Please enter your email.');
      valid = false;
    } else if (!isValidEmail(emailInput.value)) {
      setError(emailInput, 'email-error', 'Please enter a valid email address.');
      valid = false;
    } else {
      setError(emailInput, 'email-error', '');
    }

    if (!msgInput.value.trim()) {
      setError(msgInput, 'message-error', 'Please enter a message.');
      valid = false;
    } else if (msgInput.value.trim().length < 10) {
      setError(msgInput, 'message-error', 'Message is too short (min 10 characters).');
      valid = false;
    } else {
      setError(msgInput, 'message-error', '');
    }

    return valid;
  };

  /* Live validation feedback on blur */
  [nameInput, emailInput, msgInput].forEach(input => {
    if (!input) return;
    input.addEventListener('blur', () => validate());
    input.addEventListener('input', () => {
      // Clear error once user starts correcting
      const errorId = input.id + '-error';
      const errorEl = $(`#${errorId}`);
      if (errorEl && errorEl.textContent) validate();
    });
  });

  /* Form submission */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending…';

    // NOTE: Replace this timeout with a real fetch() to your backend
    // or a service like Formspree / EmailJS.
    // Example with Formspree:
    //   await fetch('https://formspree.io/f/YOUR_ID', {
    //     method: 'POST',
    //     headers: { 'Accept': 'application/json' },
    //     body: new FormData(form)
    //   });

    await new Promise(resolve => setTimeout(resolve, 1200)); // simulated delay

    submitBtn.classList.remove('loading');
    submitBtn.textContent = 'Send message';

    // Show success message
    if (successMsg) {
      successMsg.hidden = false;
      successMsg.setAttribute('aria-live', 'polite');
    }

    form.reset();

    // Hide success after 5 seconds
    setTimeout(() => {
      if (successMsg) successMsg.hidden = true;
    }, 5000);
  });
})();

/* ============================================================
   7. FOOTER YEAR — auto-update copyright year
============================================================ */
(function setFooterYear() {
  const yearEl = $('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* ============================================================
   8. ACTIVE NAV STYLE INJECTION
============================================================ */
(function injectActiveNavStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active {
      color: var(--accent);
    }
    .nav-link.active::after {
      width: 100%;
    }
  `;
  document.head.appendChild(style);
})();
