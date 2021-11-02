import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import PageBackground from '../components/PageBackground';
import Polaroid from '../components/Polaroid';
import image from '../images/homeBackgroundImage.png';

const Background = PageBackground(image);

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    <Background>
      <h1>MY STUFF</h1>
      <MyStuffView>
        {items.map((stuff) => (
          <Polaroid key={stuff.firebaseKey} stuff={stuff} />
        ))}
      </MyStuffView>
    </Background>
  );
}
