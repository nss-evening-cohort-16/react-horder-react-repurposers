import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';

import SearchStuff from '../components/SearchStuff';
import backgroundImage from '../images/homeBackgroundImage.png';

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
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
    setItems(items.filter((item) => item.category === method));
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
        </div>
      </Background>
    </>
  );
}
