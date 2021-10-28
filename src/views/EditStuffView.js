import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import { getSingleStuff } from '../api/data/stuffData';

export default function EditStuffView() {
  const [editStuff, setEditStuff] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSingleStuff(firebaseKey).then((stuff) => {
      if (isMounted) setEditStuff(stuff);
    });
    return () => {
      isMounted = false;
    };
  }, [editStuff]);

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
