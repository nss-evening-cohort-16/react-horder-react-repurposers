import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import userObj from '../api/data/userObj';
import PaperContainer from '../components/PaperContainer';
import Polaroid from '../components/Polaroid';
import SearchStuff from '../components/SearchStuff';
import ShowCategoryDropdown from '../components/ShowCategory';

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Page = PaperContainer();

export default function MyStuff() {
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [shownItems, setShownItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllStuff(userObj()).then((stuffs) => {
      if (isMounted) setAllItems(stuffs);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredItems(allItems);
    setSearchedItems(allItems);
    // Reset filter
    // Clear search bar
  }, [allItems]);

  useEffect(() => {
    const parsedItems = filteredItems.filter((filteredItem) => searchedItems.some(
      (searchedItem) => filteredItem.firebaseKey === searchedItem.firebaseKey,
    ));
    setShownItems(parsedItems);
  }, [filteredItems, searchedItems]);

  return (
    <>
      <Page>
        <h1>MY STUFF</h1>
        <h5>Search</h5>
        <SearchStuff setSearchedItems={setSearchedItems} allItems={allItems} />
        <hr />
        <h5>Filter</h5>
        <ShowCategoryDropdown
          setFilteredItems={setFilteredItems}
          allItems={allItems}
        />
      </Page>
      <hr />
      <MyStuffView>
        {shownItems.length > 0 ? (
          shownItems.map((item) => (
            <Polaroid
              key={item.firebaseKey}
              item={item}
              setAllItems={setAllItems}
            />
          ))
        ) : (
          <Polaroid />
        )}
      </MyStuffView>
    </>
  );
}
