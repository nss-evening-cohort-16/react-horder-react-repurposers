import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import Polaroid from '../components/Polaroid';
import SearchStuff from '../components/SearchStuff';

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
      <h1>MY STUFF</h1>
      <SearchStuff allItems={allItems} setItems={setItems} />
      <MyStuffView>
        {items.map((item) => (
          <Polaroid key={item.firebaseKey || 'notFound'} item={item} />
        ))}
      </MyStuffView>
    </>
  );
}
