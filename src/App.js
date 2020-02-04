import React from 'react';
import logo from './logo.svg';
import './App.css';
import LegislatorGenderPieChart from '../src/components/LegislatorsGenderPieChart';
import SampleSenateResult from '../src/assets/samples/legislators_senate';
import SampleCongressResult from '../src/assets/samples/legislators_congress';

function App() {
  const sampleSenateMembers = SampleSenateResult.results[0].members;
  const sampleCongressMembers = SampleCongressResult.results[0].members;
  const testData = [
    {label: 'lab1', value: 9},
    {label: 'labelFor8', value: 8},
    {label: 'labelFor7', value: 7},
    {label: 'labelFor6', value: 1},];
  // console.log(SampleSenateResult);
  return (
    <div className="App">
      <header className="App-header">
        <LegislatorGenderPieChart legislators={sampleSenateMembers} />
        <LegislatorGenderPieChart legislators={sampleCongressMembers} />
        <LegislatorGenderPieChart legislators={[...sampleCongressMembers, ...sampleSenateMembers]} />



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
