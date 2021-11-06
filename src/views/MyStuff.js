import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import userId from '../api/data/userId';
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
  // Cache inventory
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllStuff(userId()).then((stuffs) => {
      if (isMounted) setAllItems(stuffs);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle Filtering
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (filter) {
      const filterResults = allItems.filter((item) => item.category === filter);
      setFilteredItems(filterResults);
    }
  }, [filter]);

  const resetFilter = () => {
    setFilter('');
    setFilteredItems(allItems);
  };

  // Handle Searching
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedItems, setSearchedItems] = useState([]);

  useEffect(() => {
    const searchResults = allItems.filter((item) => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchedItems(searchResults);
  }, [searchTerm]);

  const resetSearchTerm = () => {
    setSearchTerm('');
    setSearchedItems(allItems);
  };

  // Display inventory
  const [shownItems, setShownItems] = useState([]);

  useEffect(() => {
    const parsedItems = filteredItems.filter((filteredItem) => searchedItems.some(
      (searchedItem) => filteredItem.firebaseKey === searchedItem.firebaseKey,
    ));
    setShownItems(parsedItems);
  }, [filteredItems, searchedItems]);

  useEffect(() => {
    resetFilter();
    resetSearchTerm();
  }, [allItems]);

  return (
    <>
      <Page>
        <h1>MY STUFF</h1>
        <h5>Search</h5>
        <SearchStuff setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <hr />
        <h5>Filter</h5>
        <ShowCategoryDropdown
          setFilter={setFilter}
          filter={filter}
          resetFilter={resetFilter}
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
