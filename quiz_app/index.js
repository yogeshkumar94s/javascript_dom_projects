const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
    correctAnswer: "Blue Whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

function showQuestion(question) {
  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";

  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(choice));
    choicesElement.appendChild(button);
  });
}

function checkAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedChoice === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.style.display = "none";
  submitButton.style.display = "none";
  resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
  resultElement.classList.remove("hidden");
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionContainer.style.display = "block";
  submitButton.style.display = "block";
  resultElement.textContent = "";
  resultElement.classList.add("hidden");
  showQuestion(questions[currentQuestionIndex]);
}

resetButton.addEventListener("click", resetQuiz);

showQuestion(questions[currentQuestionIndex]);
submitButton.addEventListener("click", () => checkAnswer());
