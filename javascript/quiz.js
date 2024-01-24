const questionCard = document.getElementById('questionCard');
const questionParagraph = document.querySelector('#questionParagraph');
const optionsWrapper = document.getElementById('options');
const count = document.getElementById('count');
const nextButton = document.getElementById('nextButton');



const questions = [
  {
    question: "What is the minimum price for a house in lagos?",
    options: [
      "One Thousand",
      "Two Hundred Thousand",
      "Four Million",
      "One Fifty Million",
    ],
    answer: "One Fifty Million",
  },
  {
    question: "Which cohort is the best in WTF",
    options: [
      "Not this one",
      "This one",
      "The future one",
      "None of the above",
    ],
    answer: "This one",
  },
  {
    question: "One plus one",
    options: ["2", "4", "OneOne", "11"],
    answer: "2",
  },
];


const questionMetaData = {
    currentQuestionIndex: 0,
    get currentQuestion() {
        return questions?.[this.currentQuestionIndex]
    }
}

const loadQuestion = () => {
    questionParagraph.innerText = questionMetaData.currentQuestion.question
    optionsWrapper.innerHTML = "";
    optionsWrapper.innerText = ""
    count.innerText = `${questionMetaData.currentQuestionIndex + 1} / ${questions?.length}`

    questionMetaData.currentQuestion.options?.map((option, index) => {
         const li = document.createElement('li');
         const input = document.createElement('input');


         input.id=index;
         input.type="radio"
         input.name="answer"
         input.value=option

         const label = document.createElement('label')
         
         label.htmlFor=index;
         label.innerText=option

         li.appendChild(input)
         li.appendChild(label)

         optionsWrapper.appendChild(li)

    })
}

nextButton.addEventListener('click', () => {
    if(questionMetaData.currentQuestionIndex < questions.length - 1) {
        questionMetaData.currentQuestionIndex = questionMetaData.currentQuestionIndex + 1;
        loadQuestion()
    }
})
loadQuestion()




