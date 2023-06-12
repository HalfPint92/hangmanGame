import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import LetterButton from './LetterButton';
import HangmanImage from './HangmanImage';
import './Game.css';

const Game = () => {
    const [targetWord, setTargetWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [remainingGuesses, setRemainingGuesses] = useState(10);

    const fetchWordFromDictionary = async () => {
        try {
            const response = await fetch('/dictionary.txt');
            const text = await response.text();
            const words = text.split('\n').filter((word) => word.length > 0);
            const randomIndex = Math.floor(Math.random() * words.length);
            const randomWord = words[randomIndex].toLowerCase();
            setTargetWord(randomWord);
        } catch (error) {
            console.error('Error fetching word from dictionary:', error);
        }
    };

    useEffect(() => {
        fetchWordFromDictionary();
    }, []);

    const handleLetterClick = (letter) => {
        if (letter !== '-' && !guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);

            if (!targetWord.includes(letter)) {
                setRemainingGuesses(remainingGuesses - 1);
            }
        }
    };

    const handleRestartGame = () => {
        fetchWordFromDictionary(); 
        setGuessedLetters([]);
        setRemainingGuesses(10);
    };

    const gameWon = targetWord
        .split('')
        .every((letter) => guessedLetters.includes(letter));

    const gameLost = remainingGuesses === 0;

    return (
        <div className="game-container">
            <h1>Hangman Game</h1>
            <WordDisplay targetWord={targetWord} guessedLetters={guessedLetters} />
            <HangmanImage remainingGuesses={remainingGuesses} />
            <div className="game-message">
                {gameWon && <p className="win-message">You won the game!</p>}
                {gameLost && <p className="lose-message">
                    You lost the game!<br></br>The correct word was: {targetWord}
                </p>}
            </div>
            <div>
                {gameWon || gameLost ? (
                    <button className="button-restart" onClick={handleRestartGame}>Restart Game</button>
                ) : (
                    <div>
                        <p className="remaining-guesses">Remaining Guesses: {remainingGuesses}</p>
                        <div>
                            {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
                                <LetterButton
                                    key={letter}
                                    letter={letter}
                                    onClick={handleLetterClick}
                                    disabled={guessedLetters.includes(letter)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game;
