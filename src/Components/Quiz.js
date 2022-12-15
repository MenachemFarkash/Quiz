import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions, Buttons } from '../Helpers/QuestionBank';

function Quiz() {
    const { score, setScore, setGameState, answers, setAnswers, gameLength, setGameLength } =
        useContext(QuizContext);
    // ? sets the option chosen so the app can compare it to the current question without realying on
    // ? the state render timing.
    let optionChosen = '';
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // ? This function simply checkes if the option that you chose is the same as the answer in the Questions Bank.
    // ? and it adds a point to the final score state
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    // ? Cheks if the question number is equals to the game length that was set.
    // ? And if it does it changes the game state to "endScreen" But after cheking if the last question was correct
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        // ? Every time you finish the game it shuffels the questions and the order of the answers buttons.
        shufflebuttons(buttons);
        setGameState('endScreen');
    };

    // ? A not very simple way to random the order of the buttons, it simply creates an array of answers
    // ? shuffels it and sets the answer to the index in the array.
    const button1 = Questions[currentQuestion].optionA;
    const button2 = Questions[currentQuestion].optionB;
    const button3 = Questions[currentQuestion].optionC;
    const button4 = Questions[currentQuestion].optionD;
    const buttons = [button1, button2, button3, button4];

    const shufflebuttons = (buttons) => {
        for (let i = buttons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = buttons[i];
            buttons[i] = buttons[j];
            buttons[j] = temp;
        }
    };
    // ? this one repeates for every option chosen, it make sure the point is incremented if the answer is correct,
    // ? and also chekes if the game has ended or not, if not it brings the next question.
    const A = () => {
        optionChosen = 'A';
        console.log(optionChosen);

        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
            console.log('correct');
        }

        currentQuestion == gameLength - 1 ? finishQuiz() : nextQuestion();
    };
    const B = () => {
        optionChosen = 'B';
        console.log(optionChosen);

        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
            console.log('correct');
        }

        console.log(optionChosen);

        currentQuestion == gameLength - 1 ? finishQuiz() : nextQuestion();
    };
    const C = () => {
        optionChosen = 'C';
        console.log(optionChosen);

        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
            console.log('correct');
        }

        currentQuestion == gameLength - 1 ? finishQuiz() : nextQuestion();
    };
    const D = () => {
        optionChosen = 'D';

        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
            console.log('correct');
        }

        currentQuestion == gameLength - 1 ? finishQuiz() : nextQuestion();
    };
    // ? A very simple render, the question in the top and four buttons in the bottom,
    // ? The buttons are randomized each time you restart the game.
    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button className="question" onClick={A}>
                    {buttons[0]}
                </button>
                <button className="question" onClick={B}>
                    {buttons[1]}
                </button>
                <button className="question" onClick={C}>
                    {buttons[2]}
                </button>
                <button className="question" onClick={D}>
                    {buttons[3]}
                </button>
            </div>
        </div>
    );
}

export default Quiz;
