// ===== Helpers =====
var $ = function $(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return ctx.querySelector(sel);
};

var $$ = function $$(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(ctx.querySelectorAll(sel));
};

document.addEventListener('DOMContentLoaded', function () {
  var navbar = $('#navbar');
  var progressBar = $('#progressBar');
  var progressLabel = $('#progressLabel');
  var links = $$('.nav__link');
  var sections = links.map(function (a) {
    return $(a.getAttribute('href'));
  });
  var yearEl = $('#year'); // Footer year

  if (yearEl) yearEl.textContent = new Date().getFullYear(); // --- Scroll pipeline (ticked)

  var ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateNavbarSize();
        updateProgress();
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateNavbarSize() {
    var atTop = window.scrollY <= 2;
    navbar.classList.toggle('navbar--large', atTop);
    navbar.classList.toggle('navbar--small', !atTop);
  }

  function updateProgress() {
    var docEl = document.documentElement;
    var scrollTop = docEl.scrollTop || document.body.scrollTop;
    var scrollHeight = docEl.scrollHeight || document.body.scrollHeight;
    var clientHeight = docEl.clientHeight;
    var max = Math.max(scrollHeight - clientHeight, 1);
    var pct = Math.min(Math.max(scrollTop / max * 100, 0), 100);
    progressBar.style.width = pct + '%';
    progressLabel.textContent = "Reading progress: ".concat(Math.round(pct), "%");
  }

  function updateActiveLink() {
    var navBottom = navbar.getBoundingClientRect().bottom; // At the bottom → force last active

    var nearBottom = Math.abs(window.innerHeight + window.scrollY - document.documentElement.scrollHeight) <= 1;
    var activeIndex = -1;

    if (nearBottom) {
      activeIndex = links.length - 1;
    } else {
      // Section whose top is just below navbar bottom
      var bestDist = Infinity;
      sections.forEach(function (sec, idx) {
        if (!sec) return;
        var rect = sec.getBoundingClientRect();
        var dist = rect.top - navBottom;

        if (dist >= -1 && dist < bestDist) {
          bestDist = dist;
          activeIndex = idx;
        }
      }); // Fallback: if none matched, pick the first section whose bottom is still below nav bottom

      if (activeIndex === -1) {
        sections.forEach(function (sec, idx) {
          var rect = sec.getBoundingClientRect();
          if (rect.bottom > navBottom && activeIndex === -1) activeIndex = idx;
        });
      }
    }

    links.forEach(function (a, i) {
      return a.classList.toggle('is-active', i === activeIndex);
    });
  } // Initial paint


  updateNavbarSize();
  updateProgress();
  updateActiveLink(); // Events

  document.addEventListener('scroll', onScroll, {
    passive: true
  });
  window.addEventListener('resize', onScroll);
  window.addEventListener('orientationchange', onScroll); // Smooth scroll with offset for sticky navbar

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || !id.startsWith('#')) return;
      e.preventDefault();
      var target = document.querySelector(id);
      if (!target) return;
      var navH = navbar.classList.contains('navbar--small') ? parseInt(getComputedStyle(navbar).height, 10) : parseInt(getComputedStyle(navbar).height, 10);
      var y = window.scrollY + target.getBoundingClientRect().top - (navH + 8);
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  }); // ===== Carousel =====

  var carousel = $('[data-carousel]');

  if (carousel) {
    var render = function render() {
      track.style.transform = "translateX(".concat(index * -100, "%)");
    };

    var next = function next() {
      index = (index + 1) % slides.length;
      render();
    };

    var prev = function prev() {
      index = (index - 1 + slides.length) % slides.length;
      render();
    };

    var track = $('[data-carousel-track]', carousel);
    var prevBtn = $('[data-carousel-prev]', carousel);
    var nextBtn = $('[data-carousel-next]', carousel);
    var slides = $$('.carousel__slide', track);
    var index = 0;
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', next);
    prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', prev); // Optional: auto-advance

    var auto = setInterval(next, 5000);
    carousel.addEventListener('mouseenter', function () {
      return clearInterval(auto);
    });
    carousel.addEventListener('mouseleave', function () {
      return auto = setInterval(next, 5000);
    });
  } // ===== Modal =====


  var openers = $$('[data-open-modal]');
  var closers = $$('[data-close-modal]');
  openers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sel = btn.getAttribute('data-open-modal');
      var modal = $(sel);
      if (!modal) return;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      var closeBtn = $('.modal__close', modal);
      closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.focus(); // ESC key close

      modal.addEventListener('keydown', onEsc);
    });
  });
  closers.forEach(function (btn) {
    btn.addEventListener('click', closeModalFromChild);
  });

  function onEsc(e) {
    if (e.key === 'Escape') {
      var open = $('.modal.is-open');
      if (open) closeModal(open);
    }
  }

  function closeModalFromChild(e) {
    var modal = e.target.closest('.modal');
    if (modal) closeModal(modal);
  } // Backdrop click


  $$('.modal__backdrop').forEach(function (backdrop) {
    backdrop.addEventListener('click', function (e) {
      var modal = e.target.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeEventListener('keydown', onEsc);
  }
});