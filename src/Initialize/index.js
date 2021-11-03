import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';
import SignIn from '../views/SignIn';
import Navigation from '../components/Navigation';
import Routes from '../routes';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0px;

  h1 {
    color: #444430;
    font-family: 'Heebo', sans-serif;
    font-size: 84px;
    font-weight: 400;
    text-shadow: 2px 2px #a9a29e;
  }

  h5 {
    color: #a56a26;
    font-family: 'Nothing You Could Do', cursive;
    font-size: 35px;
    font-weight: bold;
  }
`;

function Initialize() {
  const [user, setUser] = useState(null);

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
    <>
      <Navigation user={user} />
      <Background>{user ? <Routes /> : <SignIn user={user} />}</Background>
    </>
  );
}

export default Initialize;
