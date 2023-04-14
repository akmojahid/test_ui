const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Aconcagua"],
    answer: "Mount Everest",
  },
];

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const question = quizData[currentQuestion].question;
  const options = quizData[currentQuestion].options;

  const questionHTML = `
      <h2>${question}</h2>
      <form>
        <input type="radio" name="answer" value="${options[0]}">
        <label>${options[0]}</label><br>
        <input type="radio" name="answer" value="${options[1]}">
        <label>${options[1]}</label><br>
        <input type="radio" name="answer" value="${options[2]}">
        <label>${options[2]}</label><br>
        <input type="radio" name="answer" value="${options[3]}">
        <label>${options[3]}</label><br>
      </form>
    `;

  questionContainer.innerHTML = questionHTML;
}

function validateAnswer() {
  const answer = document.querySelector('input[name="answer"]:checked');

  if (!answer) {
    return false;
  }

  if (answer.value === quizData[currentQuestion].answer) {
    score++;
  }

  return true;
}

function resetForm() {
  const form = document.querySelector("form");
  form.reset();
}

function displayScore() {
  const scoreHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`
  scoreContainer.innerHTML = scoreHTML;
}

displayQuestion();

nextBtn.addEventListener("click", () => {
  if (validateAnswer()) {
    currentQuestion++;

    if (currentQuestion === quizData.length) {
      displayScore();
    } else {
      displayQuestion();
      resetForm();
    }
  }
});
