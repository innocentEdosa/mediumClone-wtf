const questionCard = document.getElementById("questionCard");
const questionParagraph = document.querySelector("#questionParagraph");
const optionsWrapper = document.getElementById("options");
const count = document.getElementById("count");
const nextButton = document.getElementById("nextButton");
const userScore = document.getElementById("userScore");
const countDownElement = document.getElementById("countDown");
let countDown = 10;

let inputArray = [];

const questions = [
  {
    id: "1",
    question: "What is the minimum price for a house in lagos?",
    options: [
      "One Thousand",
      "Two Hundred Thousand",
      "Four Million",
      "One Fifty Million",
    ],
    answer: "One Fifty Million",
    score: 2,
  },
  {
    id: "2",
    question: "Which cohort is the best in WTF",
    options: [
      "Not this one",
      "This one",
      "The future one",
      "None of the above",
    ],
    answer: "This one",
    score: 1,
  },
  {
    id: "3",
    question: "One plus one",
    options: ["2", "4", "OneOne", "11"],
    answer: "2",
    score: 5,
  },
];

/**
 * total score is gotten by using reduce on the question array to sum all the score properties
 */
const totalScore = questions?.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);

let currenScore = 0;
const questionAnswerObject = {};

const questionMetaData = {
  currentQuestionIndex: 0,
  get currentQuestion() {
    return questions?.[this.currentQuestionIndex];
  },
};


const handleCountDown = () => {
 countDownElement.innerText = countDown;
 if(countDown === 0) {
  clearInterval(timeInterval)
  handleInputClick({
    target: {},
  })
  
  setTimeout(() => {
    nextButtonCallback()
  }, 1000)
  
 } else {
  countDown--;
 }
}

let timeInterval = setInterval(handleCountDown, 1000)

/**
 *
 * @param {*} e click event
 * handles user selection of an answer by populating data into
 * the questionAnswerObject object
 * @returns void
 */

const handleInputClick = function (e) {
  const currentQuestion = questionMetaData.currentQuestion;
  const value = e.target.value;
  if (questionAnswerObject[currentQuestion.id]) {
    return;
  }
  questionAnswerObject[currentQuestion.id] = value;
  if (value === currentQuestion.answer) {
    currenScore += currentQuestion.score;
  }

  inputArray.map((input) => {
    input.disabled = true;
    if (input.value === currentQuestion.answer) {
      input.parentNode.style.backgroundColor = "green";
      input.nextElementSibling.nextElementSibling.style.display = "inline";
    }
    if (input.value === value && input.value !== currentQuestion.answer) {
      input.parentNode.style.backgroundColor = "red";
    }
  });

  userScore.innerText = `${currenScore} / ${totalScore}`;
};

const loadQuestion = () => {
  questionParagraph.innerText = questionMetaData.currentQuestion.question;
  optionsWrapper.innerHTML = "";
  optionsWrapper.innerText = "";
  count.innerText = `${questionMetaData.currentQuestionIndex + 1} / ${
    questions?.length
  }`;
  userScore.innerText = `${currenScore} / ${totalScore}`;
  inputArray = [];

  questionMetaData.currentQuestion.options?.map((option, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const checkSpan = document.createElement("span");

    checkSpan.innerHTML = "&#10003";
    checkSpan.style.display = "none";

    input.id = index;
    input.type = "radio";
    input.name = "answer";
    input.value = option;
    input.addEventListener("click", handleInputClick);
    inputArray.push(input);

    const label = document.createElement("label");

    label.htmlFor = index;
    label.innerText = option;

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(checkSpan);

    optionsWrapper.appendChild(li);
  });
};


const nextButtonCallback = () => {
  if (questionMetaData.currentQuestionIndex < questions.length - 1) {
    countDown = 10;
    timeInterval = setInterval(handleCountDown, 1000)
    questionMetaData.currentQuestionIndex =
      questionMetaData.currentQuestionIndex + 1;
    loadQuestion();
  }
}
nextButton.addEventListener("click",nextButtonCallback );
loadQuestion();
