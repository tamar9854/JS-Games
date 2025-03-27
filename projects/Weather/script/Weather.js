const APIKEY = "773166c40a3dd363988f7ea40ad77b0d";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&units=metric&q=`;
const cityName = document.getElementById("inputCity");
const button = document.querySelector("button");
const h1 = document.getElementById("city");
const decription = document.getElementById("decription");
const temp = document.getElementById("temp");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");

let icon = "🌞";

function getWeather(city) {
  try {
    fetch(URL + city)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 200) {
          errorMessage.innerText = "";
          h1.innerText = data.name;
          temp.innerText = data.main.temp;
          decription.innerText = data.weather[0].description;
          const icon = data.weather[0].icon;
          weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          cityName.value = "";
        } else {
          h1.innerText = "";
          temp.innerText = "";
          decription.innerText = "";
          weatherIcon.src = "";
          errorMessage.innerText = "City not found...";
        }
      });
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  getWeather(cityName.value);
});
