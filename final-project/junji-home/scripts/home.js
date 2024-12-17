
const menuToggle = document.getElementById('menu-toggle');
const navigation = document.querySelector('.navigation');
    
menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuToggle.classList.toggle('open');
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