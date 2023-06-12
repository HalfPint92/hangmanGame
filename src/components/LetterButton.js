import React from 'react';
import './LetterButton.css';

const LetterButton = ({ letter, onClick, disabled }) => {
  return (
    <button
      className={`letter-button ${disabled ? 'disabled' : ''}`}
      onClick={() => onClick(letter)}
      disabled={disabled}
    >
      {letter}
    </button>
  );
};

export default LetterButton;
