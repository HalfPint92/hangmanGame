import React, { useState, useEffect } from 'react';
import WordDisplay from './components/WordDisplay';
import LetterButton from './components/LetterButton';
import HangmanImage from './components/HangmanImage';
import './App.css';

const App = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [discoMode, setDiscoMode] = useState(false);
  const [hint, setHint] = useState('');
  const [helpVisible, setHelpVisible] = useState(false);

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
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!targetWord.includes(letter)) {
        setRemainingGuesses(remainingGuesses - 1);
      }
    }
  };

  const handleRestartGame = () => {
    setGuessedLetters([]);
    setRemainingGuesses(10);
    fetchWordFromDictionary();
  };

  const handleDiscoMode = () => {
    setDiscoMode(!discoMode);
  };

  const handleHint = () => {
    const unguessedLetters = targetWord
      .split('')
      .filter((letter) => !guessedLetters.includes(letter));
    const randomIndex = Math.floor(Math.random() * unguessedLetters.length);
    const randomLetter = unguessedLetters[randomIndex];

    setGuessedLetters([...guessedLetters, randomLetter]);

    if (!targetWord.includes(randomLetter)) {
      setRemainingGuesses(remainingGuesses - 1);
    }
  };

  const toggleHelp = () => {
    setHelpVisible(!helpVisible);
  };

  const gameWon = targetWord.split('').every((letter) => guessedLetters.includes(letter));
  const gameLost = remainingGuesses === 0;

  return (
    <div className="game-container">
      <h1>Hangman Game</h1>
      <WordDisplay targetWord={targetWord} guessedLetters={guessedLetters} />
      <HangmanImage remainingGuesses={remainingGuesses} />
      <div className="game-message">
        {gameWon && <p className="win-message">You won the game!</p>}
        {gameLost && (
          <p className="lose-message">
            You lost the game!<br></br>The word was: {targetWord}
          </p>
        )}
      </div>
      <div className="game-controls">
        <p className="remainingHeading">Remaining Guesses: {remainingGuesses}</p>
        <div className="letter-buttons">
          {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
            <LetterButton
              key={letter}
              letter={letter}
              onClick={handleLetterClick}
              disabled={guessedLetters.includes(letter)}
              discoMode={discoMode}
            />
          ))}
        </div>

        <button className="restart-button" onClick={handleRestartGame}>
          Restart Game
        </button>
        <button className={`disco-button ${discoMode ? 'active' : ''}`} onClick={handleDiscoMode}>
          Disco Mode
        </button>
        <button className="hint-button" onClick={handleHint}>
          Hint
        </button>
        {hint && <p className="hint-message">Hint: {hint}</p>}

        <button className="help-button" onClick={toggleHelp}>
          Help
        </button>
        {helpVisible && (
          <div className="help-content">
            <h3>Hangman Game Rules</h3>
            <p>
              The Hangman Game is a word-guessing game. You need to guess the target word by selecting
              letters from the available options. Each correct guess will reveal the letters in the target
              word, and each incorrect guess will reduce your remaining guesses. You win the game if you
              can correctly guess the entire word within the allowed number of guesses. Good luck!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
