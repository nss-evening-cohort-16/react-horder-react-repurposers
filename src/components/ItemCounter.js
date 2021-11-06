import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import userObj from '../api/data/userObj';

const Counter = styled.div`
  color: #444430;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 600%;
  font-weight: bold;
`;

export default function ItemCounter() {
  const [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllStuff(userObj()).then((item) => {
      if (isMounted) setItemCount(item);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h5>Total Items In Collection:</h5>
      <Counter>{itemCount.length}</Counter>
    </>
  );
}
