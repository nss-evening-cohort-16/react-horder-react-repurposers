import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllStuff = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/stuff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createStuff = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/stuff.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/stuff/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllStuff().then(resolve));
    })
    .catch(reject);
});

const deleteStuff = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${databaseURL}/stuff/${firebaseKey}.json`)
    .then(() => getAllStuff().then(resolve))
    .catch(reject);
});

const updateStuff = (formObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${databaseURL}/stuff/${formObj.firebaseKey}.json`, formObj)
    .then(() => getAllStuff().then(resolve))
    .catch(reject);
});

export {
  getAllStuff, createStuff, deleteStuff, updateStuff,
};
