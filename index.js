const questions = [
  {
    question: "Is Frontend Mentor free?",
    answers: [
      {
        text: "Yes it is completely free"
      }
    ]
  }
]
const questionsa = [
  {
    question: "Can I use Frontend Mentor projects?",
    answers: [
      {
        text: "No you cannnot"
      }
    ]
  }
]
const questiona = [
  {
    question: "Can I use Frontend Mentor projects?",
    answers: [
      {
        text: "No you cannnot"
      }
    ]
  }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
     const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
       button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
   });
}

function  resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}