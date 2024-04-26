const questions = [
    {
        questions: "Which tag is used to define a hyperlink in HTML?",
        answer: [
            { text: "`<a>`", correct: true},
            { text: "`<link>`", correct: false},
            { text: "`<href>`", correct: false},
            { text: "`<hyper>`", correct: false},
        ]
    },
    {
        questions: "How can you center an element horizontally in CSS?",
        answer: [
            { text: "`text-align: center;`", correct: false},
            { text: "`margin: auto;`", correct: true},
            { text: "`align-items: center;`", correct: false},
            { text: "`position: center;`", correct: false},
        ]
    },
    {
        questions: "What will the following code output - console.log(typeof [])?",
        answer: [
            { text: "array", correct: false},
            { text: "object", correct: true},
            { text: "array[]", correct: false},
            { text: "undefined", correct: false},
        ]
    },
    {
        questions: "What does HTML stand for?",
        answer: [
            { text: "Hyper Transfer Markup Language", correct: false},
            { text: "Hyper Text Markup Language", correct: true},
            { text: "Home Tool Markup Language", correct: false},
            { text: "Hyperlink and Text Markup Language", correct: false},
        ]
    },
    {
        questions: "How can you make text italic in CSS",
        answer: [
            { text: "`font-style: italic;`", correct: true},
            { text: "`text-style: italic;`", correct: false},
            { text: "`italic: true;`", correct: false},
            { text: "`style: italic;`", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer_buttons");
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
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.array.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}