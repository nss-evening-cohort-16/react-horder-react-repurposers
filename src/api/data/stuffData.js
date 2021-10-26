import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllStuff = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/stuff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createStuff = () => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/stuff.json`)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/stuff/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllStuff().then(resolve));
    })
    .catch(reject);
});

export { getAllStuff, createStuff };
