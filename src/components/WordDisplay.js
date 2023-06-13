import React from 'react';
import './WordDisplay.css';

const WordDisplay = ({ targetWord, guessedLetters }) => {
  // Constructing the hidden word to display
  const hiddenWord = targetWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '-'))
    .join(' ');

  // JSX to render
  return <h2 className="word-display">{hiddenWord}</h2>;
};

export default WordDisplay;
