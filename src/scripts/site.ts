type AnimateEl = HTMLElement & {
  dataset: {
    animate?: string;
    delay?: string;
  };
};

type CounterEl = HTMLElement & {
  dataset: {
    counter?: string;
    prefix?: string;
    suffix?: string;
  };
};

// Accessibility preference: if a user has "Reduce motion" turned on, we avoid animations.
// IMPORTANT: This file is shipped to the browser, but we still guard browser-only globals
// so that it can never crash if evaluated in a non-browser environment.
const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Adds a CSS class ("in-view") when elements scroll into view.
// The CSS for these animations lives in your global styles.
const initInViewAnimations = () => {
  if (typeof document === "undefined") return;

  const elements = Array.from(document.querySelectorAll<AnimateEl>("[data-animate]"));
  const prefersReducedMotion = getPrefersReducedMotion();

  for (const el of elements) {
    const delay = el.dataset.delay;
    if (delay) el.style.transitionDelay = `${delay}ms`;
  }

  if (prefersReducedMotion) {
    for (const el of elements) el.classList.add("in-view");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "-100px 0px" },
  );

  for (const el of elements) observer.observe(el);
};

// Animates a number from 0 -> a target number (used for "stats" counters).
const animateNumber = (el: CounterEl, to: number, durationMs: number) => {
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";

  const start = performance.now();
  const from = 0;

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = Math.floor(from + (to - from) * eased);

    el.textContent = `${prefix}${value.toLocaleString()}${suffix}`;

    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

// Finds elements with `data-counter` and runs the animated count-up when they enter view.
const initCounters = () => {
  if (typeof document === "undefined") return;

  const counters = Array.from(document.querySelectorAll<CounterEl>("[data-counter]"));
  const prefersReducedMotion = getPrefersReducedMotion();

  if (counters.length === 0) return;

  if (prefersReducedMotion) {
    for (const el of counters) {
      const raw = el.dataset.counter;
      const to = raw ? Number(raw) : 0;
      const prefix = el.dataset.prefix ?? "";
      const suffix = el.dataset.suffix ?? "";
      el.textContent = `${prefix}${to.toLocaleString()}${suffix}`;
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const el = entry.target as CounterEl;
        const raw = el.dataset.counter;
        const to = raw ? Number(raw) : 0;
        animateNumber(el, to, 2000);

        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "-100px 0px" },
  );

  // Fallback: if IntersectionObserver never fires (e.g., script blocked), show numbers after a short delay
  setTimeout(() => {
    for (const el of counters) {
      if (el.textContent && !el.textContent.includes("0")) continue; // already animated
      const raw = el.dataset.counter;
      const to = raw ? Number(raw) : 0;
      const prefix = el.dataset.prefix ?? "";
      const suffix = el.dataset.suffix ?? "";
      el.textContent = `${prefix}${to.toLocaleString()}${suffix}`;
    }
  }, 3000);
};

// Mobile menu behavior:
// - toggles the visibility of the mobile menu
// - closes the menu when you click a link inside it
const initMobileNav = () => {
  if (typeof document === "undefined") return;

  const header = document.querySelector<HTMLElement>("[data-header]");
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");

  if (!header || !button || !menu) return;

  const close = () => {
    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    menu.classList.remove("hidden");
    button.setAttribute("aria-expanded", "true");
  };

  close();

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    if (isOpen) close();
    else open();
  });

  menu.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) close();
  });
};

// Contact form behavior:
// - sends the form to `/api/contact` (our Astro API route)
// - shows a success message on HTTP 200
// - shows an error message on HTTP 400/500
const initContactForm = () => {
  if (typeof document === "undefined") return;

  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;

  const successView = document.querySelector<HTMLElement>("[data-contact-success]");
  const errorView = document.querySelector<HTMLElement>("[data-contact-error]");
  const errorText = document.querySelector<HTMLElement>("[data-contact-error-text]");
  const submitButton = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const resetButton = document.querySelector<HTMLButtonElement>("[data-contact-reset]");

  const setIdle = () => {
    successView?.classList.add("hidden");
    errorView?.classList.add("hidden");
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.dataset.state = "idle";
    }
  };

  const setLoading = () => {
    errorView?.classList.add("hidden");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.state = "loading";
    }
  };

  const setSuccess = () => {
    form.classList.add("hidden");
    successView?.classList.remove("hidden");
  };

  const setError = (message: string) => {
    errorText && (errorText.textContent = message);
    errorView?.classList.remove("hidden");
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.dataset.state = "idle";
    }
  };

  setIdle();

  resetButton?.addEventListener("click", () => {
    successView?.classList.add("hidden");
    form.classList.remove("hidden");
    form.reset();
    setIdle();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setLoading();

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // `res.ok` means HTTP 200-299.
      if (res.ok) {
        setSuccess();
        return;
      }

      // 400 = validation error (e.g. missing fields, invalid email format)
      if (res.status === 400) {
        setError("Please check your details and try again.");
        return;
      }

      // 500 = server rejected the email domain (brief requirement)
      setError("Internal server error. Please try again later.");
    } catch {
      // Network error (offline, blocked request, etc.)
      setError("Internal server error. Please try again later.");
    }
  });
};

// Run the site behaviors after the HTML has loaded.
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initInViewAnimations();
    initCounters();
    initMobileNav();
    initContactForm();
  });
}
