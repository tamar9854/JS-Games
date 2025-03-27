const cover = `disneycover.jpeg`;
const wrapimg = document.querySelector(".wrapimg");
const imagesName = [
  "bell.jpeg",
  "jasmin.jpeg",
  "snowhite.jpeg",
  "ariel.jpeg",
  "miki.jpeg",
  "mini.jpg",
];
let leftcount = imagesName.length;
let donecount = 0;
const left = document.getElementById("left");
const done = document.getElementById("done");
const btn = document.getElementById("btn");
const clickedPics = [];
const correctPics = [];
let cannotClick = false;

function createBoard() {
  wrapimg.innerHTML = "";
  const path = `images/`;
  const APPEARS_TWICE = 2;
  let counter = 0;
  const selectedPics = imagesName.map((v) => {
    return 0;
  });

  while (counter < imagesName.length * 2) {
    let pic = Math.floor(Math.random() * imagesName.length);
    if (selectedPics[pic] < APPEARS_TWICE) {
      const img1 = document.createElement("img");
      img1.src = `${path}${cover}`;
      img1.alt = `memory game img`;
      img1.classList.add("disneyC");

      img1.addEventListener("click", () => {
        if (
          cannotClick ||
          correctPics.includes(img1) ||
          clickedPics.includes(img1)
        ) {
          return;
        }
        if (clickedPics.length < 2) {
          img1.src = `${path}${imagesName[pic]}`;
          clickedPics.push(img1);
        }
        if (clickedPics.length == 2) {
          cannotClick = true;
          setTimeout(() => {
            if (clickedPics[0].src != clickedPics[1].src) {
              clickedPics[0].src = `${path}${cover}`;
              clickedPics[1].src = `${path}${cover}`;
            } else {
              correctPics.push(clickedPics[0]);
              correctPics.push(clickedPics[1]);
              leftcount--;
              donecount++;
              result();
            }
            clickedPics.splice(0, clickedPics.length);
            cannotClick = false;
          }, 1500);
        }
      });
      wrapimg.appendChild(img1);

      counter++;
      selectedPics[pic]++;
    }
  }
  console.log(selectedPics);
  result();
}

function result() {
  left.textContent = `left Pairs to Match:${leftcount}`;
  done.textContent = `done Pairs:${donecount}`;
}

function startover() {
  leftcount = imagesName.length;
  donecount = 0;
  correctPics.splice(0, correctPics.length);
  clickedPics.splice(0, clickedPics.length);
  createBoard();
}

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", startover);
  createBoard();
});
