const questions = [
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        answers: [
            { text: "<a>", correct: true},
            { text: "<link>", correct: false},
            { text: "<href>", correct: false},
            { text: "<hyper>", correct: false},
        ]
    },
    {
        question: "How can you center an element horizontally in CSS?",
        answers: [
            { text: "`text-align: center;`", correct: false},
            { text: "`margin: auto;`", correct: true},
            { text: "`align-items: center;`", correct: false},
            { text: "`position: center;`", correct: false},
        ]
    },
    {
        question: "What will the following code output - console.log(typeof [])?",
        answers: [
            { text: "array", correct: false},
            { text: "object", correct: true},
            { text: "array[]", correct: false},
            { text: "undefined", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Transfer Markup Language", correct: false},
            { text: "Hyper Text Markup Language", correct: true},
            { text: "Home Tool Markup Language", correct: false},
            { text: "Hyperlink and Text Markup Language", correct: false},
        ]
    },
    {
        question: "How can you make text italic in CSS",
        answers: [
            { text: "`font-style: italic;`", correct: true},
            { text: "`text-style: italic;`", correct: false},
            { text: "`italic: true;`", correct: false},
            { text: "`style: italic;`", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_btns");
const nextButton = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
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


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.displau = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();