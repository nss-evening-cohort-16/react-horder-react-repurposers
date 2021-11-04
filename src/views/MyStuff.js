import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import PaperContainer from '../components/PaperContainer';
import Polaroid from '../components/Polaroid';
import SearchStuff from '../components/SearchStuff';

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Page = PaperContainer();

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
      <Page>
        <h1>MY STUFF</h1>
        <SearchStuff allItems={allItems} setItems={setItems} />
        <hr />
        <h5>CATEGORIES</h5>
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
      </Page>
      <hr />
      <MyStuffView>
        {items.map((item) => (
          <Polaroid key={item.firebaseKey || 'notFound'} item={item} />
        ))}
      </MyStuffView>
    </>
  );
}
