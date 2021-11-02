import React from 'react';
import ItemCounter from '../components/ItemCounter';
import PageBackground from '../components/PageBackground';
import image from '../images/pageBackgroundImage.png';

const Background = PageBackground(image);

export default function Home() {
  return (
    <Background>
      <h1>STUFF HOARDER</h1>
      <ItemCounter />
    </Background>
  );
}
