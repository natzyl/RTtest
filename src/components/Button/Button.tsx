import React, {useState} from 'react';
import './Button.css';

const Button = () => {
     const [buttonText, setButtonText] = useState('Click please me!');
    return (
        <button className="my-button" 
        onClick={() => console.log('click')}
        >
            {buttonText}
        </button>
    )
}

export default Button;