var submitInput = document.querySelector('#city').value;


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
            // var dump = document.createElement('pre');
            // dump.textContent = JSON.stringify(data.articles[0], null, 2);
            // document.body.appendChild(dump);

            console.log(data.articles);

            renderNewsData(data.articles);
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
            // var dump = document.createElement('pre');
            // dump.textContent = JSON.stringify(data.list, null, 2);
            // document.body.appendChild(dump);

            renderWeatherStrip(data.list);

            console.log(data.list[0].main.temp);
        })
        .catch(function (error) {
            console.error(error);
        });
    //
};

// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     getCityInfo(this.city.value);
// });

// modal
// Grab search button, modal div, and background

var searchButton = document.querySelector('#search');

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    submitInput = document.querySelector('#city').value
    getCityInfo(submitInput)
    document.querySelector('#city').value = ''
});



function createWeatherCard(firstCard) {

    var cardEl = document.createElement('article');
    cardEl.setAttribute('class', 'card m-3');
    cardEl.setAttribute('id', 'city-info')
    cardEl.setAttribute('class', 'has-text-centered')

    var bodyEl = document.createElement('div');
    bodyEl.setAttribute('class', 'card-body bg-warning text-black');
    //
    var divOneEl = document.createElement('div');
    divOneEl.setAttribute('id', 'city-date');
    //

    var cityNameEl = document.createElement('h3');
    cityNameEl.setAttribute('class', 'is-size-1 has-text-weight-bold');
    cityNameEl.textContent = submitInput;

    var dateEl = document.createElement('p');
    dateEl.setAttribute('class', 'is-size-3');
    dateEl.innerHTML = dayjs().add(0, 'day').format('MMMM, D, YYYY');
    //
    var divTwoEl = document.createElement('div');
    divTwoEl.setAttribute('id', 'weather-icon');
    //
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', "https://openweathermap.org/img/wn/" + firstCard.weather[0].icon + "@2x.png");
    imgEl.setAttribute('alt', 'weather icon');
    imgEl.setAttribute('class', 'card-img-middle');
    //
    var divThreeEl = document.createElement('div');
    divThreeEl.setAttribute('id', 'temp-wind-humidity');
    //
    var tempEl = document.createElement('p');
    tempEl.setAttribute('class', 'is-size-3');
    tempEl.textContent = 'Temp: ' + firstCard.main.temp + ' degrees';

    var windEl = document.createElement('p');
    windEl.setAttribute('class', 'is-size-3');
    windEl.textContent = 'Wind: ' + firstCard.wind.speed + ' mph';

    var humidityEl = document.createElement('p');
    humidityEl.setAttribute('class', 'is-size-3');
    humidityEl.textContent = 'Humidity: ' + firstCard.main.humidity + ' percent';

    divOneEl.append(cityNameEl, dateEl);
    divTwoEl.append(imgEl);
    divThreeEl.append(tempEl, windEl, humidityEl);
    bodyEl.append(divOneEl, divTwoEl, divThreeEl);

    //bodyEl.append(cityNameEl, dateEl, imgEl, tempEl, windEl, humidityEl);

    cardEl.append(bodyEl);

    return cardEl;
};

function renderWeatherStrip(cardOne) {
    var clearScreenHeader = document.getElementById('city-info');
    if (clearScreenHeader) {
        clearScreenHeader.remove();
    }
    var outcomeEl = document.getElementById('weather-data');
    var weatherStrip = createWeatherCard(cardOne[0]);
    outcomeEl.append(weatherStrip);
}


function createNewsCard(headlines) {

    var bodyEl = document.createElement('div');
    bodyEl.setAttribute('class', 'tile is-parent is-4');
    bodyEl.setAttribute('id', 'news-box')

    var tileEl = document.createElement('article');
    tileEl.setAttribute('class', 'tile is-child notification is-info');

    var headlineEl = document.createElement('a');
    headlineEl.setAttribute('class', 'title');
    headlineEl.textContent = headlines.title;
    headlineEl.setAttribute('href', headlines.url)

    var storyEl = document.createElement('p');
    storyEl.textContent = headlines.summary;

    tileEl.append(headlineEl, storyEl);

    bodyEl.append(tileEl);

    return bodyEl;
};


function renderNewsData(newsArticles) {
    var clearScreen = document.querySelectorAll('#news-box');
    if (clearScreen.length) {
        clearScreen.forEach(el => {
            el.remove();
        })

    }
    var resultsEl = document.getElementById('news-tiles');
    for (i = 1; i < 4; i++) {
        var newsCard = createNewsCard(newsArticles[i]);

        resultsEl.append(newsCard);
    }
};