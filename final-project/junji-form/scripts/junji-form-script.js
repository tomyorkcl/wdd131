// JavaScript for Product Review Form

// Product Array
const products = [
    { id: "prod1", name: "Skateboard" },
    { id: "prod2", name: "Sneakers" },
    { id: "prod3", name: "Accesories" },
    { id: "prod4", name: "All Categories" },
];

// Populate Product Options
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Initialize review counter in localStorage
    if (!localStorage.getItem("reviewCount")) {
        localStorage.setItem("reviewCount", "0");
    }
});

// Increment Review Counter on Form Submission
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount"), 10);
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
});
