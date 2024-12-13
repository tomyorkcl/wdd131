// Product Array
const products = [
    { id: "prod1", name: "Product 1" },
    { id: "prod2", name: "Product 2" },
    { id: "prod3", name: "Product 3" },
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

//Last modification //
const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;
