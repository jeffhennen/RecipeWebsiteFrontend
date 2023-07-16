import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Button.css'; // Import your custom CSS file for button styling

export default function Button({ onClick }) {
    
  return (
    <button className="custom-button" onClick={onClick}>
      <AiOutlineClose className="close-icon" />
    </button>
  );
}


