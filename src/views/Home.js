import React from 'react';
import styled from 'styled-components';
import img from '../images/pageBackgroundImage.png';

export const BackgroundImage = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Header = styled.h1`
  text-align: center;
`;

const MidText = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 40px;
`;

export function Home() {
  return (
    <BackgroundImage>
      <div>
        <Header>React Repurposers</Header>
        <div>
          <MidText>Repurposing the items that you do not want.</MidText>
        </div>
      </div>
    </BackgroundImage>
  );
}
