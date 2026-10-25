const scene = document.querySelector('.envelope-scene');

// Klik amplop: buka
document.getElementById('envelope').onclick = () => scene.classList.add('open');

// Klik tombol "Tutup amplop": tutup
document.getElementById('closeBtn').onclick = e => {
  e.stopPropagation();               // supaya klik tidak ikut membuka lagi
  scene.classList.remove('open');
};