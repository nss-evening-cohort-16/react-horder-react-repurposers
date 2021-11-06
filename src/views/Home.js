import React from 'react';
import ItemCounter from '../components/ItemCounter';
import PaperContainer from '../components/PaperContainer';
import userObj from '../api/data/userObj';

const Page = PaperContainer();

export default function Home() {
  userObj();
  return (
    <Page>
      <h1>STUFF HOARDER</h1>
      <ItemCounter />
    </Page>
  );
}
