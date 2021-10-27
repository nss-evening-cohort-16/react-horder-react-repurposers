import React from 'react';
import { Link } from 'react-router-dom';

export default function MyStuff() {
  const firebaseKey = 'item1';

  return (
    <div>
      <h1>MY STUFF</h1>
      <Link to={`/stuff/${firebaseKey}`}>Single</Link>
    </div>
  );
}
