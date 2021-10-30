import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import Stuff from '../components/Stuff';

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

export default function MyStuff() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getAllStuff().then((stuffs) => {
      if (isMounted) setItems(stuffs);
    });
    return () => {
      isMounted = false;
    };
  });
  return (
    <>
      <h1 className="myStuffTitle">MY STUFF</h1>
      <MyStuffView>
        {items.map((stuff) => (
          <Stuff key={stuff.firebaseKey} stuff={stuff} />
        ))}
      </MyStuffView>
    </>
  );
}
