function toggleBox() {
  const box = document.getElementById('cvBox');
  box.classList.toggle('expanded');
  const toggleText = box.querySelector('.box-toggle');
  toggleText.textContent = box.classList.contains('expanded') ? '▲ Ver menos' : '▼ Ver mais';
}

function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.addEventListener('click', function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.querySelectorAll('.modal-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const modal = this.closest('.modal');
    modal.style.display = 'none';
  });
});

const trigger = document.getElementById('triggerImage');
const modal = document.getElementById('godzillaModal');
const roar = document.getElementById('roarSound');

trigger.addEventListener('click', () => {
  modal.style.display = 'flex';
  roar.currentTime = 0;
  roar.play();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
