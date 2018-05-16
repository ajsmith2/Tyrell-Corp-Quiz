let questionNumber = 0;
let score = 0;
"use strict";
function generateStartPage() {
  let startHtml =  `<div class="startPage">
          <div id="js-filler-text-right">You are not what you think</div>
          <div id="trapezoid"></div>
            <img src="https://darcynorman.net/wp-content/uploads/2017/04/voight-kampff.gif" alt="Blade Runner, voight-kampff gif" class="voight-kampff">
          <h1 class="beginningTitle">ARE YOU A SciFi BUFF?</h1>
            <h2 class="chance">HERE'S YOUR CHANCE TO PROVE IT</h2>
            <p class="quizInfoHeader">Take a quiz about notable movies in the Science Fiction genre.<p class="quizInfoTwo">The five movies we're looking at are: </p><p class="quizInfoFooter">Alien | Alien: Covenant | Annihilation | Blade Runner | Ex Machina </p>
          <button id="js-start-button">Initiate!</button>
          <div id="trapezoidTwo"></div>
          <div id="js-filler-text">You are </div>
          <div id="js-filler-text-right-two">You</div>
        </div>`;
  $('#target').html(startHtml); 
}

function generateQuestion() {
  let questionHtml = `<section class="generateQuestion" role="section">
          <div id="js-filler-text-right-question">you know</div>
          <div id="trapezoid"></div>
          <img id="js-question-img" src="${STORE[questionNumber].questionGif}" alt="${STORE[questionNumber].questionGifAlt}"></img>
          <h2 class="questioner">
            ${STORE[questionNumber].question}
          </h2>
          <div class="box"></div>
          <form role="search" id="js-answers-form"><fieldset>
            <legend>| SELECT  ANSWER |</legend>
              <label class="container">
                <input type="radio" name="answer" required>
                <span class="checkmark">${STORE[questionNumber].answers[0]}</span>
              </label>
              <label class="container">
                <input type="radio" name="answer">
                <span class="checkmark">${STORE[questionNumber].answers[1]}</span>
              </label>
              <label class="container">
                <input type="radio" name="answer">
                <span class="checkmark">${STORE[questionNumber].answers[2]}</span>
              </label>
              <label class="container">
                <input type="radio" name="answer">
                <span class="checkmark">${STORE[questionNumber].answers[3]}</span>
              </label>
            </fieldset>
            <button id="js-submit-button" type="submit">submit</button>
          </form>
          <div id="trapezoidTwo"></div>
          <div id="js-filler-text">answer me </div>
          <div id="js-filler-text-right-question-bottom">try</div>
        </section>`
  $('#target').html(questionHtml);
}

function generateCorrectAnswer() {
  let feedbackHtml = `<section id="js-correct-answer" role="section">
        <div id="js-filler-text-right-question">Initiate praise</div>
        <div id="trapezoid"></div>
        <img class="answerGif" src="${STORE[questionNumber].rightGif}" alt="${STORE[questionNumber].rightGifAlt}"></img>
        <p class="gotIt">
          YOU GOT IT RIGHT
        </p>
        <div class="box"></div>
        <div class="whyRight">${STORE[questionNumber].whyRight}</div>
        <button class="next" type="button">Next</button>
        <div id="trapezoidTwo"></div>
        <div id="js-filler-text">affirmation established</div>
        <div id="js-filler-text-right-question">user validated</div>
    </section>`;
  $('#target').html(feedbackHtml);
    
}

function generateIncorrectAnswer() {
  let feedbackHtml = `<section id="js-incorrect-answer" role="section">
          <div id="js-filler-text-right-question">system failure</div>
          <div id="trapezoid"></div>
            <img class="answerGif" src="${STORE[questionNumber].wrongGif}" alt="${STORE[questionNumber].wrongGifAlt}"></img>
            <p class="gotIt">
              YOU GOT IT WRONG
            </p>
          <!-- Right answer -->
          <p class="rightAnswerOne"> Correct answer:</p>
          <p class="rightAnswerTwo"> ${STORE[questionNumber].correctAnswer}</p>

          <!-- Description of why it's right -->
          <div class="whyRight">${STORE[questionNumber].whyRight}</div>
          <button class="next" type="button">Next</button>
          <div id="trapezoidTwo"></div>
          <div id="js-filler-text">commence</div>
          <div id="js-filler-text-right-question">emotional battery</div>
      </section>`;
  $('#target').html(feedbackHtml);

}
 

function generatePosFeedback() {
  let feedbackHtml = `<section class="feedbackPage" role="section">
      <div id="js-filler-text-right-question">initiate ego inflation</div>
      <div id="trapezoid"></div>
      <img class="js-pos-feedback-gif" src="http://49.media.tumblr.com/bf3d64548adfd3f584d2677e5ea0dc02/tumblr_o5x4pis0E81qc3ju8o3_540.gif" alt="Blade Runner gif">
      <p class="feedback">You got ${score} right!</p>
      <p class"js-generate-praise">Boy, you really know your stuff!</p>
      <p class="whyRight">Think you can do better?</p>
      <P class="whyRightFooter">Go on...</p>
      <button id="js-restart-button" type="button">Restart</button>
      <div id="trapezoidTwo"></div>
      <div id="js-filler-text-right-question">engage insecurity</div>
        </section>`;
  $('#target').html(feedbackHtml);
}
function generateNegFeedback() {
  let feedbackHtml = `<section class="feedbackPage" role="section">
      <div id="js-filler-text-right-question">Self-destruction imminent</div>
      <div id="trapezoid"></div>
      <img class="js-neg-feedback-gif" src="https://media.giphy.com/media/3og0IMcKtILUJMskrC/giphy.gif" alt="Blade Runner 2049, Blade Runner "K" beaten gif">
          <p class="feedback">You got ${score} right!</p>
          <p class="js-feedback-phrase"> (T.T ) ( T.T)</p>
          <p class="whyRight">Aw, No. No. It okay. Don't be cry.</p>
          <p class="whyRight">You can always try again...</p>
          <button id="js-restart-button" type="button">Restart</button>
          <div id="trapezoidTwo"></div>
          <div id="js-filler-text-right-question">Encourage re-entry</div>
        </section>`
      $('#target').html(feedbackHtml);
}
function updateScore() {
  $('#currentQuestionNumber').text(questionNumber + 1);
  $('#score').text(score);
}
function returnStartPage() {
  
}
function attachEventListeners() {
  // attach start button listener
  console.log('running');
  $('main').on('click', '#js-start-button', function(event) {
    // runs when start button is clicked
    console.log('start button clicked');
    generateQuestion();
    updateScore();
  });
  
  // attach form submit listener
  $('main').on('submit', function(event) {
    event.preventDefault();
    let answer = $('input:checked').siblings('span').text();
    let correctAnswer = ''
    console.log('form submitted', answer);
    if (answer === STORE[questionNumber].correctAnswer) {
      // correct
      generateCorrectAnswer();
      score++;
      updateScore();
      // increment score!
      
    }
    else {
      generateIncorrectAnswer();
    }
    
    // check against the correct answer
  
  });
  // attach next button listener
  $('main').on('click', '.next', function(event) {
    questionNumber++;
    if (questionNumber < STORE.length) {
      // probably increment question number here
      updateScore();
      generateQuestion();
    }
    else if (score <= 6) {
      // and then call generateQuestion()
      console.log(score);
      event.preventDefault();
      generateNegFeedback();
    }
    else {
      generatePosFeedback();
    }
  });

  // attach restart button listener
  $('main').on('click', '#js-restart-button', function(event) {
    questionNumber = 0;
    score = 0;
    updateScore();
    location.reload();
    console.log('restart');
  });
}
 
function startFunction() {
  generateStartPage();
  attachEventListeners();
}
$(startFunction);