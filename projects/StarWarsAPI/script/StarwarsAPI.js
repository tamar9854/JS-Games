let show = document.querySelector(".result");

function showMovie(url) {
  const spinner = document.querySelector(".lds-spinner");
  spinner.style.visibility = "visible";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((film) => {
      show.innerHTML = "";

      const filmwrap = document.createElement("div");
      const title = document.createElement("h2");
      const describe = document.createElement("p");
      const year = document.createElement("p");
      filmwrap.classList.add("filmwrap");
      title.textContent = film.title;
      describe.textContent = film.opening_crawl;
      year.textContent = film.release_date;
      filmwrap.appendChild(title);
      filmdiv.appendChild(filmwrap);
      filmwrap.appendChild(describe);
      filmwrap.appendChild(year);

      spinner.style.visibility = "hidden";
    });
}

function getPeople() {
  const spinner = document.querySelector(".lds-spinner");
  spinner.style.visibility = "visible";
  fetch("https://swapi.dev/api/people")
    .then((res) => {
      return res.json();
    })
    .then((first) => {
      show.innerHTML = "";
      for (const p of first.results) {
        const alien = document.createElement("div");
        const title = document.createElement("h2");
        title.textContent = p.name;
        alien.appendChild(title);
        show.appendChild(alien);
        const describe = document.createElement("p");
        describe.textContent = p.birth_year;
        alien.appendChild(describe);
        const ol = document.createElement("ol");
        alien.appendChild(ol);
        for (const filmUrl of p.films) {
          const film = document.createElement("li");
          film.addEventListener("click", () => showMovie(filmUrl));
          film.textContent = filmUrl;
          ol.appendChild(film);
        }
      }
      spinner.style.visibility = "hidden";
    });
}

function getFilms() {
  const spinner = document.querySelector(".lds-spinner");
  spinner.style.visibility = "visible";
  fetch("https://swapi.dev/api/films")
    .then((res) => {
      return res.json();
    })
    .then((films) => {
      show.innerHTML = "";
      for (const result of films.results) {
        const filmwrap = document.createElement("div");
        const title = document.createElement("h2");
        const describe = document.createElement("p");
        const year = document.createElement("p");
        filmwrap.classList.add("filmwrap");
        title.textContent = result.title;
        describe.textContent = result.opening_crawl;
        year.textContent = result.release_date;
        filmwrap.appendChild(title);
        show.appendChild(filmwrap);
        filmwrap.appendChild(describe);
        filmwrap.appendChild(year);
      }
      spinner.style.visibility = "hidden";
    });
}

function getPlanets() {
  const spinner = document.querySelector(".lds-spinner");
  spinner.style.visibility = "visible";
  fetch("https://swapi.dev/api/planets")
    .then((res) => {
      return res.json();
    })
    .then((planet) => {
      show.innerHTML = "";
      for (const p of planet.results) {
        const planetdiv = document.createElement("div");
        const planetname = document.createElement("h2");
        const planetpp = document.createElement("p");
        planetdiv.classList.add("planetdiv");
        planetname.textContent = p.name;
        planetpp.textContent = `Citizens Number ${p.population}`;
        planetdiv.appendChild(planetname);
        show.appendChild(planetdiv);
        planetdiv.appendChild(planetpp);
      }
      spinner.style.visibility = "hidden";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("people").addEventListener("click", getPeople);
  document.getElementById("films").addEventListener("click", getFilms);
  document.getElementById("planets").addEventListener("click", getPlanets);
});
