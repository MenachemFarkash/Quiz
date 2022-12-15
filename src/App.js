import './App.css';
import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import AboutMe from './Components/AboutMe';

import { QuizContext } from './Helpers/Contexts';

function App() {
    // ? some basic hooks to set the game score , game state and the length of the game
    const [gameState, setGameState] = useState('menu');
    const [score, setScore] = useState(0);
    const [gameLength, setGemaLength] = useState(5);
    // ? restarts the game and resets the score.
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    };
    // ? The way i used to switch between the buttons in the page is by using hooks
    //? it depends on the gameState.
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
            {/* the QuizContext Provider command is used to import and make sure all the components inside the app will
            be able to use the Question Bank */}
            <QuizContext.Provider
                value={{ gameState, setGameState, score, setScore, gameLength, setGemaLength }}
            >
                {/* this part is used to determen which component will be renderd based on the gameState  */}
                {gameState === 'menu' && <MainMenu />}
                {gameState === 'quiz' && <Quiz />}
                {gameState === 'endScreen' && <EndScreen />}
                {gameState === 'aboutMe' && <AboutMe />}
            </QuizContext.Provider>
            <div className="footer">
                {/* this part swiches between the About Me button and the Back To Main Manu button */}
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
