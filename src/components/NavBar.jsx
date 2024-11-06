import React, { useContext } from 'react';
import { ColorContext } from '../ColorContext';

const NavBar = () => {
  const { isLight, toggleColor } = useContext(ColorContext);

  return (
    <nav style={{
      backgroundColor: isLight ? '#f0f0f0' : '#333',
      color: isLight ? '#333' : '#f0f0f0',
      padding: '1rem'
    }}>
      <h1>Context API</h1>
      <button onClick={toggleColor} style={{
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        backgroundColor: isLight ? '#333' : '#f0f0f0',
        color: isLight ? '#f0f0f0' : '#333',
        border: 'none',
        borderRadius: '5px'
      }}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default NavBar;
