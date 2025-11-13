// Basic site interactivity and gallery handling
document.addEventListener('DOMContentLoaded', () => {
  // year replacements
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // mobile nav toggle
  const toggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-links');
  if(toggle){
    toggle.addEventListener('click', () => {
      navLinks.forEach(n => n.classList.toggle('show'));
    });
  }

  // GALLERY: images array
  // === HOW TO USE:
  // 1) Put your gallery images into the folder `images/`
  // 2) Add filenames below (exact names) to the `images` array.
  //    Example: 'front-porch.jpg', 'kitchen-after.png', 'deck-01.jpeg'
  //
  // NOTE: This is a static site — GitHub Pages cannot auto-scan a folder.
  // Editing this array is the simplest way to control which files appear.
  const images = [
    // default placeholders (replace with your filenames)
    'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1547364419-9b9c8a1ce61c?auto=format&fit=crop&w=1200&q=80',
    // Example local files (uncomment and use your filenames)
    // 'images/project-1.jpg',
    // 'images/kitchen-after.jpg',
    // 'images/deck-wood.jpg'
  ];

  // If there is a gallery container, populate it
  const gallery = document.getElementById('gallery');
  if(gallery){
    gallery.innerHTML = '';
    images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Project ${i+1}`;
      img.dataset.index = i;
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(src, img.alt));
      gallery.appendChild(img);
    });
  }

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');

  function openLightbox(src, alt){
    if(!lightbox) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    lbCaption.textContent = alt || '';
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden','false');
  }
  function closeLightbox(){
    if(!lightbox) return;
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  if(lbClose) lbClose.addEventListener('click', closeLightbox);
  if(lightbox) lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });
});
