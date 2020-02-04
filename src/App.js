import React from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './components/PieChart';
import LegislatorGenderPieChart from '../src/components/LegislatorsGenderPieChart';
import SampleSenateMembers from '../src/assets/samples/legislators_senate';

function App() {
  const testData = [
    {label: 'lab1', value: 9},
    {label: 'labelFor8', value: 8},
    {label: 'labelFor7', value: 7},
    {label: 'labelFor6', value: 1},];
  console.log(SampleSenateMembers);
  return (
    <div className="App">
      <header className="App-header">
      <PieChart data={testData} />
      <LegislatorGenderPieChart legislators={SampleSenateMembers.results[0].members} />

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
