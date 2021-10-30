import React from 'react';
import styled from 'styled-components';
import Polaroid from '../components/Polaroid';
import backgroundImage from '../images/homeBackgroundImage.png';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

export default function SingleStuff() {
  return (
    <Background>
      <Polaroid />
    </Background>
  );
}
