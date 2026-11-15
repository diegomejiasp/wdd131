const temperature = 8;
const windSpeed = 14;

function calculateWindChill(temperature, windSpeed) {
    const result = 0.6215 * temperature;
    const windFactor = Math.pow(windSpeed, 0.16);
    const windEffect = 11.37 * windFactor
    const finalEffect = 0.3965 * temperature * windFactor
    return 13.12 + result - windEffect + finalEffect
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
} else {
    windChill = "N/A";
}

const windChillElement = document.querySelector("#wind-chill")
windChillElement.textContent = windChill === "N/A"
    ? "N/A"
    : `${windChill} °C`;

const currentYear = document.querySelector("#currentyear");
const today = new Date();
const year = today.getFullYear();
currentYear.textContent = year;

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;