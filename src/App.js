import React, { Component } from 'react';
import './App.css';
import WordListGenerator from'./component/WordListGenerator.js';
import WordListGet from './component/WordListGet';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>WordList Generator</h1>
        <header className="App-header">
        <WordListGenerator/>
        <WordListGet/>
        </header>
      </div>
    );
  }
}

export default App;
