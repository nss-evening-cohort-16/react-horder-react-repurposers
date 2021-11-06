import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';

const Photo = styled.img`
  max-width: 600px;
  max-height: 600px;

  padding: 1px;
  border: 1px solid black;
  border-radius: 2px;
`;

const Title = styled.h4`
  text-align: center;

  border-bottom: 1px solid black;
  margin: 20px;
`;

const Description = styled.div`
  max-width: 700px;
  text-align: center;

  color: #444430;
  font-family: 'Heebo', sans-serif;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

export default function Details({ stuff }) {
  return (
    <>
      <Photo src={stuff.itemImage} alt={stuff.itemName} />
      <Title>{stuff.itemName}</Title>
      <h6>{stuff.category}</h6>
      <Description>{stuff.itemDescription}</Description>
      <ButtonContainer>
        <EditButton firebaseKey={stuff.firebaseKey} />
        <DeleteButton firebaseKey={stuff.firebaseKey} />
      </ButtonContainer>
    </>
  );
}

Details.propTypes = {
  stuff: PropTypes.shape({
    itemName: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    category: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

Details.defaultProps = {
  stuff: {},
};
