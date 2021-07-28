// Software Engineering Project
Const quizDB = [{
    question: "Q1:What is the full form of HTML?",
    a: "Hello my land",
    b: "Hey text markup language",
    c: "HyperText Markup Language",
    d: "",
    ans1: "ans3"


},
{
    question: "Q1:What is the full form of CSS?",
    a: "Cascading style sheets",
    b: "Cascading style sheeps",
    c: "Cartoon style sheets",
    d: "Cascading super sheets",
    ans2: "ans1"


},
{
    question: "Q1:What is the full form of HTTP?",
    a: "HyperText Transfer Product",
    b: "HyperText Test Protocol",
    c: "Hey Transfer Protocol",
    d: "HyperText Transfer Protocol",
    ans3: "ans4"

},
{
    question: "Q1:What is the full form of JS?",
    a: "JavaScript",
    b: "JustScript",
    c: "JavaSuper",
    d: "JordenShoes",
    ans4: "ans1"


}
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getcheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)

}
submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length}✌ </h3>
        <button class="btn" onclick="location.reload()">Play Again! </button>
        `;
        showScore.classList.remove('scoreArea');

    }
});

