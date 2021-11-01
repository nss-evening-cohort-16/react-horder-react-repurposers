import React from 'react';
import styled from 'styled-components';
import ItemCounter from '../components/ItemCounter';
import img from '../images/pageBackgroundImage.png';

export const BackgroundImage = styled.div`
  background-image: url(${img});
  position: absolute;
  height: 100%;
  width: 100%;
  background-repeat: repeat;

  h1 {
    color: #444430;
    text-align: center;
    font-size: 84px;
    font-weight: 400;
    font-family: 'Heebo', sans-serif;
    text-shadow: 2px 2px #a9a29e;
  }

  h3 {
    color: #444430;
    text-align: center;
    font-size: 56px;
    font-weight: 400;
    font-family: 'Heebo', sans-serif;
    text-shadow: 2px 2px #a9a29e;
  }

  .cardHouse {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .header {
    padding: 50px;
  }
`;

export function Home() {
  return (
    <BackgroundImage>
      <div className="cardHouse">
        <h1 className="header">REACT REPURPOSERS</h1>
        <ItemCounter />
      </div>
    </BackgroundImage>
  );
}
