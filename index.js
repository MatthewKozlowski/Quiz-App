let questionNumber = 0;
let overallScore = 0;
let numberIncorrect = 0;
let goatRating = [];

function quizStart() {
    $('.quizStart').on('click', '.startButton', function() {
        $(this).parent().remove();
        updateQuestionNumber();
        renderQuestion();
        showHeader();
    } )
}

function showHeader() {
    $('header').removeClass('hide');
}

function createQuestion() {
    if(questionNumber-1 < STORE.length) {
        return `<div class="question">
            <h2>${STORE[questionNumber-1].question}</h2>
            <form>
            <fieldset>
            <div class="answerContainer"></div>
            <br>
            <button type="submit" class="submitButton">Submit</button>    
            </fieldset>
            </form>
            <button type="button" class="moveOn hide">Move On</button>
            </div>`
    }
}

function renderQuestion() {
    $('.answerForm').html(createQuestion());
    for (let i = 0; i < 4; i++) {
    $('.answerContainer').append(createAnswerChoices(i));
    }
}

function createAnswerChoices(i) {
    return `<input type="radio" id="answerChoice${i}" value="${STORE[questionNumber-1].answers[i]}" name="answer">
            <label for="answerChoice${i}">${STORE[questionNumber-1].answers[i]}</label>
            <br>`
}

//function to check hidden radio buttons - IN PROGRESS

function selectAnswerChoice() {
    $('.answerForm').on('click', 'label', function(){
        $(this).checked.stopPropagation();
    })
}

function updateQuestionNumber() {
    if (questionNumber < STORE.length) {
     questionNumber++;
     $('.questionNumber').text(questionNumber);
    }
 }

function updateNumberCorrect() {
    overallScore++;
    $('.numberCorrect').text(overallScore);
}

function nextQuestion() {
    $('main').on('click', '.moveOn', function(event) {
        updateQuestionNumber();
        renderQuestion();
    } )
}

function checkAnswer() {
   $('main').on('submit', function(event) {
       event.preventDefault();
       $('.moveOn').removeClass('hide');
       let userChoice = $('input:checked');
       let userAnswer = userChoice.val();
       if (userAnswer === STORE[questionNumber-1].correctAnswer) {  
        userAnswerCorrect();
       } else {
            userAnswerIncorrect();
         }
   })
}

function userAnswerCorrect() {
    updateNumberCorrect();
    $('form').remove();
    $('.question').html(correctAnswerDisplay());
}

function correctAnswerDisplay() {
    if (questionNumber < STORE.length || overallScore === 5){
        return `<div class="correctAnswerDisplay">
            <h2>Correct!</h2>
            <h2>${FEEDBACK[overallScore-1].heading}</h2>
            <p>${FEEDBACK[overallScore-1].paragraph}</p>
            <img src="${FEEDBACK[overallScore-1].image}"  class="imageSizing">
            </div>
            ${FEEDBACK[overallScore-1].button}`
    } else if (questionNumber === STORE.length) {
        return `<div class="correctAnswerDisplay">
            <h2>Correct!</h2>
            <h2>Way to finish strong!</h2>
            <p>Let's see how you did!</p>
            <img src="http://www.adobeacres.net/IMG_1499.JPG" class="imageSizing">
            </div>
            <button type="button" class="seeResults">See Results!</button>`
      }
}

function userAnswerIncorrect() {
    numberIncorrect++;
    $('form').remove();
    $('.question').html(incorrectAnswerDisplay());
}

function incorrectAnswerDisplay() {
    if (questionNumber < STORE.length || numberIncorrect === 5) {
        return `<div class="incorrectAnswerDisplay">
            <h2>Incorrect!</h2>
            <h2>${FEEDBACK[numberIncorrect+4].heading}</h2>
            <p>${FEEDBACK[numberIncorrect+4].paragraph}</p>
            <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
            <img src="${FEEDBACK[numberIncorrect+4].image}" class="imageSizing">
            </div>
            ${FEEDBACK[numberIncorrect+4].button}`
    } else if (questionNumber === STORE.length) {
        return `<div class="incorrectAnswerDisplay">
            <h2>Incorrect!</h2>
            <h2>Well you got the last one wrong.</h2>
            <p>Don't let it keep you down though!</p>
            <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
            <img src="http://4.bp.blogspot.com/-exO_s6VltRQ/T1Yhjd-NYPI/AAAAAAAAF68/kHKJk0DNzS0/s1600/Screen+shot+2012-03-06+at+7.36.03+AM.png" class="imageSizing">
            </div>
            <button type="button" class="seeResults">See Results!</button>`
      }
}

function renderEndScreen() {
    $('main').on('click', '.seeResults', function(event){
        $('.question').remove();
        $('main').html(createEndScreen());
    })
}

function createEndScreen() {
    $('header').addClass('hide');
    generateGoatRating();
    return `<div class="quizEndScreen">
        <h1>Overall Score: ${overallScore}</h1>
        <h2>Goat Rating: ${goatRating[0]} - ${goatRating[1]}</h2>
        <button class="restartButton">Start Over?</button>
        </div>`
}

function generateGoatRating() {
    if (overallScore === 0) {
        goatRating.push("0%");
        goatRating.push("You are no goat!");
    } else if (overallScore === 1) {
        goatRating.push("20%");
        goatRating.push("Even cats are more goat than you are!");
    } else if (overallScore === 2) {
        goatRating.push("40%");
        goatRating.push("More goat than the average bear, but that isn't saying too much");
    } else if (overallScore === 3) {
        goatRating.push("60%");
        goatRating.push("Okay, so maybe you were raised on a farm?");
    } else if (overallScore === 4) {
        goatRating.push("80%");
        goatRating.push("Dang! Are you actually a goat and just misclicked with a hoof?");
    } else if (overallScore === 5) {
        goatRating.push("100%");
        goatRating.push("You aren't just a goat. You're the G.O.A.T");
    } 

}

function restartQuiz() {
    $('main').on('click', '.restartButton', function(event) {
        location.reload();
    })
}




restartQuiz();
renderEndScreen();
checkAnswer();
nextQuestion();
quizStart();