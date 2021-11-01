import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSingleStuff } from '../api/data/stuffData';
import Details from '../components/Details';
import backgroundImage from '../images/pageBackgroundImage.png';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

export default function SingleStuff() {
  const { key } = useParams();
  const [singleStuff, setSingleStuff] = useState({});
  useEffect(() => {
    getSingleStuff(key).then(setSingleStuff);
  }, []);

  return (
    <Background>
      <br />
      <br />
      <Details stuff={singleStuff} />
    </Background>
  );
}
