/* ============================================
   NovaChi — Scroll-Driven Frame Animation Engine
   ============================================ */

(function () {
  'use strict';

  // --- Configuration ---
  const FRAME_COUNT = 136;
  const FRAME_DIR = './slide_frame/';
  const FRAME_PREFIX = 'ezgif-frame-';
  const FRAME_EXT = '.jpg';

  // --- State ---
  const images = [];
  let loadedCount = 0;
  let currentFrame = 0;
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');

  // --- Helpers ---
  function padNumber(num, size) {
    let s = String(num);
    while (s.length < size) s = '0' + s;
    return s;
  }

  function getFramePath(index) {
    return FRAME_DIR + FRAME_PREFIX + padNumber(index, 3) + FRAME_EXT;
  }

  // --- Canvas Sizing ---
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(currentFrame);
  }

  // --- Draw a frame on canvas (cover-fit) ---
  function drawFrame(index) {
    if (!images[index] || !images[index].complete) return;

    const img = images[index];
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover-fit calculation
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  // --- Preload all frames ---
  function preloadFrames() {
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        // Draw the first frame as soon as it's ready
        if (i === 1) {
          drawFrame(0);
        }
      };
      images.push(img);
    }
  }

  // --- Scroll-Driven Frame Update ---
  function handleScroll() {
    const heroSection = document.getElementById('hero');
    const rect = heroSection.getBoundingClientRect();
    const scrollableHeight = heroSection.offsetHeight - window.innerHeight;

    // How far through the hero section we've scrolled (0 → 1)
    const scrollProgress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);

    // Map to frame index
    const frameIndex = Math.min(
      Math.floor(scrollProgress * (FRAME_COUNT - 1)),
      FRAME_COUNT - 1
    );

    if (frameIndex !== currentFrame) {
      currentFrame = frameIndex;
      requestAnimationFrame(() => drawFrame(currentFrame));
    }

    // Update scroll progress bar
    const progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
      progressBar.style.height = (scrollProgress * 100) + '%';
    }

    // Parallax text layers
    updateParallaxText(scrollProgress);

    // Nav styling
    updateNav(scrollProgress);
  }

  // --- Parallax Text Layers ---
  function updateParallaxText(progress) {
    const heroTextTop = document.querySelector('.hero-text-top');
    const heroTextMid = document.querySelector('.hero-text-mid');

    if (heroTextTop) {
      // Fade out and move up as user scrolls
      const topOpacity = Math.max(1 - progress * 4, 0);
      const topTranslateY = -progress * 150;
      heroTextTop.style.opacity = topOpacity;
      heroTextTop.style.transform = `translateX(-50%) translateY(${topTranslateY}px)`;
    }

    if (heroTextMid) {
      // Fade out the scroll indicator quickly
      const midOpacity = Math.max(1 - progress * 6, 0);
      heroTextMid.style.opacity = midOpacity;
    }
  }

  // --- Nav Scroll State ---
  function updateNav(progress) {
    const nav = document.getElementById('main-nav');
    if (progress > 0.02) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // --- Reveal & Animations ---
  function initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const countUps = entry.target.querySelectorAll('.count-up');
          countUps.forEach(el => {
            if (!el.classList.contains('counted')) {
              el.classList.add('counted');
              const target = +el.getAttribute('data-target');
              animateValue(el, 0, target, 2000);
            }
          });
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      obj.innerHTML = Math.floor(easeOut * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end;
      }
    };
    window.requestAnimationFrame(step);
  }

  // --- Init ---
  function init() {
    resizeCanvas();
    preloadFrames();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas);

    initObserver();

    // Initial call
    handleScroll();
  }

  // Kick things off
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
