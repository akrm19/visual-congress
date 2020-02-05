import React from 'react';
import styled from 'styled-components';

const MultiCharContainer = ({ children, title }) => {
  const ChartParentContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const CharContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    div {
      margin-left: 1em;
      margin-right: 1em;
      margin-bottom:.5em;
    }
  `;
  const Title = styled.h5`
  `;

  return ( 
    <ChartParentContainer>
      {title &&
        <Title>{title}</Title>
      }
      <CharContainer>
        {children}
      </CharContainer>
    </ChartParentContainer>
  );
}
 
export default MultiCharContainer;