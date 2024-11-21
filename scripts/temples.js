// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("active"); 
});
