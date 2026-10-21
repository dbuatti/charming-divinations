/* Charming Divinations — site behaviour */
(function () {
  'use strict';

  // ── Mobile nav ──
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var bars = toggle.querySelectorAll('i');
      if (open) {
        bars[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
        var bars = toggle.querySelectorAll('i');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      });
    });
  }

  // ── Scroll reveal ──
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('is-visible'); }, i * 70);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ── Newsletter (demo handler — wire to Buttondown / Mailchimp later) ──
  window.handleSubscribe = function (form) {
    var input = form.querySelector('input[type="email"]');
    var note = form.querySelector('[data-form-note]');
    if (!input || !note) return;
    if (!input.value || input.value.indexOf('@') === -1) {
      note.textContent = 'Please enter a valid email address.';
      note.style.color = '#b4643c';
      return;
    }
    note.textContent = 'Thank you — you are on the list.';
    note.style.color = '#5f8a63';
    input.value = '';
  };

  // ── Current year in footers ──
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
