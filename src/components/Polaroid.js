import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';
import polaroidTexture from '../images/pageBackgroundImage.png';

const PolaroidSide = styled.div`
  background-image: url(${polaroidTexture});

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 3.5in;
  height: 4.2in;
  padding: 20px;
  box-shadow: 10px 10px 10px 0px;
  margin: 10px;

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
  const history = useHistory();

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <PolaroidSide onClick={handleClick}>
        <PhotoShadow>
          <Photo src={stuff.itemImage} alt="ItemImage" />
        </PhotoShadow>
        <Caption>{stuff.itemName}</Caption>
      </PolaroidSide>
      <PolaroidSide onClick={handleClick}>
        <Description>{stuff.itemDescription}</Description>
        <ButtonContainer>
          <Link
            to={`/stuff/${stuff.firebaseKey}`}
            className="btn btn-outline-secondary"
          >
            <i className="fas fa-paperclip" />
          </Link>
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
      </PolaroidSide>
    </ReactCardFlip>
  );
}

Polaroid.propTypes = {
  stuff: PropTypes.shape().isRequired,
};
