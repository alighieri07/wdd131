
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

const temperature = 15;   
const windSpeed = 30;     

function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed) + '°C';
} else {
  document.getElementById('wind-chill').textContent = 'N/A';
}
