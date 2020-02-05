import React from 'react';
import './App.css';
import MultiCharContainer from '../src/components/MultiChartContainer';
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
      <h2>Congress Visualized</h2>
        <MultiCharContainer title={'Current Congress (116th) by Gender'}>
        <LegislatorGenderPieChart title={'Senate'} legislators={sampleSenateMembers}  />
        <LegislatorGenderPieChart title={'Congress'} legislators={sampleCongressMembers}  />
        <LegislatorGenderPieChart title={'Joined'} legislators={[...sampleCongressMembers, ...sampleSenateMembers]} />
      </MultiCharContainer>
      <header className="App-header">
        <LegislatorGenderPieChart legislators={sampleSenateMembers} title={'Senate'} />
        <LegislatorGenderPieChart legislators={sampleCongressMembers} />
        <LegislatorGenderPieChart legislators={[...sampleCongressMembers, ...sampleSenateMembers]} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
