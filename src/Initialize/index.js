import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import { signOutUser } from '../api/auth';

function Initialize() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Hoard it all!</h1>
          <button
            onClick={signOutUser}
            type="button"
            className="btn btn-danger border border-dark"
          >
            Logout
          </button>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}

export default Initialize;
