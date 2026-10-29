(function () {
  'use strict';
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.nav-btn'));
  var indicator = document.querySelector('.indicator');
  var counter = document.getElementById('cur');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var current = 0, busy = false;

  document.getElementById('year').textContent = new Date().getFullYear();

  function setPanel(i, on) {
    slides[i].classList.toggle('active', on);
    slides[i].hidden = false;
    slides[i].setAttribute('aria-hidden', on ? 'false' : 'true');
    if (on) slides[i].removeAttribute('inert'); else slides[i].setAttribute('inert', '');
  }

  function moveIndicator() {
    var t = tabs[current];
    indicator.style.width = t.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + t.offsetLeft + 'px)';
  }

  function updateNav() {
    tabs.forEach(function (t, i) {
      t.setAttribute('aria-selected', i === current ? 'true' : 'false');
      t.tabIndex = i === current ? 0 : -1;
    });
    counter.textContent = ('0' + (current + 1)).slice(-2);
    moveIndicator();
  }

  function go(next) {
    if (busy || next === current || next < 0 || next >= slides.length) return;
    var prev = current, dir = next > prev ? 1 : -1;
    current = next;
    updateNav();
    if (reduce.matches) {
      setPanel(prev, false); setPanel(next, true);
      return;
    }
    busy = true;
    var out = slides[prev], inn = slides[next];
    out.style.setProperty('--to', (-40 * dir) + 'px');
    inn.style.setProperty('--from', (40 * dir) + 'px');
    inn.classList.add('is-entering');
    out.classList.add('is-leaving');
    void inn.offsetWidth;
    setPanel(next, true);
    inn.classList.remove('is-entering');
    setPanel(prev, false);
    setTimeout(function () {
      out.classList.remove('is-leaving');
      busy = false;
    }, 480);
  }

  document.querySelectorAll('[data-slide]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      go(parseInt(el.getAttribute('data-slide'), 10));
    });
  });

  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === 'ArrowRight') { go(current + 1); tabs[current].focus(); }
    else if (e.key === 'ArrowLeft') { go(current - 1); tabs[current].focus(); }
  });

  var status = document.getElementById('copy-status');
  document.getElementById('copy-email').addEventListener('click', function () {
    var email = 'u128413@gmail.com';
    function ok() { status.textContent = 'Email copied.'; }
    function fail() { status.textContent = 'Could not copy. Please select the email and copy it by hand.'; }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(ok, fail);
    } else {
      fail();
    }
    setTimeout(function () { status.textContent = ''; }, 3500);
  });

  window.addEventListener('resize', moveIndicator);
  window.addEventListener('scroll', function () { window.scrollTo(0, 0); });
  slides.forEach(function (_, i) { setPanel(i, i === 0); });
  updateNav();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);
})();
