// Basic site script for nav toggle and year insertion

(function () {
  // Toggle mobile menu
  const hamburgerButtons = document.querySelectorAll('#hamburger');
  const navs = document.querySelectorAll('#main-nav');

  function toggle() {
    navs.forEach(n => n.classList.toggle('open'));
  }

  hamburgerButtons.forEach(btn => btn.addEventListener('click', toggle));

  // Close menu when clicking a nav link (mobile)
  document.addEventListener('click', function (e) {
    if (e.target.matches('.nav-link')) {
      navs.forEach(n => n.classList.remove('open'));
    }
  });

  // Put current year in footers
  const yearEls = [document.getElementById('year'), document.getElementById('year2'), document.getElementById('year3'), document.getElementById('year4')];
  const y = new Date().getFullYear();
  yearEls.forEach(el => { if (el) el.textContent = y; });

  // Mark active nav link based on current path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      a.classList.add('active');
    }
  });
})();
