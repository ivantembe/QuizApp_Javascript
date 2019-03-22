--- THE QUIZ APP ---

This application runs completely on the console and displays random questions
with different answer and a Prompt for the user answer.  After the user inputs the
answer, the app returns radar the answer is CORRECT or NOT and continues the questions
if the user input is NOT 'exit'.


* HOW I BUILD IT:

1. created a IIFE (Immediately Invoked Function Expression) where a wrote all my code;

2. Initialised the global variables;

3. Build the Question constructor that accepted 3 parameters: question, answers & correct;

4. Using the prototype property, I created the displayQuestion method that displays the
  question & the available answers.
  Still in this method, I created a variable 'readline'(npm install readline-sync) that holds the 'readline-sync method'
  that accepts/read input data from the console.
  Also created the control structure to control the input answers and return the results;

5. Last, I create the function 'nextQuestion' where I declared the questions variables that hold
  the new instances from the 'Question' constructor & the randomQuestion function that returns random
  answers.
