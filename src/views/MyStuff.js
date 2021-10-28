import React, { useEffect, useState } from 'react';
import { getAllStuff } from '../api/data/stuffData';
import Stuff from '../components/Stuff';

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
  return (
    <div>
      <h1>MY STUFF</h1>
      {items.map((stuff) => (
        <Stuff key={stuff.firebaseKey} stuff={stuff} />
      ))}
    </div>
  );
}
