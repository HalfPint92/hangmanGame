import React from 'react';
import './LetterButton.css';

const LetterButton = ({ letter, onClick, disabled, discoMode, isHint }) => {
  const handleClick = () => {
    if (!disabled) {
      if (isHint) {
        onClick();
      } else {
        onClick(letter);
      }
    }
  };

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
