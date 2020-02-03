import React from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './components/PieChart';
import SampleSenateMembers from '../src/assets/samples/legislators_senate';

function App() {
  const testData = [9, 8, 7, 6, 1];
  return (
    <div className="App">
      <header className="App-header">
      <PieChart data={testData} />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
