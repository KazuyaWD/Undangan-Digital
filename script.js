const scene = document.querySelector('.envelope-scene');

document.getElementById('envelope').onclick = () => scene.classList.add('open');

document.getElementById('closeBtn').onclick = e => {
  e.stopPropagation();            
  scene.classList.remove('open');
};