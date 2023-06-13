import React from 'react';

const HangmanImage = ({ remainingGuesses }) => {
  // Constructing the image source path based on the remaining guesses
  const imageSource = process.env.PUBLIC_URL + `/hangmandrawings/state${11 - remainingGuesses}.GIF`;

  // JSX to render
  return (
    <div className="hangman-image-container">
      <img src={imageSource} alt={`Hangman: ${remainingGuesses} guesses left`} />
    </div>
  );
};

export default HangmanImage;
