import React from 'react';
import styled from 'styled-components';
import ItemCounter from '../components/ItemCounter';
import img from '../images/pageBackgroundImage.png';

export const BackgroundImage = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  position: absolute;
  height: 100%;
  width: 100%;

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
    font-weight: 300;
    font-family: 'Heebo', sans-serif;
    text-shadow: 2px 2px #a9a29e;
  }
`;

export function Home() {
  return (
    <BackgroundImage>
      <div>
        <h1>React Repurposers</h1>
        <div>
          <ItemCounter />
        </div>
      </div>
    </BackgroundImage>
  );
}
