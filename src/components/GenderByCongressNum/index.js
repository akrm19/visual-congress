import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MultiChartContainer from '../MultiChartContainer';
import LegislatorGenderPieChart from '../LegislatorsGenderPieChart';

const GenderByCongressNumber = ({ congressNumber, title }) => {
  const senateCacheKey = `visualcongress-${congressNumber}-senate`;
  const congressCacheKey = `visualcongress-${congressNumber}-congress`;

  // const [isLoading, setIsLoading] = useState(false);
  const [senateResults, setSenateResults] = useState(localStorage.getItem(senateCacheKey) 
    ? JSON.parse(localStorage.getItem(senateCacheKey)) : undefined);
  const [congressResults, setCongressResults] = useState(localStorage.getItem(congressCacheKey) 
    ? JSON.parse(localStorage.getItem(congressCacheKey)) : undefined);
  const congressApiUrl = `https://write2congress.azurewebsites.net/api/congress/v1/${congressNumber}/house/members.json?&offset=0`;
  const senateApiUrl = `https://www.write2congress.com/api/congress/v1/${congressNumber}/senate/members.json?&offset=0`;
  
  useEffect(() => {
    if(!senateResults) {
      const fetchSenateData = async () => {
        const result = await axios(senateApiUrl);
        const data = result.data.results[0].members;
        localStorage.setItem(senateCacheKey, JSON.stringify(data));
        setSenateResults(data);
      };
      fetchSenateData();
    }
  }, [senateApiUrl, senateResults, senateCacheKey])

  useEffect(() => {
    if(!congressResults) {
      const fetchCongressData = async () => {
        const result = await axios(congressApiUrl);
        const data = result.data.results[0].members;
        localStorage.setItem(congressCacheKey, JSON.stringify(data));
        setCongressResults(data);
      };
      fetchCongressData();
    }
  }, [congressApiUrl, congressResults, congressCacheKey])

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