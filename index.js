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

function createQuestion() {
    if(questionNumber-1 < STORE.length) {
        return `<div class="question">
        <h2>${STORE[questionNumber-1].question}</h2>
        <form>
            <fieldset>
            <label class="answerChoice">
                <input type="radio" value="${STORE[questionNumber-1].answers[0]}" name="answer">
                <span>${STORE[questionNumber-1].answers[0]}</span>
            </label>
            <br>
            <label class="answerChoice">
                <input type="radio" value="${STORE[questionNumber-1].answers[1]}" name="answer">
                <span>${STORE[questionNumber-1].answers[1]}</span>
            </label>
            <br>
            <label class="answerChoice">
                <input type="radio" value="${STORE[questionNumber-1].answers[2]}" name="answer">
                <span>${STORE[questionNumber-1].answers[2]}</span>
            </label>
            <br>
            <label class="answerChoice">
                <input type="radio" value="${STORE[questionNumber-1].answers[3]}" name="answer">
                <span>${STORE[questionNumber-1].answers[3]}</span>
            </label>
            <br><br>
            <button type="submit" class="submitButton">Submit</button>    
        </fieldset>
    </form>
    
    <button type="button" class="moveOn hide">MoveOn</button>
 
    </div>`
    }
}

function updateQuestionNumber() {
    if (questionNumber < STORE.length) {
     questionNumber++;
     $('.questionNumber').text(questionNumber);
    }
 }
 
function renderQuestion() {
    $('.answerForm').html(createQuestion());
}



function showHeader() {
    $('header').removeClass('hide');
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

function updateNumberIncorrect() {
    numberIncorrect++;
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
       } else {userAnswerIncorrect();}
   })
}

function userAnswerCorrect() {
    updateNumberCorrect();
    $('form').remove();
    $('.question').html(correctAnswerDisplay());
}

function correctAnswerDisplay() {
    if (overallScore === 1 && questionNumber < STORE.length){
    return `<div class="correctAnswerDisplay">
    <h2>Correct!</h2>
    <h2>You Nailed it!</h2>
    <p>Maybe you're more goat than you first appear?</p>
    <img src="https://edenhills.files.wordpress.com/2011/03/dsc_0219.jpg"  class="babyGoatEating">
</div>
<button type="button" class="moveOn">MoveOn</button>`
    } else if (overallScore === 2 && questionNumber < STORE.length) {
        return `<div class="correctAnswerDisplay">
        <h2>Correct!</h2>
        <h2>A kid no more!</h2>
        <p>That's two correct! Well done!</p>
        <img src="https://i.imgur.com/XC5UeJr.jpg" class="babyGoatEating">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if (overallScore === 3 && questionNumber < STORE.length) {
        return `<div class="correctAnswerDisplay">
        <h2>Correct!</h2>
        <h2>Okay, so you think you can goat, huh?</h2>
        <p>Well, so far you can!</p>
        <img src="https://i.imgur.com/RoLCztT.jpg" class="babyGoatEating">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if (overallScore === 4 && questionNumber < STORE.length) {
        return `<div class="correctAnswerDisplay">
        <h2>Correct!</h2>
        <h2>Goat-tacular!!</h2>
        <p>That's four right, but who's counting?</p>
        <img src="http://static1.squarespace.com/static/539dffebe4b080549e5a5df5/53fcdceee4b0b801964aedb1/5a9ef692e2c483767c8ecb0b/1524340523771/beverage-cocktail-decorative-napkins-sawyer-goat-museum-outlets.jpg" class="babyGoatEating">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if (overallScore === 5) {
        return `<div class="correctAnswerDisplay">
        <h2>Correct!</h2>
        <h2>Wow.</h2>
        <p>That's...that's a perfect score.</p>
        <img src="https://s3.amazonaws.com/file.imleagues/Images/Teams/Uploaded/201802/201822142647906dafc8cf55e71f60e768dee7a828b291c.jpg" class="babyGoatEating">
    </div>
    <button type="button" class="seeResults">See Results!</button>`
    } else if (questionNumber === STORE.length) {
        return `<div class="correctAnswerDisplay">
        <h2>Correct!</h2>
        <h2>Way to finish strong!</h2>
        <p>Let's see how you did!</p>
        <img src="http://www.adobeacres.net/IMG_1499.JPG" class="babyGoatEating">
    </div>
    <button type="button" class="seeResults">See Results!</button>`
    }

}

function userAnswerIncorrect() {
    updateNumberIncorrect();
    $('form').remove();
    $('.question').html(incorrectAnswerDisplay());
}

function incorrectAnswerDisplay() {
    if (numberIncorrect === 1 && questionNumber < STORE.length) {
        return `<div class="incorrectAnswerDisplay">
        <h2>Incorrect!</h2>
        <h2>Oh No! You got that one wrong!</h2>
        <p>It's okay most KIDS don't know that one anyway ;)</p>
        <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
        <img src="https://i.imgflip.com/1bclgj.jpg">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if  (numberIncorrect === 2 && questionNumber < STORE.length) {
        return `<div class="incorrectAnswerDisplay">
        <h2>Incorrect!</h2>
        <h2>You got that one wrong?</h2>
        <p>I feel like you should have been able to use process of elimination there.</p>
        <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}. You lemon, you.</p>
        <img src="https://i0.wp.com/lh4.googleusercontent.com/-oG3nrZqC7BI/UZA-IiB136I/AAAAAAAAJDs/yZ-JD8v6l0A/s640/blogger-image--1256441326.jpg?ssl=1">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if (numberIncorrect === 3 && questionNumber < STORE.length) {
        return `<div class="incorrectAnswerDisplay">
        <h2>Incorrect!</h2>
        <h2>Okay, so a passing grade is now unobtainable.</h2>
        <p>You may use Google now.</p>
        <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
        <img src="https://images.rapgenius.com/24e49e891db44863cfb55d11dc31bd83.1000x666x1.jpg">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if (numberIncorrect === 4 && questionNumber < STORE.length) {
        return `<div class="incorrectAnswerDisplay">
        <h2>Incorrect!</h2>
        <h2>Now you've missed 4.</h2>
        <p>and you had Google.<p>
        <p>Did the doe one get you?</p>
        <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/44/db/96/doe-a-deer-a-female-deer.jpg">
    </div>
    <button type="button" class="moveOn">MoveOn</button>`
    } else if (numberIncorrect === 5) {
        return `<div class="incorrectAnswerDisplay">
        <h2>Incorrect!</h2>
        <h2>A perfect F!</h2>
        <p>Some teachers award full credit if you can do that!</p>  
        <p>I don't.</p>
        <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
        <img src="https://www.crowdfunder.co.uk/uploads/projects/14789.png?1424100369">
    </div>
    <button type="button" class="seeResults">See Results!</button>`
    } else if (questionNumber === STORE.length) {
        return `<div class="incorrectAnswerDisplay">
        <h2>Incorrect!</h2>
        <h2>Well you got the last one wrong.</h2>
        <p>Don't let it keep you down though!</p>
        <p>The correct answer was: ${STORE[questionNumber-1].correctAnswer}.</p>
        <img src="http://4.bp.blogspot.com/-exO_s6VltRQ/T1Yhjd-NYPI/AAAAAAAAF68/kHKJk0DNzS0/s1600/Screen+shot+2012-03-06+at+7.36.03+AM.png">
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
    return `<div class="quizEndScreen">
    <h1>Overall Score: ${overallScore}</h1>
    <h2>Goat Rating: ${goatRating[0]} - ${goatRating[1]}</h2>
    <button class="restartButton">Start Over?</button>
</div>`
}

function restartQuiz() {
    $('main').on('click', '.restartButton', function(event) {
        location.reload();
    })
}

function generateGoatRating() {
    if (overallScore === 0) {
        goatRating.push("0%");
        goatRating.push("You are no goat!")
    } //else if (overallScore === 1) {
        //goatRating.push("20%")
        //goatRating.push("Even cats are more goat than you are!")
    //}
}

generateGoatRating();
restartQuiz();
renderEndScreen();
checkAnswer();
nextQuestion();
quizStart();