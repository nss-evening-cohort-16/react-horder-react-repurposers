import firebase from 'firebase/app';

export default function userObj() {
  const auth = firebase.auth();
  const user = auth.currentUser.uid;
  return user;
}
