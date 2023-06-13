import React from 'react';
import './WordDisplay.css';

const WordDisplay = ({ targetWord, guessedLetters }) => {
  const hiddenWord = targetWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '-'))
    .join(' ');

  return <h2 className="word-display">{hiddenWord}</h2>;
};

export default WordDisplay;
