import React from 'react';

const HangmanImage = ({ remainingGuesses }) => {
    const imageSource = `hangman_${6 - remainingGuesses}.png`;

    return <img src={imageSource} alt={`Hangman: ${remainingGuesses} guesses left`} />;
};

export default HangmanImage;
