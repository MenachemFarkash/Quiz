import React, { useContext } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Contexts';
import { Questions, Buttons } from '../Helpers/QuestionBank';

export default function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContext);
    const shuffleQuestions = (Questions) => {
        for (let i = Questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = Questions[i];
            Questions[i] = Questions[j];
            Questions[j] = temp;
        }
    };
    const startAndShuffle = () => {
        setGameState('quiz');
        shuffleQuestions(Questions);
    };

    return (
        <div onClick={startAndShuffle} className="Menu">
            <h1>Start Game</h1>
        </div>
    );
}
