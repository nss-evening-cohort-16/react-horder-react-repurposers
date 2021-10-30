import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteStuff, getSingleStuff } from '../api/data/stuffData';
import backgroundImage from '../images/pageBackgroundImage.png';

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

const PolaroidFrame = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  text-align: center;

  padding: 10px;
  margin: 10px;
`;

const Photo = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

const Caption = styled.div`
  font-family: 'Nothing You Could Do', cursive;
  color: #444340;
`;

const Description = styled.div`
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
    <Background>
      <PolaroidFrame>
        <Photo src={singleStuff.itemImage} alt="ItemImage" />
        <Caption>{singleStuff.itemName}</Caption>
        <Description>{singleStuff.itemDescription}</Description>
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
      </PolaroidFrame>
    </Background>
  );
}
