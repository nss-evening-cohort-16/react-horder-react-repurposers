import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStuff } from '../api/data/stuffData';
import Details from '../components/Details';

export default function SingleStuff() {
  const { key } = useParams();
  const [singleStuff, setSingleStuff] = useState({});
  useEffect(() => {
    getSingleStuff(key).then(setSingleStuff);
  }, []);

  return <Details stuff={singleStuff} />;
}
