
document.getElementById('hamburger').addEventListener('click', () => {
  const popupMenu = document.getElementById('popupMenu');
  popupMenu.style.display = popupMenu.style.display === 'flex' ? 'none' : 'flex';
});


document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('popupMenu').style.display = 'none';
});


document.querySelectorAll('#popupMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('popupMenu').style.display = 'none';
  });
});
