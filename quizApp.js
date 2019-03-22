(function (){
  var inputAnswer;

  /* Question construct function */
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  /* The prototype 'displayQuestion method' is here created and iterrate
    through all the answers */
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for(var i =0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }

    /* Prompt the question to the user using 'Readline-sync method' */
    var readline = require('readline-sync');
    inputAnswer = readline.question('What is the correct answer?');

    if(inputAnswer == this.correct) {
      console.log('You answer is correct. Congratulations!');
    } else if(inputAnswer === 'exit'){
      console.log('You have exit the game. Thanks for playing!');
    } else {
      console.log('Unfortunately you answer is wrong. Please try again!');
    }
  }


  function nextQuestion(){
    /* New Question function instances */
    var q1 = new Question('Is javascript cool?', ['Yes', 'No'], 0);
    var q2 = new Question('What JSON stands for?',
                          ['Javascript Server On', 'Javascript Object Nested', 'Javascript Object Notation'], 2);
    var q3 = new Question('Which framework is part of the Javascript framework family?',
                          ['.NET', 'React', 'Pyton', 'Bootstrap'], 1);

    /* Retunrnig a random question */
    var questions = [q1, q2, q3];
    var randomQuest = Math.floor(Math.random() * questions.length);

    /* Displaying the random answer to the console */
    questions[randomQuest].displayQuestion();

    /* Reload the game if inputAnswer is NOT 'exit' */
    if(inputAnswer !== 'exit') {
      console.log('-------------------------------------------------');
      nextQuestion();
    }

  }

  nextQuestion();

})();
