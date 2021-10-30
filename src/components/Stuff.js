import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';

const Buttons = styled.div`
  display: flex;
  column-gap: 5px;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
  padding: 10px;
`;

export default function Stuff({ stuff }) {
  return (
    <div className="card" style={{ width: '18rem', height: '12rem', margin: '3px' }}>
      <div className="card-body">
        <h5 className="card-title">{stuff.itemName}</h5>
        <Image src={stuff.itemImage} alt="ItemImage" />
        <Buttons>
          <Link to={`/stuff/${stuff.firebaseKey}`} className="btn btn-warning">View</Link>
          <br />
          <Link to={`/edit/${stuff.firebaseKey}`} className="btn btn-primary">Edit</Link>
          <br />
          <button type="button" className="btn btn-danger" onClick={() => deleteStuff(stuff.firebaseKey)}>
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
