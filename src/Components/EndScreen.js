import React, { useContext, useState } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

// ? the end screen is used to display the score when the game ends and also print all the questions asked in
// ? the game and their answers.
function EndScreen() {
    const { score, setScore, setGameState, currentQuestion, gameLength, setGameLength } =
        useContext(QuizContext);
    // ? restart the Quiz state back to start and resets the score.
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    };
    // ? a simple finction that prints all the questions that was asked in the game and their answers.
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
            <h1 className="endScreenHeader" id="endScreenHeader">
                👏Quiz Done👏
            </h1>
            <h3 className="endScreenScore">
                {/* used to print the score based on correct answers out if the questions asked */}
                {score} / {gameLength}
            </h3>
            {/* a link that scrolls down to show the answers for the questions asked */}
            <a className="scrollDownLink" href="#scroll">
                <h4 className="scrollDown" id="scroll">
                    ⬇Scroll Down For Answers⬇
                </h4>
            </a>
            {/* uses a map finction to print the question and answers that was asked */}
            <div className="answers">{print}</div>
        </div>
    );
}

export default EndScreen;
