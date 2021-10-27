import React, { useEffect, useState } from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleStuff } from '../api/data/stuffData';

export default function EditStuffView() {
  const [editStuff, setEditStuff] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleStuff(key).then(setEditStuff);
  });
  return (
    <div>
      <Form stuffObj={editStuff} />
    </div>
  );
}

EditStuffView.propTypes = {
  stuffObj: PropTypes.shape({
    itemName: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
  }),
};

EditStuffView.defaultProps = { stuffObj: {} };
