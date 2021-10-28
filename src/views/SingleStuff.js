import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteStuff, getSingleStuff } from '../api/data/stuffData';

const DetailsView = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  text-align: center;

  padding: 10px;
  margin: 10px;
`;

const StuffImage = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

const StuffDescription = styled.div`
  max-width: 500px;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

export default function SingleStuff() {
  const [singleStuff, setSingleStuff] = useState({});
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleStuff(key).then(setSingleStuff);
  }, []);

  return (
    <DetailsView>
      <StuffImage src={singleStuff.itemImage} alt="ItemImage" />
      <h3>{singleStuff.itemName}</h3>
      <StuffDescription>{singleStuff.itemDescription}</StuffDescription>
      <ButtonContainer>
        <Link
          to={`/edit/${singleStuff.firebaseKey}`}
          className="btn btn-primary"
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteStuff(singleStuff.firebaseKey).then(() => history.push('/stuff'));
          }}
        >
          Delete
        </button>
      </ButtonContainer>
    </DetailsView>
  );
}
