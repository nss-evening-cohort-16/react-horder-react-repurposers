import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllCategories = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/category.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createCategory = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/category.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/category/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllCategories().then(resolve));
    })
    .catch(reject);
});

export { getAllCategories, createCategory };
