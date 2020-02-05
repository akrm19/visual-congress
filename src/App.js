import React from 'react';
import './App.css';
import GenderByCongressNumber from '../src/components/GenderByCongressNum';

function App() {
  return (
    <div className="App">
      <h2>Congress Visualized</h2>
      <GenderByCongressNumber congressNumber={116} title={'Current Congress (116th) by Gender'} />
      { Array.from(Array(9)).map((val, idx, arr) => 
        <GenderByCongressNumber key={idx} congressNumber={116 - idx - 1} />
      )}
    </div>
  );
}

export default App;
