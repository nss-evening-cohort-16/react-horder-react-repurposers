import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { deleteStuff, getSingleStuff } from '../api/data/stuffData';
import backgroundImage from '../images/pageBackgroundImage.png';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

const PolaroidFrame = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  text-align: center;

  width: 3.5in;
  height: 4.2in;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
`;

const FrameFront = styled.div``;

const FrameBack = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Photo = styled.img`
  width: 3.1in;
  height: 3.1in;
  border: 1px solid black;
`;

const Caption = styled.div`
  margin-top: 0.3em;
  align-items: center;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 150%;
  font-weight: bold;
  color: #444340;
`;

const Description = styled.div`
  font-family: 'Nothing You Could Do', cursive;
  color: #444340;
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
  const [singleStuff, setSingleStuff] = useState({});
  const { key } = useParams();

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
        <PolaroidFrame onClick={handleClick}>
          <FrameFront>
            <Photo src={singleStuff.itemImage} alt="ItemImage" />
            <Caption>{singleStuff.itemName}</Caption>
          </FrameFront>
        </PolaroidFrame>
        <PolaroidFrame onClick={handleClick}>
          <FrameBack>
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
          </FrameBack>
        </PolaroidFrame>
      </ReactCardFlip>
    </Background>
  );
}
