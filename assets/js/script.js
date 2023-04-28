// Google Custom Search API
var apiKey = "AIzaSyBYCL5vLcrfUfLD6ecGYRaDjEL8jdv0yuo";
var apiUrl = "https://www.googleapis.com/customsearch/v1?[parameters]";
var googleSearchBtn = document.getElementById('google-search-btn');

googleSearchBtn.addEventListener('click', function() {
// Get value of input field
// Store value as variable
// Pass value into function
    googleSearchNewTab(mockInput)

})

var baseURL = "https://google.com/search?q=";
var mockInput = 'How to center a div'
function googleSearchNewTab (searchInput) {
    var formattedInput = searchInput.replace(' ', '+')
    window.open(baseURL + formattedInput, "_blank");
}


// Open Weather API
var apiKey = "68ab3cf80e2e8d6083d2d1e1d2bb8a9a";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

var form = document.querySelector("form");
var cityInput = document.querySelector("#city");
var cityName = document.querySelector("#city-name");
var date = document.querySelector("#date");
var icon = document.querySelector("#icon");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#wind-speed");
var forecastDays = document.querySelectorAll(".forecast-day");
var city = "";

// Get weather data for city from Open Weather API

