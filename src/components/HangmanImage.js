import React from 'react';

const HangmanImage = ({ remainingGuesses }) => {
  const imageSource = `./hangmandrawings/state${11 - remainingGuesses}.GIF`;

  return (
    <div>
      <img src={imageSource} alt={`Hangman: ${remainingGuesses} guesses left`} />
    </div>
  );
};

export default HangmanImage;
