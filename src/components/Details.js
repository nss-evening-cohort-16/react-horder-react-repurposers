import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { deleteStuff } from '../api/data/stuffData';

const Photo = styled.img`
  max-width: 600px;
  max-height: 600px;

  border: 1px solid black;
  box-shadow: 5px 5px 10px 0px;
`;

const Title = styled.div`
  text-align: center;

  font-family: 'Heebo', sans-serif;
  font-size: 150%;
  font-weight: bold;

  border-bottom: 1px solid black;
  margin: 20px;
`;

const Description = styled.div`
  max-width: 700px;
  text-align: center;

  font-family: 'Heebo', sans-serif;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

export default function Details({ stuff }) {
  const history = useHistory();

  return (
    <>
      <Photo src={stuff.itemImage} alt={stuff.itemName} />
      <Title>{stuff.itemName}</Title>
      <Description>{stuff.itemDescription}</Description>
      <ButtonContainer>
        <Link
          to={`/edit/${stuff.firebaseKey}`}
          className="btn btn-outline-secondary"
        >
          <i className="fas fa-edit" />
        </Link>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            deleteStuff(stuff.firebaseKey).then(() => history.push('/stuff'));
          }}
        >
          <i className="fas fa-trash-alt" />
        </button>
      </ButtonContainer>
    </>
  );
}

Details.propTypes = {
  stuff: PropTypes.shape().isRequired,
};
