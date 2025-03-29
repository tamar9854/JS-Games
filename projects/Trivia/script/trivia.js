const ansA = document.getElementById("ansA");
const ansB = document.getElementById("ansB");
const ansC = document.getElementById("ansC");
const ansD = document.getElementById("ansD");
const correct = document.getElementById("correct");
const ansAText = document.getElementById("ansAText");
const ansBText = document.getElementById("ansBText");
const ansCText = document.getElementById("ansCText");
const ansDText = document.getElementById("ansDText");
const setQuestion = document.getElementById("question");
const submit = document.getElementById("submit");
const next = document.getElementById("next");
const resetBtn = document.getElementById("reset");

const questionBank = [
  {
    question: "who is the president of US?",
    ansA: "biden",
    ansB: "Trump",
    ansC: "Bibi",
    ansD: "Ubama",
    correctAns: "ansB",
  },
  {
    question: "What does the Cat Do?",
    ansA: "psss",
    ansB: "rrrr",
    ansC: "oofoof",
    ansD: "Meow",
    correctAns: "ansD",
  },
  {
    question: "What City is the capital of Israel?",
    ansA: "Tel Aviv",
    ansB: "Herzelia",
    ansC: "Jerusalem",
    ansD: "Ramat-Gan",
    correctAns: "ansC",
  },
  {
    question: "Which Company owns Iphone?",
    ansA: "Apple",
    ansB: "Samsung",
    ansC: "Windows",
    ansD: "Siumi",
    correctAns: "ansA",
  },
  {
    question: "what is the Spoken language in Israel?",
    ansA: "English",
    ansB: "Hebrew",
    ansC: "Russian",
    ansD: "Spanish",
    correctAns: "ansB",
  },
];

let Current = 0;

function loadQuestion() {
  setQuestion.innerHTML = questionBank[Current].question;
  ansAText.innerHTML = questionBank[Current].ansA;
  ansBText.innerHTML = questionBank[Current].ansB;
  ansCText.innerHTML = questionBank[Current].ansC;
  ansDText.innerHTML = questionBank[Current].ansD;
  correct.innerHTML = "";
  correct.style.color = "black";
}

function checkcorrect() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    const ans = selected.value;
    if (questionBank[Current].correctAns === ans) {
      correct.innerHTML = "Correct!";
      correct.style.color = "green";
    } else {
      correct.innerHTML = "Wrong!";
      correct.style.color = "red";
    }
    setTimeout(() => {
      Current++;
      if (Current < questionBank.length) {
        loadQuestion();
        selected.checked = false;
      } else {
        correct.innerHTML = "Game OVER";
      }
    }, 2000);
  } else {
    correct.innerHTML = "Enter an Answer";
  }
}
function reset() {
  Current = 0;
  loadQuestion();
}

submit.addEventListener("click", checkcorrect);
resetBtn.addEventListener("click", reset);

window.onload = loadQuestion();
