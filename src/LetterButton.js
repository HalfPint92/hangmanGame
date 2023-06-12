import React from 'react';

const LetterButton = ({ letter, onClick, disabled }) => {
    return (
        <button onClick={() => onClick(letter)} disabled={disabled}>
            {letter}
        </button>
    );
};

export default LetterButton;
