import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteStuff, getSingleStuff } from '../api/data/stuffData';

const DetailsView = styled.div``;

export default function SingleStuff() {
  const [singleStuff, setSingleStuff] = useState({});
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleStuff(key).then(setSingleStuff);
  }, []);

  return (
    <DetailsView>
      <h3>
        Name:
        <br />
        {singleStuff.itemName}
      </h3>
      <br />
      <img src={singleStuff.itemImage} alt="ItemImage" />
      <br />
      <div>
        <h3>Description:</h3>
        <br />
        {singleStuff.itemDescription}
      </div>
      <br />
      <Link to={`/edit/${singleStuff.firebaseKey}`}>Edit</Link>
      <br />
      <button
        type="button"
        onClick={() => {
          deleteStuff(singleStuff.firebaseKey).then(() => history.push('/stuff'));
        }}
      >
        Delete
      </button>
    </DetailsView>
  );
}
