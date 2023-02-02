const quizData = [
    {
        question: 'Who was the first black president?',
        a: 'Denzel Washington',
        b: 'Chris Tucker',
        c: 'Barack Obama',
        d: 'Kevin Hart',
        correct: 'c'
    },{
        question: 'What is the shape Of the earth?',
        a: 'Circle',
        b: 'Square',
        c: 'Flat',
        d: 'Diamond',
        correct: 'a'
    },{
        question: 'In What year did Jamaica gain independence?',
        a: '2001',
        b: '1962',
        c: '1960',
        d: '1971',
        correct: 'b'
    },{
        question: 'What are the 3 primary colors?',
        a: 'Pink,yellow,blue',
        b: 'Red,Blue,Orange',
        c: 'Blue,Green,White',
        d: 'Red,Blue,Green',
        correct: 'd'
    },{
        question: 'What does the STEM abbreviation stand for?',
        a: 'Systm Electronic Management',
        b: 'Software Traning and Education Management',
        c: 'Science,Technology,Engineering and Mathematics',
        d: 'Science,Technical drawing,EDPM and Math',
        correct: 'c'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});