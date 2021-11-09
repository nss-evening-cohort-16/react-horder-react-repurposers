import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllStuff = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/stuff.json?orderBy="uid"&equalTo="${user}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleStuff = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/stuff/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createStuff = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/stuff.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/stuff/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllStuff(user).then(resolve));
    })
    .catch(reject);
});

const deleteStuff = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios
    .delete(`${databaseURL}/stuff/${firebaseKey}.json`)
    .then(() => getAllStuff(user).then(resolve))
    .catch(reject);
});

const updateStuff = (formObj, user) => new Promise((resolve, reject) => {
  axios
    .patch(`${databaseURL}/stuff/${formObj.firebaseKey}.json`, formObj)
    .then(() => getAllStuff(user).then(resolve))
    .catch(reject);
});

export {
  getAllStuff, getSingleStuff, createStuff, deleteStuff, updateStuff,
};
