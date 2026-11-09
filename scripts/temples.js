const button = document.querySelector('#menuButton');
const navigation = document.querySelector('nav');
const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;
button.addEventListener('click', () => {
    button.classList.toggle('open');
    navigation.classList.toggle('open');
});