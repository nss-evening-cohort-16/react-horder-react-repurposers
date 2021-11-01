import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Photo = styled.img`
  max-width: 600px;
  max-height: 600px;
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
`;

export default function Details({ stuff }) {
  return (
    <>
      <Photo src={stuff.itemImage} alt={stuff.itemName} />
      <Title>{stuff.itemName}</Title>
      <Description>{stuff.itemDescription}</Description>
    </>
  );
}

Details.propTypes = {
  stuff: PropTypes.shape().isRequired,
};
