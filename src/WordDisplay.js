import React from 'react';

const WordDisplay = ({ targetWord, guessedLetters }) => {
    const hiddenWord = targetWord
        .split('')
        .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');

    return <h2>{hiddenWord}</h2>;
};

export default WordDisplay;
