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

