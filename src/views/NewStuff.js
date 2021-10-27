import React from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';

export default function NewStuff({
  stuffObj, setStuff, setEditStuff, user,
}) {
  return (
    <div>
      <Form
        stuffObj={stuffObj}
        setStuff={setStuff}
        setEditStuff={setEditStuff}
        user={user}
      />
    </div>
  );
}

NewStuff.propTypes = {
  stuffObj: PropTypes.shape({
    itemName: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    uid: PropTypes.string,
  }),
  setStuff: PropTypes.func.isRequired,
  setEditStuff: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

NewStuff.defaultProps = { stuffObj: {}, user: null };
