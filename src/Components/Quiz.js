import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions, Buttons } from '../Helpers/QuestionBank';

function Quiz() {
    const { score, setScore, setGameState, answers, setAnswers, gameLength, setGameLength } =
        useContext(QuizContext);
    let optionChosen = '';
    // const [optionChosen, setOptionChosen] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        shufflebuttons(buttons);
        setGameState('endScreen');
    };

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
