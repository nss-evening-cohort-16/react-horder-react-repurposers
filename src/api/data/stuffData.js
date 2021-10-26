import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllStuff = () => new Promise((resolve, reject) => {
  axios.get(`${databaseURL}/stuff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getAllStuff;
