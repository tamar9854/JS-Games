let wrap = document.getElementById("wrap");
let search = document.getElementById("search");
let btn = document.getElementById("btn");
let show = document.getElementById("show");
let nameC = document.getElementById("name");
let imgF = document.querySelector(".imgF");
let capital = document.getElementById("capital");
let people = document.getElementById("people");
let lan = document.getElementById("lan");
let errorMessage = document.getElementById("errorMessage");

function clean() {
  document.body.style.backgroundImage = "none";
  search.value = "";
  document.body.style.backgroundColor = "#edeefe";
}

async function getCountries(countryName) {
  try {
    if (!countryName) {
      errorMessage.innerText = "Please enter a country name!";
    }
    const url = `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,capital,population,languages`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Something is Going wrong..");
    }
    const data = await res.json();
    console.log(data);
    nameC.textContent = `country name:${data[0].name.common}`;
    imgF.src = data[0].flags.png;
    imgF.alt = data[0].flags.alt;
    capital.textContent = ` Capital City:${data[0].capital}`;
    people.textContent = `Citizen number:${data[0].population}`;
    lan.textContent = `language:`;
    for (const lang in data[0].languages) {
      lan.textContent += ` ${data[0].languages[lang]}`;
    }
  } catch (error) {
    console.error("error Fatching", error);
  }
}

btn.addEventListener("click", () => {
  let countryName = search.value;
  clean();
  getCountries(countryName);
});
