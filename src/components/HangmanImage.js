import React from 'react';

const HangmanImage = ({ remainingGuesses }) => {
  //  using process.env.PUBLIC_URL to access the public folder
  const imageSource = process.env.PUBLIC_URL + `/hangmandrawings/state${11 - remainingGuesses}.GIF`;

  return (
    <div className="hangman-image-container">
      <img src={imageSource} alt={`Hangman: ${remainingGuesses} guesses left`} />
    </div>
  );
};

export default HangmanImage;
