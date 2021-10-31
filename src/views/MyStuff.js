import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import Polaroid from '../components/Polaroid';
import backgroundImage from '../images/homeBackgroundImage.png';

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  justify-content: center;
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
      <Background>
        <h1 className="myStuffTitle">MY STUFF</h1>
        <MyStuffView>
          {items.map((stuff) => (
            <Polaroid key={stuff.firebaseKey} stuff={stuff} />
          ))}
        </MyStuffView>
      </Background>
    </>
  );
}
