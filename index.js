let questionNumber = 0;
let overallScore = 0;

function createQuestion() {
    if(questionNumber < STORE.length) {
        return `<div class="question">
        <h2>What is a baby goat called?</h2>
        <form>
            <fieldset>
            <label class="answerChoice">
                <input type="radio" value="" name="">
                <span>A baby</span>
            </label>
            <br>
            <label class="answerChoice">
                <input type="radio" value="" name="">
                <span>A child</span>
            </label>
            <br>
            <label class="answerChoice">
                <input type="radio" value="" name="">
                <span>A kid</span>
            </label>
            <br>
            <label class="answerChoice">
                <input type="radio" value="" name="">
                <span>A youth</span>
            </label>
            <br><br>
            <button type="submit" class="submitButton">Submit</button>    
        </fieldset>
    </form>
    <button type="submit" class="moveOn">MoveOn</button>
    </div>`
    }
}

function renderQuestion() {
    $('.answerForm').html(createQuestion());
}

function quizStart() {
    $('.quizStart').on('click', '.startButton', function() {
        $(this).parent().remove();
        renderQuestion();
        updateQuestionNumber();
    } )
}

function increaseQuestionNumber() {
    if(questionNumber < STORE.length) {
        questionNumber++;
    }
}

function updateQuestionNumber() {
        $('.questionNumber').text(questionNumber+1);
}
function updateNumberCorrect() {

}

quizStart();