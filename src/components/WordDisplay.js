import React from 'react';
import './WordDisplay.css';

const WordDisplay = ({ targetWord, guessedLetters }) => {

  const hiddenWord = targetWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  return <h2 className="word-display">{hiddenWord}</h2>;
};

export default WordDisplay;
