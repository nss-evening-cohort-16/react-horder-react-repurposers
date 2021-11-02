import React from 'react';
import Form from '../components/Form';
import PageBackground from '../components/PageBackground';
import image from '../images/pageBackgroundImage.png';

const Background = PageBackground(image);

export default function NewStuff() {
  return (
    <Background>
      <Form />
    </Background>
  );
}
