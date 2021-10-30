import React, { useEffect, useState } from 'react';
import { getAllStuff } from '../api/data/stuffData';

export default function ItemCounter() {
  const [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      getAllStuff().then([itemCount]);
      console.warn(itemCount);
    }
    return () => {
      isMounted = false;
      setItemCount(itemCount.length);
    };
  }, []);

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h1 className="card-title">Total Items:</h1>
          {itemCount.length}
        </div>
      </div>
    </div>
  );
}
