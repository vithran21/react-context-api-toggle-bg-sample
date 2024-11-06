import React, { useContext } from 'react';
import { ColorContext } from '../ColorContext';

const Body = () => {
  const { isLight } = useContext(ColorContext);

  return (
    <div style={{
      backgroundColor: isLight ? '#333' : '#f0f0f0',
      color: isLight ? '#f0f0f0' : '#333',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <h2>What is Context API?</h2>
      <p>
        The Context API in React provides a way to share values between components
        without having to pass props manually at every level. It’s useful for 
        managing global state, like themes, language, and more.
      </p>
    </div>
  );
};

export default Body;
