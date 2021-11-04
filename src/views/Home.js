import React from 'react';
import ItemCounter from '../components/ItemCounter';
import PaperContainer from '../components/PaperContainer';

const Page = PaperContainer();

export default function Home() {
  return (
    <Page>
      <h1>STUFF HOARDER</h1>
      <ItemCounter />
    </Page>
  );
}
