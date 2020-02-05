import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiChartContainer from '../MultiChartContainer';
import LegislatorGenderPieChart from '../LegislatorsGenderPieChart';
import { timeDay } from 'd3';

const GenderByCongressNumber = ({ congressNumber, title }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [senateResults, setSenateResults] = useState();
  const [congressResults, setCongressResults] = useState();
  const congressApiUrl = `http://www.write2congress.com/api/congress/v1/${congressNumber}/house/members.json?&offset=0`;
  const senateApiUrl = `http://www.write2congress.com/api/congress/v1/${congressNumber}/senate/members.json?&offset=0`;
  
  useEffect(() => {
    const fetchSenateData = async () => {
      const result = await axios(senateApiUrl);
      setSenateResults(result.data.results[0].members);
    };
    fetchSenateData();
  }, [senateApiUrl])

  useEffect(() => {
    const fetchCongressData = async () => {
      const result = await axios(congressApiUrl);
      setCongressResults(result.data.results[0].members);
    };
    fetchCongressData();
  }, [congressApiUrl])

  return ( 
    <MultiChartContainer title={title ? title : `${congressNumber}th U.S. Congress by Gender`}>
      {(senateResults && senateResults.length > 0) &&
        <LegislatorGenderPieChart title={'Senate'} legislators={senateResults} />
      }
      {(congressResults && congressResults.length > 0) &&
        <LegislatorGenderPieChart title={'Congress'} legislators={congressResults} />
      }
      {(congressResults && congressResults.length > 0 && senateResults && senateResults.length > 0) &&
        <LegislatorGenderPieChart title={'Joined'} legislators={[...senateResults, ...congressResults]} />
      }
    </MultiChartContainer>
   );
}
 
export default GenderByCongressNumber;