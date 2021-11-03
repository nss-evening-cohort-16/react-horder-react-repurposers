import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import Polaroid from '../components/Polaroid';
import SearchStuff from '../components/SearchStuff';
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
        <h1 className="myStuffTitle">MY STUFF</h1>
        <SearchStuff items={items} allItems={allItems} setItems={setItems} />
        <MyStuffView>
          {items.map((stuff) => (
            <Polaroid key={stuff.firebaseKey} stuff={stuff} />
          ))}
        </MyStuffView>
      </Background>
    </>
  );
}
