import React, { useState, useEffect } from 'react';
import PieChart from '../PieChart';

const getLegislatorsGenderData = (legislators) => {
  let results = [];
  const genderData = legislators.reduce((obj, legislator) => {
    const gender = legislator.gender ? legislator.gender.toLowerCase() : null
    if(!gender) {
      if(!obj['notAvailable'])
        obj['notAvailable'] = 0;
      obj.notAvailable++;
    } else if (gender === 'm') {
      obj.male++;
    } else if (gender === 'f')
      obj.female++;
    else {
      if(!obj[gender])
        obj[gender] = 0;
      obj[gender]++;
    }
    return obj;
  }, { male: 0, female: 0});

  for(let [key, value] of Object.entries(genderData)) {
    results.push({label: key, value: value});
  }
  return results;
}

const LegislatorGenderPieChart = (props) => {
  const isEmpty = !props.legislators || props.legislators.length === 0;
  console.log(`Legislator data is empty: ${isEmpty}`);
  let result = getLegislatorsGenderData(props.legislators);

  return ( 
    <div>
      <PieChart data={result} title={props.title} />
    </div>
   );
}
 
export default LegislatorGenderPieChart;
