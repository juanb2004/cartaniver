document.getElementById('card').addEventListener('click', function() {
    const imagesContainer = document.getElementById('imagesContainer');
    
    // Cambiar el estado de visibilidad
    if (imagesContainer.style.display === 'none') {
      imagesContainer.style.display = 'block';
    } else {
      imagesContainer.style.display = 'none';
    }
  });
  