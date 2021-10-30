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
`;

const Header = styled.h1`
  text-align: center;
`;

export function Home() {
  return (
    <BackgroundImage>
      <div>
        <Header>React Repurposers</Header>
        <div>
          <ItemCounter />
        </div>
      </div>
    </BackgroundImage>
  );
}
