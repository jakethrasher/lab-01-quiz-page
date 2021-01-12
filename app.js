// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const resultDisplay = document.getElementById('results-display');
const quizButton = document.getElementById('quiz-button');
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    alert('Hello and welcome to my quiz!!');

    const confirmation = confirm('Do you wish to continue?');
    if (!confirmation) return;


    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    let correctAnswers = 0;


    const answerOne = prompt('Was the Moog developed by Robert Moog?');
    if (countsAsAYes(answerOne)) correctAnswers++;


    
    const answerTwo = prompt('Is the Moog a type of electric guitar?');
    if (!countsAsAYes(answerTwo)) correctAnswers++;

    const answerThree = prompt('Does the Moog appear on The Beatles song "Dig a Pony"? ');
    if (!countsAsAYes(answerThree)) correctAnswers++;

    alert('Congrats! The quiz is over! Hit OK to view your results at the bottom of the page.')


    
    resultDisplay.textContent = `Good job, ${firstName} ${lastName}, you got ${Math.round(correctAnswers / 3 * 100)}% right`;

});




