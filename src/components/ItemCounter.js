import React, { useEffect, useState } from 'react';
import { getAllStuff } from '../api/data/stuffData';

export default function ItemCounter() {
  const [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getAllStuff().then((item) => {
      if (isMounted) setItemCount(item);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h3 className="card-title">Total Items:</h3>
          <h5>{itemCount.length}</h5>
        </div>
      </div>
    </div>
  );
}
