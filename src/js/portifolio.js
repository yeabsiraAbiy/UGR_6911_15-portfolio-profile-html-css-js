document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-list');
    const closeIcon = document.querySelector('.close-icon');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main'); 

    hamburger.addEventListener('click', function() {
        sidebar.style.display = 'flex';
        hamburger.style.display = 'none';
        mainContent.classList.add('blur'); 
    });

    closeIcon.addEventListener('click', function() {
        sidebar.style.display = 'none';
        hamburger.style.display = 'block';
        mainContent.classList.remove('blur'); 
    });
});


