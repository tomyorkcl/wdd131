document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');


    nav.addEventListener('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });

    
    nav.addEventListener('mouseout', function() {
        document.body.style.cursor = 'default';
    });
});