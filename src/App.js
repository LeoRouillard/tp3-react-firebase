import React from 'react';
import './App.css';
import AppRouter from './Components/AppRouter';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
