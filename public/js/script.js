function toggleBox()
{
  const box = document.getElementById('cvBox');
  box.classList.toggle('expanded');
  const toggleText = box.querySelector('.box-toggle');
  toggleText.textContent = box.classList.contains('expanded') ? '▲ Ver menos' : '▼ Ver mais';
}
