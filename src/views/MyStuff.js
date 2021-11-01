import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllStuff } from '../api/data/stuffData';
import Polaroid from '../components/Polaroid';
import backgroundImage from '../images/homeBackgroundImage.png';

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${backgroundImage});
`;

const MyStuffView = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin: 10px;
  justify-content: center;
`;

export default function MyStuff() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllStuff().then((stuffs) => {
      if (isMounted) setItems(stuffs);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <Background>
        <h1 className="myStuffTitle">MY STUFF</h1>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            CATEGORY
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li className="list-group-item">For Body</li>
            <li className="list-group-item">For Home</li>
            <li className="list-group-item">For Food</li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="linkStyling" to="/new">
                NEW
              </Link>
            </li>
          </ul>
        </div>
        <MyStuffView>
          {items.map((stuff) => (
            <Polaroid key={stuff.firebaseKey} stuff={stuff} />
          ))}
        </MyStuffView>
      </Background>
    </>
  );
}
