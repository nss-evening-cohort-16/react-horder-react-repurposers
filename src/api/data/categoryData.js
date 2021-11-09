import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllCategories = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/category.json?orderBy="user"&equalTo="${user}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createCategory = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/category.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/category/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllCategories(user).then(resolve));
    })
    .catch(reject);
});

export { getAllCategories, createCategory };
