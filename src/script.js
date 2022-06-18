// set weather
function cityWeather(response) {
  let currentTemerature = document.querySelector("#degree");
  let currentCity = document.querySelector("#current-city");
  currentTemerature.innerHTML = Math.round(response.data.main.temp);
  currentCity.innerHTML = response.data.name;
}

//set city
function citySearch(event) {
  event.preventDefault();
  //let oldCity = document.querySelector("#current-city");
  let newCity = document.querySelector("#new-city");
  //oldCity.innerHTML = newCity.value;

  let keyApi = "b92d2cf75492770cfbea71584322a36b";
  let weatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${keyApi}&units=metric`;
  axios.get(weatherRequest).then(cityWeather);
}

//find place
function handlePosition(position) {
  let keyApi = "b92d2cf75492770cfbea71584322a36b";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let findPlace = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyApi}&units=metric`;
  axios.get(findPlace).then(cityWeather);
}

function myPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

// Set a date and hours
let now = new Date();

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}

let hours = now.getHours();

let time = document.querySelector("#hours");
time.innerHTML = `${hours}:${minutes}`;

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Sunday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];

let weekDay = document.querySelector("#day");
weekDay.innerHTML = `${day}`;

let yearMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = yearMonth[now.getMonth()];
let year = now.getFullYear();
let dayNum = now.getDate();

let fullDate = document.querySelector("#date");
fullDate.innerHTML = `${dayNum} ${month} ${year}`;

// Find weather by city
let search = document.querySelector("form");
search.addEventListener("submit", citySearch);

// Find my place
let findMe = document.querySelector("#find-my-place");
findMe.addEventListener("click", myPosition);
