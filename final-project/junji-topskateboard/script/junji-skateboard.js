    // Script para mostrar/ocultar el menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('.navigation');
    
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuToggle.classList.toggle('open');
      });