import React from 'react';
import './App.css';
import Tabuleiro from './components/tabuleiro';
import Seletor from './components/seletor';

function App() {
  return (
    <div className="App">
      

        <Seletor idSeletor = "s1"/>
        <Seletor idSeletor = "s2"/>
        <Tabuleiro />
      
    </div>
  );
}

export default App;
