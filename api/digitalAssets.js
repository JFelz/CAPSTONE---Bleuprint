import { clientCredentials } from '../utils/client';

const dbURL = clientCredentials.databaseURL;

const getDigitalAssets = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createDigitalAssets = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteDigitalAssets = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateDigitalAssets = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUserDigitalAssets = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleDigitalAssets = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getDigitalAssets,
  deleteDigitalAssets,
  createDigitalAssets,
  getUserDigitalAssets,
  getSingleDigitalAssets,
  updateDigitalAssets,
};
