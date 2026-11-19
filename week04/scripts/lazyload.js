const currentYear = document.querySelector("#currentyear");
const today = new Date();
const year = today.getFullYear();
currentYear.textContent = year;

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;