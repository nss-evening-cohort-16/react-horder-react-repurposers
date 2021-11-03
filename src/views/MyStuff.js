import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import PageBackground from '../components/PageBackground';
import Polaroid from '../components/Polaroid';
import SearchStuff from '../components/SearchStuff';
import image from '../images/homeBackgroundImage.png';

const Background = PageBackground(image);

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function MyStuff() {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllStuff().then((stuffs) => {
      if (isMounted) {
        setItems(stuffs);
        setAllItems(stuffs);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Background>
        <h1>MY STUFF</h1>
        <SearchStuff allItems={allItems} setItems={setItems} />
        <MyStuffView>
          {items.map((item) => (
            <Polaroid key={item.firebaseKey} item={item} />
          ))}
        </MyStuffView>
      </Background>
    </>
  );
}
