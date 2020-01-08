
// All code in here for a reason

class Question {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer
    }
}

Question.prototype.correctionAnswer = function(choice) {
    return choice === this.answer;
}



//CONTROLLER

class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
        this.percentage = 20;
    }    
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

    if(this.getQuestionIndex().correctionAnswer(answer)) {
    this.score++;
    }
    this.questionIndex ++;
    this.percentage ++
}





//Data

const questions = [
    new Question("which day of the week did christmas fall into in 2019?", ['Monday', "Tuesday", "Wednesday","Saturday"], "Wednesday"),
    new Question("Which programming language is the king of AI", ["java", "Go", "javascript", "python"], "python"),
    new Question("what country built Gionee Phones", ["Nigeria", "China", "USA", "Turkey"], "China"),
    new Question("who is the richest man in Afica in 2019", ["Dangote", "john ifem", "Stanley Okechukwu", "thompson"], "Dangote"),
    new Question("which of the options is the best paradynm for programming", ["OOP", "functional programming", "ogumented Logic", "john`s programming"], "OOP")
]; 

var quiz = new Quiz(questions);

function populate() {
    if(quiz.isEnded()) {
        showScores()

    }else {
        const questionElement = document.querySelector('.quest');
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            const opt = document.getElementById("opt" + i);
            opt.innerHTML = choices[i];

            guess("btn" + i, choices[i]); 
        }
        showProgress()
    }
}

function showScores() {
    let checkElement = document.querySelector('.qh');
        checkElement.innerHTML =  `<img src="./assert/img/checkmark-flat.svg" alt="">`
    let completeElement = document.querySelector('.quest');
        completeElement.innerHTML = "Complete";

        var element = document.querySelector('.quiz__options');
        element.innerHTML = `<div class="score">
                                <h1>Result</h1>
                                <h3 id='score'>Your scores : ${quiz.score}</h3> 
                             </div>`;
       
}

function guess(id, guess) {
    let button = document.querySelector(`.${id}`);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    let element = document.getElementById("progress");
        element.style.width = `${quiz.percentage * 4}%`;
        element.innerHTML = quiz.percentage
}

populate()































// var questions = [
//     {
//         question: "which day of the week did christmas fall into in 2019?",
//         options: ['Monday', "Tuesday", "Wednesday","Saturday"],
//         answer: "Wednesday"
//     },
//     {
//         question: "Which programming language is the king of AI",
//         options: ["java", "Go", "javascript", "python"],
//         answer: "python"
//     },
//     {
//         question: "what country built Gionee Phones",
//         options: ["Nigeria", "China", "USA", "Turkey"],
//         answer: "China"
//     },
//     {
//         question: "who is the richest man in Afica in 2019",
//         options: ["Dangote", "john ifem", "Stanley Okechukwu", "thompson"],
//         answer: "Dangote"
//     },
//     {
//         question: "which of the options is the best paradynm for programming",
//         options: ["OOP", "functional programming", "ogumented Logic", "john`s programming"],
//         answer: "OOP"
//     },
// ]


// let isEnded = function() {
//     return questions.length === quizProgress.questionIndex;
// };

// var quizProgress = {
//     questionIndex: 0,
//     score: 0,
// }


// function populate() {
//     if(isEnded()) {
//         // showScores();
//         console.log('hi')
//     }else {

//             let element = document.getElementById('quest');
//             element.innerHTML = questions[0].question;

//             var nextBtn = document.querySelector('.next');
//             nextBtn.addEventListener('click', function() {
              
//             var num = 0;
//                 for(var num = 0; num < questions.length; num++) {
//                 element.innerHTML = questions[num].question
//                 console.log(questions[num].question)
//             }
                
//             })

//             //   for(var e = 0; e < questions[i].options.length; e++) {
//             //     var placeOptions = document.getElementById(`opt${e}`);
//             //     placeOptions.innerHTML = questions[i].options[e];
//             //   }
                
// }
    
// }

// populate()



















