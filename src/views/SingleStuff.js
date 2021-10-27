import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStuff } from '../api/data/stuffData';

export default function SingleStuff() {
  const [singleStuff, setSingleStuff] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleStuff(key).then(setSingleStuff);
  }, []);

  return (
    <>
      <img src={singleStuff.itemImage} alt="ItemImage" />
      <br />
      <div>
        Name:
        <br />
        {singleStuff.itemName}
        <br />
        <br />
        Description:
        <br />
        {singleStuff.itemDescription}
      </div>
    </>
  );
}
