// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("active"); 
});

const temples = [

    {
      templeName: "Mount Timpanogos Utah",
      location: "Mount Timpanogos, Utah, United States",
      dedicated: "1996, October, 13",
      area: 107240,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg"
    },
    {
      templeName: "Concepcion Chile",
      location: "Concepcion, Chile",
      dedicated: "2018, October, 28",
      area: 23095,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
    },
    {
      templeName: "Santiago Chile",
      location: "Santiago, Chile",
      dedicated: "1983, September, 15",
      area: 20831,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
    },
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

function generateTempleCards(temples) {
    const templeCardsContainer = document.getElementById('temple-cards');
    templeCardsContainer.innerHTML = '';
    
    temples.forEach(temple => {
      const templeCard = document.createElement('figure');
      templeCard.classList.add('temple-card');
      
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
        </figcaption>
      `;
      
      templeCardsContainer.appendChild(templeCard);
    });
  }
  

  generateTempleCards(temples);
  

  document.getElementById('home-link').addEventListener('click', () => generateTempleCards(temples));
  document.getElementById('old-link').addEventListener('click', () => generateTempleCards(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)));
  document.getElementById('new-link').addEventListener('click', () => generateTempleCards(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)));
  document.getElementById('large-link').addEventListener('click', () => generateTempleCards(temples.filter(temple => temple.area > 90000)));
  document.getElementById('small-link').addEventListener('click', () => generateTempleCards(temples.filter(temple => temple.area < 10000)));
