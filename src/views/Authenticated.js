import React from 'react';
import PropTypes from 'prop-types';

export default function Authenticated({ user }) {
  return (
    <div className="text-center mt-5">
      <h1>Hoard it all, {user.fullName}!</h1>
    </div>
  );
}

// NOTE: The propTypes are set agains the component and the term is camelCased
Authenticated.propTypes = {
  user: PropTypes.objectOf({
    fullName: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};
