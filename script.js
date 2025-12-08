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
    {
  image: "images/thumbnail_IMG_0281.png",
  title: "Bathroom Remodel",
  video: "images/IMG_0281.mov",
  disclaimer: `
    For this bathroom renovation, REM Renovations & Repairs completed the demo, all electrical work,
    floor tile installation, painting, faucet installation and plumbing connections, toilet installation,
    installation of two exhaust fans, the sliding barn-door style door, and Schluter® uncoupling membrane
    for the floor. The shower was not installed by REM Renovations & Repairs. Only assistance was provided
    for the tub install. My work was completed within 7–8 days; I finished before the other contractor and
    only assisted to complete the shower and tub.
  `
}


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
