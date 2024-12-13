//Last modification //
const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;

// Retrieve and display the review count from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    document.getElementById("review-count").textContent = reviewCount;
});