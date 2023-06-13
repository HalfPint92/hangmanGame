import React from 'react';
import './LetterButton.css';

const LetterButton = ({ letter, onClick, disabled, discoMode, isHint }) => {
  // Handles the click event of the button
  const handleClick = () => {
    if (!disabled) {
      if (isHint) {
        onClick();
      } else {
        onClick(letter);
      }
    }
  };

  // JSX to render
  return (
    <button
      className={`letter-button ${discoMode ? 'disco' : ''} ${isHint ? 'hint' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {isHint ? '?' : letter}
    </button>
  );
};

export default LetterButton;
