import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const CounterLabel = styled.div`
  color: #444430;
  font-size: 250%;
  font-weight: 400;
  font-family: 'Heebo', sans-serif;
`;

const Counter = styled.div`
  color: #444430;
  font-family: 'Nothing You Could Do', cursive;
  font-weight: bold;
  font-size: 600%;
`;

export default function ItemCounter() {
  const [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getAllStuff().then((item) => {
      if (isMounted) setItemCount(item);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <CardContainer>
      <CounterLabel>Total Items In Collection:</CounterLabel>
      <Counter>{itemCount.length}</Counter>
    </CardContainer>
  );
}
