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

  const handleClick = (method) => {
    setItems(allItems.filter((item) => item.category === method));
  };

  return (
    <>
      <Background>
        <h1 className="my-stuff-title">MY STUFF</h1>
        <SearchStuff items={items} allItems={allItems} setItems={setItems} />
        <div>
          <h5 className="category-header">CATEGORIES</h5>
          <div className="category-button-container">
            <button
              onClick={() => handleClick('For Body')}
              type="button"
              className="btn btn-secondary"
            >
              For Body
            </button>
            <button
              onClick={() => handleClick('For Home')}
              type="button"
              className="btn btn-secondary"
            >
              For Home
            </button>
            <button
              onClick={() => handleClick('For Food')}
              type="button"
              className="btn btn-secondary"
            >
              For Food
            </button>
          </div>
          <MyStuffView>
            {items.map((stuff) => (
              <Polaroid key={stuff.firebaseKey} stuff={stuff} />
            ))}
          </MyStuffView>
        </div>
      </Background>
    </>
  );
}
