import React, { useContext, useState } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

function EndScreen() {
    const { score, setScore, setGameState, currentQuestion, gameLength, setGameLength } =
        useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    };
    let firstTwenty = Questions.slice(0, gameLength);
    let print = firstTwenty.map((val, index) => {
        return (
            <div key={index}>
                <div className="questionResult">
                    <p>Question: {val.prompt}</p>

                    <p>Answer: {val.result}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="endScreen">
            <h1 className="endScreenHeader">👏Quiz Done👏</h1>
            <h3 className="endScreenScore">
                {score} / {gameLength}
            </h3>
            <h4 className="scrollDown">⬇Scroll Down For Answers⬇</h4>

            <div className="answers">{print}</div>
        </div>
    );
}

export default EndScreen;
