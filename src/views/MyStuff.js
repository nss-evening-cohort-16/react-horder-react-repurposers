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

  const handleClick = (method) => {
    if (method === 'for-home') {
      items
        .filter((stuffs) => stuffs.category === 'For Home')
        .map((filteredCategory) => ({ filteredCategory }));
      console.warn(items);
    }
    if (method === 'for-body') {
      items
        .filter((item) => item.category === 'For Body')
        .map((filteredCategory) => ({ filteredCategory }));
    }
    if (method === 'for-food') {
      items
        .filter((item) => item.category === 'For Food')
        .map((filteredCategory) => ({ filteredCategory }));
    }
  };

  return (
    <>
      <Background>
        <h1 className="my-stuff-title">MY STUFF</h1>
        <div>
          <h5 className="category-header">CATEGORIES</h5>
          <div className="category-button-container">
            <button
              onClick={() => handleClick('for-home')}
              type="button"
              className="btn btn-secondary"
            >
              For Body
            </button>
            <button
              onClick={() => handleClick('for-home')}
              type="button"
              className="btn btn-secondary"
            >
              For Home
            </button>
            <button
              onClick={() => handleClick('for-food')}
              type="button"
              className="btn btn-secondary"
            >
              For Food
            </button>
          </div>
        </div>
        <MyStuffView>
          {items.map((stuff) => (
            <Polaroid key={stuff.firebaseKey} stuff={stuff} />
          ))}
        </MyStuffView>
      </Background>
    </>
  );
}
