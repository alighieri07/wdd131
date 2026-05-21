const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('navbar');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
    
    menuButton.textContent = navbar.classList.contains('show') ? '✕' : '☰';
});

const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
lastModifiedElement.textContent = lastModifiedDate.toLocaleDateString('en-US', options);
