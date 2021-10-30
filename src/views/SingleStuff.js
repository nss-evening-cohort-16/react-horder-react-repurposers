import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { deleteStuff, getSingleStuff } from '../api/data/stuffData';
import backgroundImage from '../images/homeBackgroundImage.png';
import polaroidTexture from '../images/pageBackgroundImage.png';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

const PolaroidSide = styled.div`
  background-image: url(${polaroidTexture});

  display: flex;
  flex-direction: column;
  row-gap: 10px;
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
  color: #444340;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 140%;
  font-weight: bold;
`;

const Description = styled.div`
  font-family: 'Nothing You Could Do', cursive;
  color: #444340;
  font-size: 120%;
`;

const ButtonContainer = styled.div`
  height: 100%;
  align-items: flex-end;
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

export default function SingleStuff() {
  const history = useHistory();
  const { key } = useParams();
  const [singleStuff, setSingleStuff] = useState({});
  useEffect(() => {
    getSingleStuff(key).then(setSingleStuff);
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Background>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <PolaroidSide onClick={handleClick}>
          <PhotoShadow>
            <Photo src={singleStuff.itemImage} alt="ItemImage" />
          </PhotoShadow>
          <Caption>{singleStuff.itemName}</Caption>
        </PolaroidSide>
        <PolaroidSide onClick={handleClick}>
          <Description>{singleStuff.itemDescription}</Description>
          <ButtonContainer>
            <Link
              to={`/edit/${singleStuff.firebaseKey}`}
              className="btn btn-outline-secondary"
            >
              <i className="fas fa-paperclip" />
            </Link>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                deleteStuff(singleStuff.firebaseKey).then(() => history.push('/stuff'));
              }}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </ButtonContainer>
        </PolaroidSide>
      </ReactCardFlip>
    </Background>
  );
}
