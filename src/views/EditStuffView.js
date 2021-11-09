import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import { getSingleStuff } from '../api/data/stuffData';
import PaperContainer from '../components/PaperContainer';

const Page = PaperContainer();

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
  }, []);

  return (
    <Page>
      <Form stuffObj={editStuff} />
    </Page>
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
