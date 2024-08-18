// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu and close icon elements
    const hamburger = document.querySelector('.hamburger_img');
    const closeIcon = document.querySelector('.close_img');
    const navMenu = document.querySelector('.navMenu_holder');

    // Add event listener for the hamburger menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.remove('hideMenu');
    });

    // Add event listener for the close icon
    closeIcon.addEventListener('click', function() {
        navMenu.classList.add('hideMenu');
    });
});
