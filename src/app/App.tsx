import React from 'react';
import { Button } from '../common/atoms/Button';
import './App.css';
import { ThemeProvider } from './utils/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider theme="light">
      <div>
        <Button>Zaczynamy!</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
