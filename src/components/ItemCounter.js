import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
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
      <div className="card" style={{ width: '48rem', margin: 'auto' }}>
        <h3 className="card-title">Total Items In Collection:</h3>
        <h3>{itemCount.length}</h3>
      </div>
    </CardContainer>
  );
}
