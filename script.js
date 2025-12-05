// shared site scripts
document.addEventListener('DOMContentLoaded', () => {
  // years
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // gallery images (replace or add filenames in the images/ folder)
  const IMAGES = [
    'images/gal-1.jpg',
    'images/gal-2.jpg',
    'images/gal-3.jpg',
    'images/gal-4.jpg',
    'images/gal-5.jpg',
    'images/gal-6.jpg'
  ];

  const galleryGrid = document.getElementById('gallery-grid');
  if(galleryGrid){
    galleryGrid.innerHTML = '';
    IMAGES.forEach((src, i) => {
      const wrap = document.createElement('div');
      wrap.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Project ${i+1}`;
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(src, img.alt));
      wrap.appendChild(img);
      galleryGrid.appendChild(wrap);
    });
  }

  // lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-cap');
  const lbClose = document.getElementById('lb-close');

  function openLightbox(src, alt){
    if(!lb) return;
    lb.style.display = 'flex';
    lb.setAttribute('aria-hidden','false');
    lbImg.src = src;
    lbImg.alt = alt;
    lbCap.textContent = alt || '';
  }
  function closeLightbox(){
    if(!lb) return;
    lb.style.display = 'none';
    lb.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  if(lbClose) lbClose.addEventListener('click', closeLightbox);
  if(lb) lb.addEventListener('click', (e) => {
    if(e.target === lb) closeLightbox();
  });
});
