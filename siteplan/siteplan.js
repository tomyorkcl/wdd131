// Hamburguer Menu //

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

/*carousel*/

let currentIndex = 0;
const totalProducts = 9;  // Total products

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const productWidth = document.querySelector('.product').offsetWidth;
  const visibleItems = 5; 

  currentIndex += direction;

  
  if (currentIndex < 0) {
    currentIndex = totalProducts - visibleItems;
  } else if (currentIndex > totalProducts - visibleItems) {
    currentIndex = 0;
  }

  carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
}

//Last modification //

const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;