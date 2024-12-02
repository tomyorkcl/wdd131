// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = lastModifiedDate;


const temperature = 30; // in °F
const windSpeed = 10; // in mph

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  // Wind chill formula for Imperial units (°F and mph)
  return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

// Function to display wind chill
function displayWindChill() {
  // Check if conditions for calculating wind chill are met
  if ((temperature <= 50 && windSpeed > 3)) {
    // Call calculateWindChill only if conditions are met
    let windChill = calculateWindChill(temperature, windSpeed);
    // Display the wind chill factor in the Weather section
    document.getElementById("windChill").textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
  } else {
    // If conditions are not met, display "N/A"
    document.getElementById("windChill").textContent = "Wind Chill: N/A";
  }
}

// Call the function to display wind chill when the page loads
window.onload = displayWindChill;