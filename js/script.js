// Update tahun di footer secara otomatis
const yearEl = document.querySelector('[data-year]');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Efek fade-in saat kartu artikel muncul di layar (scroll reveal)
const revealTargets = document.querySelectorAll('.post-card');

if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
} else {
  // Fallback: jika browser tidak mendukung, langsung tampilkan tanpa animasi
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
