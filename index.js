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
        return `<div class="questionContainer">
            <h2 class="question">${STORE[questionNumber-1].question}</h2>
            <form>
            <fieldset>
            <div class="answerContainer"></div>
            <br>
            <button type="submit" class="submitButton"><span>Submit</span></button>    
            </fieldset>
            </form>
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
            <label for="answerChoice${i}">${STORE[questionNumber-1].answers[i]}</label>`
}

function selectAnswerChoice(event) {
    $('.answerForm').on('click', 'label', function(){
        $('label').checked;
        event.stopPropagation();
    })
}

function updateQuestionNumber() {
    if (questionNumber < STORE.length) {
     questionNumber++;
     $('.questionNumber').text('Question: '+questionNumber+'/5');
    }
 }

function updateNumberCorrect() {
    overallScore++;
    $('.numberCorrect').text('Correct: '+overallScore+'/5');
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
    $('.questionContainer').html(correctAnswerDisplay());
}

function correctAnswerDisplay() {
    if (questionNumber < STORE.length || overallScore === 5){
        return `<div class="correctAnswerDisplay">
            <h2 class="questionResultDisplay">Correct!</h2>
            <h2 class="questionResultMessage_1">${FEEDBACK[overallScore-1].heading}</h2>
            <img src="${FEEDBACK[overallScore-1].image}"  class="imageSizing" alt="A image of an encouraging goat">
            <p class="questionResultMessage_2">${FEEDBACK[overallScore-1].paragraph}</p>
            </div>
            ${FEEDBACK[overallScore-1].button}`
    } else if (questionNumber === STORE.length) {
        return `<div class="correctAnswerDisplay">
            <h2 class="questionResultDisplay">Correct!</h2>
            <h2 class="questionResultMessage_1">Way to finish strong!</h2>
            <img src="http://www.adobeacres.net/IMG_1499.JPG" class="imageSizing alt="A image of a goat in adorable pajamas">
            <p Class="questionResultMessage_2">Let's see how you did!</p>
            </div>
            <button type="button" class="seeResults"><span>See Results!</span></button>`
      }
}

function userAnswerIncorrect() {
    numberIncorrect++;
    $('form').remove();
    $('.questionContainer').html(incorrectAnswerDisplay());
}

function incorrectAnswerDisplay() {
    if (questionNumber < STORE.length || numberIncorrect === 5) {
        return `<div class="incorrectAnswerDisplay">
            <h2 class="questionResultDisplay">Incorrect!</h2>
            <h2 class="questionResultMessage_1">${FEEDBACK[numberIncorrect+4].heading}</h2>
            <p id="actualCorrectAnswer">The correct answer was: <span>${STORE[questionNumber-1].correctAnswer}</span>.</p>
            <img src="${FEEDBACK[numberIncorrect+4].image}" class="imageSizing" alt="An image of a sad, adorable goat">
            <p class="questionResultMessage_2">${FEEDBACK[numberIncorrect+4].paragraph}</p>
            </div>
            ${FEEDBACK[numberIncorrect+4].button}`
    } else if (questionNumber === STORE.length) {
        return `<div class="incorrectAnswerDisplay">
            <h2 class="questionResultDisplay">Incorrect!</h2>
            <h2 class="questionResultMessage_1">Well you got the last one wrong.</h2>
            <p id="actualCorrectAnswer">The correct answer was: <span>${STORE[questionNumber-1].correctAnswer}</span>.</p>
            <img src="http://4.bp.blogspot.com/-exO_s6VltRQ/T1Yhjd-NYPI/AAAAAAAAF68/kHKJk0DNzS0/s1600/Screen+shot+2012-03-06+at+7.36.03+AM.png" class="imageSizing" alt="An image of a motivational goat">
            <p class="questionResultMessage_2">Don't let it keep you down though!</p>
            </div>
            <button type="button" class="seeResults"><span>See Results!</span></button>`
      }
}

function renderEndScreen() {
    $('main').on('click', '.seeResults', function(event){
        $('.questionContainer').remove();
        $('main').html(createEndScreen());
    })
}

function createEndScreen() {
    $('header').addClass('hide');
    generateGoatRating();
    if (overallScore >= 1){
        return `<div id="quizEndScreen">
            <h1 id="finalScoreDisplay">Overall Score: ${overallScore}</h1>
            <h2 id="goatRating">Goat Rating: ${goatRating[0]}</h2>
            <h2 id="goatRatingMessage">${goatRating[1]}</h2>
            <img src="${FEEDBACK[overallScore-1].image}" id="finalImageSizing" alt="A picture of an adorable goat"><br>
            <button class="restartButton"><span>Start Over?</span></button>
            </div>`
    } else if (overallScore === 0) {
        return `<div id="quizEndScreen">
            <h1 id="finalScoreDisplay">Overall Score: ${overallScore}</h1>
            <h2 id="goatRating">Goat Rating: ${goatRating[0]}</h2>
            <h2 id="goatRatingMessage">${goatRating[1]}</h2>
            <img src="${FEEDBACK[overallScore].image}" id="finalImageSizing" alt="A picture of an adorable goat"><br>
            <button class="restartButton"><span>Start Over?</span></button>
            </div>`

    }        
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