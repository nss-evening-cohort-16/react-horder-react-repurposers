import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import PaperContainer from '../components/PaperContainer';
import Polaroid from '../components/Polaroid';
import SearchStuff from '../components/SearchStuff';
import { ShowCategoryDropdown } from '../components/ShowCategory';

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

  // const handleClick = (method) => {
  //   setItems(allItems.filter((item) => item.category === method));
  // };

  return (
    <>
      <Page>
        <h1>MY STUFF</h1>
        <SearchStuff allItems={allItems} setItems={setItems} />
        <hr />
        <h5>CATEGORIES</h5>
        <ShowCategoryDropdown
          items={items}
          setItems={setItems}
          allItems={allItems}
          setAllItems={setAllItems}
        />
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
