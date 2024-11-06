import React from 'react';
import { ColorProvider } from './ColorContext';
import NavBar from './components/NavBar';
import Body from './components/Body';

const App = () => {
  return (
    <ColorProvider>
      <NavBar />
      <Body />
    </ColorProvider>
  );
};

export default App;
