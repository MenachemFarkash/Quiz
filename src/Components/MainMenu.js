import React, { useContext } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Contexts';
import { Questions, Buttons } from '../Helpers/QuestionBank';

export default function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContext);
    // ? A very famous funciton that is used to shuffle an array
    // ? it simplly takes the last index of the array and switch it with another random one.
    const shuffleQuestions = (Questions) => {
        for (let i = Questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = Questions[i];
            Questions[i] = Questions[j];
            Questions[j] = temp;
        }
    };
    // ? funciton that happpends every time you press the start button
    // ? its shuffeling all the 50 qustions array in a random order.
    const startAndShuffle = () => {
        setGameState('quiz');
        shuffleQuestions(Questions);
    };
    // ? A simple clickable div.
    return (
        <div onClick={startAndShuffle} className="Menu">
            <h1>Start Game</h1>
        </div>
    );
}
