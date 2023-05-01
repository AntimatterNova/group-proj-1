// Google Custom Search API
var apiKey = "AIzaSyBYCL5vLcrfUfLD6ecGYRaDjEL8jdv0yuo";
var apiUrl = "https://www.googleapis.com/customsearch/v1?[parameters]";
var googleSearchBtn = document.getElementById('google-search-btn');

googleSearchBtn.addEventListener('click', function () {
    // Get value of input field
    var searchInput = document.getElementById('searchInput').value
    // Store value as variable
    // Pass value into function
    googleSearchNewTab(searchInput)

})

var baseURL = "https://google.com/search?q=";
var mockInput = 'How to center a div'
function googleSearchNewTab(searchInput) {
    var formattedInput = searchInput.replace(' ', '+')
    window.open(baseURL + formattedInput, "_blank");
}


// Open Weather API
/*
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
*/
// Get weather data for city from Open Weather API

console.log("hello")

function getCityInfo(city) {

    var API_PERIGON_URL = 'https://api.goperigon.com/v1/all?apiKey=726ce3f8-fa93-4ac6-b5bc-bd8b90801eba&title=' + city

    fetch(API_PERIGON_URL)
        .then(function (res) {
            if (!res.ok) throw new Error('oops')

            return res.json();
        })
        .then(function (data) {
            console.log('data :>>', data);
            var dump = document.createElement('pre');
            dump.textContent = JSON.stringify(data.articles[0], null, 2);
            document.body.appendChild(dump);

            console.log(data.articles[0].links[0]);

        })
        .catch(function (error) {
            console.error(error);
        });




    var API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=9e7196afba18b75635e3489a9e6a6b9e&units=imperial'

    fetch(API_WEATHER_URL)
        .then(function (res) {
            if (!res.ok) throw new Error('oops')

            return res.json();
        })
        .then(function (data) {
            console.log('data :>>', data);
            var dump = document.createElement('pre');
            dump.textContent = JSON.stringify(data.list[0], null, 2);
            document.body.appendChild(dump);

            console.log(data.list[0].main.temp);
        })
        .catch(function (error) {
            console.error(error);
        });
    //
};

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    getCityInfo(this.city.value);
});

// modal
// Grab search button, modal div, and background

var searchButton = document.querySelector('#search');
var modalBg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal')

searchButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});



