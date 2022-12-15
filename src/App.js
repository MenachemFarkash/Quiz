import './App.css';
import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import AboutMe from './Components/AboutMe';

import { QuizContext } from './Helpers/Contexts';

function App() {
    const [gameState, setGameState] = useState('menu');
    const [score, setScore] = useState(0);
    const [gameLength, setGemaLength] = useState(10);
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    };

    return (
        <div className="App">
            <div className="giveUpButton">
                <h1 className="mainHeader">What The Farkash⭐</h1>
                {gameState === 'aboutMe' ? (
                    <div className="links">
                        <a href="https://www.linkedin.com/in/menachem-farkash-939781256/" target="_blank">
                            <button className="linkedIn">LinkedIn🔗</button>
                        </a>
                        <a href="https://github.com/MenachemFarkash" target="_blank">
                            <button className="gitHub">GitHub📋</button>
                        </a>
                    </div>
                ) : gameState === 'endScreen' ? (
                    <button onClick={restartQuiz} className="restartButton">
                        Restart Quiz❓
                    </button>
                ) : (
                    <button onClick={() => setGameState('endScreen')} className="giveUp">
                        Give Up❓
                    </button>
                )}
            </div>
            <QuizContext.Provider
                value={{ gameState, setGameState, score, setScore, gameLength, setGemaLength }}
            >
                {gameState === 'menu' && <MainMenu />}
                {gameState === 'quiz' && <Quiz />}
                {gameState === 'endScreen' && <EndScreen />}
                {gameState === 'aboutMe' && <AboutMe />}
            </QuizContext.Provider>
            <div className="footer">
                {gameState === 'aboutMe' ? (
                    <button onClick={() => setGameState('menu')} className="aboutMe">
                        ❗Back To Main Menu❗
                    </button>
                ) : (
                    <button onClick={() => setGameState('aboutMe')} className="aboutMe">
                        🎫About Me🎫
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
