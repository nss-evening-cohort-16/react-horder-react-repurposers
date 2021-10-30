import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';
import image from '../images/card-background.png';

export const CardImage = styled.div`
  background-image: url(${image});
  height: 100%;
  width: 100%;
  background-color: #a56a26;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  font-family: 'Heebo', sans-serif;
  background-color: #E0CCAA
  outline-color: #A56A26;
  align-items: flex-end;
  .btn-styling {
    align-self: flex-end;
  }
`;

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
`;

const Name = styled.div`
  text-align: center;
  color: #444430;
  font-size: 20px;
  font-weight: 200;
  font-family: 'Heebo', sans-serif;
`;

export default function Stuff({ stuff }) {
  return (
    <div
      className="card"
      style={{ width: '18rem', height: '12rem', margin: '3px' }}
    >
      <CardImage>
        <div>
          <Name className="card-title">{stuff.itemName}</Name>
          <Image src={stuff.itemImage} alt="ItemImage" />
        </div>
        <Buttons>
          <Link
            to={`/stuff/${stuff.firebaseKey}`}
            className="btn btn-outline-secondary btn-styling"
          >
            View
          </Link>
          <br />
          <Link
            to={`/edit/${stuff.firebaseKey}`}
            className="btn btn-outline-secondary btn-styling"
          >
            Edit
          </Link>
          <br />
          <button
            type="button"
            className="btn btn-outline-secondary btn-styling"
            onClick={() => deleteStuff(stuff.firebaseKey)}
          >
            Delete
          </button>
        </Buttons>
      </CardImage>
    </div>
  );
}

Stuff.propTypes = {
  stuff: PropTypes.shape({
    itemName: PropTypes.string,
    itemDescription: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
  }).isRequired,
};
