import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';

const Buttons = styled.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  font-family: 'Heebo', sans-serif;
  background-color: #E0CCAA
  outline-color: #A56A26;
`;

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
  padding: 10px;
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
    <div className="card" style={{ width: '18rem', height: '12rem', margin: '3px' }}>
      <div className="card-body">
        <Name className="card-title">{stuff.itemName}</Name>
        <Image src={stuff.itemImage} alt="ItemImage" />
        <Buttons>
          <Link to={`/stuff/${stuff.firebaseKey}`} className="btn btn-outline-secondary">View</Link>
          <br />
          <Link to={`/edit/${stuff.firebaseKey}`} className="btn btn-outline-secondary">Edit</Link>
          <br />
          <button type="button" className="btn btn-outline-secondary" onClick={() => deleteStuff(stuff.firebaseKey)}>
            Delete
          </button>
        </Buttons>
      </div>
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
