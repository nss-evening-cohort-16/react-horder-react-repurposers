import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import polaroidTexture from '../images/pageBackgroundImage.png';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import DetailsButton from './buttons/DetailsButton';

const PolaroidSide = styled.div`
  background-image: url(${polaroidTexture});

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 3.5in;
  height: 4.2in;
  padding: 20px;
  border-radius: 1px;
  margin: 20px;
  box-shadow: 10px 10px 10px 0px;

  position: relative;
  z-index: 0;
`;

const PhotoShadow = styled.div`
  box-shadow: inset 0px 0px 10px 8px rgba(0, 0, 0, 0.3);
`;

const Photo = styled.img`
  width: 3.1in;
  height: 3.1in;
  object-fit: cover;
  position: relative;
  z-index: -1;
`;

const Caption = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #444340;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 140%;
  font-weight: bold;

  transform: rotate(-2deg);
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  font-family: 'Nothing You Could Do', cursive;
  color: #444340;
  font-size: 120%;
  font-weight: bold;

  transform: rotate(-4deg);
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

export default function Polaroid({ stuff }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <PolaroidSide id="front" onClick={handleClick}>
        <PhotoShadow>
          <Photo src={stuff.itemImage} alt="ItemImage" />
        </PhotoShadow>
        <Caption>{stuff.itemName}</Caption>
      </PolaroidSide>
      <PolaroidSide id="back" onClick={handleClick}>
        <Description>{stuff.itemDescription}</Description>
        <ButtonContainer>
          <DetailsButton firebaseKey={stuff.firebaseKey} />
          <EditButton firebaseKey={stuff.firebaseKey} />
          <DeleteButton firebaseKey={stuff.firebaseKey} />
        </ButtonContainer>
      </PolaroidSide>
    </ReactCardFlip>
  );
}

Polaroid.propTypes = {
  stuff: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    itemImage: PropTypes.string.isRequired,
    itemDescription: PropTypes.string.isRequired,
    firebaseKey: PropTypes.string.isRequired,
  }).isRequired,
};
