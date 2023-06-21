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

const createMyCartOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/myCart.json`, {
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

const createMyLibraryProducts = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/MyLibrary.json`, {
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

const deleteMyCartAssets = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/myCart/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMyLibraryAssets = ({ firebaseKey }) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/MyLibrary/${firebaseKey}.json`, {
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

const updateMyCartOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/myCart/${payload.firebaseKey}.json`, {
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

const updateMyLibraryOrders = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/MyLibrary/${payload.firebaseKey}.json`, {
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

const getUserCartOrders = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/myCart.json?orderBy="cartUser"&equalTo="${uid}"`, {
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

const getUserLibraryOrders = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/MyLibrary.json?orderBy="cartUser"&equalTo="${uid}"`, {
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

const getProps = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="category"&equalTo="props"`, {
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

const getTexturing = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="category"&equalTo="texturing"`, {
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

const getCharacterArt = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="category"&equalTo="character art"`, {
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

const getEnvironmentArt = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="category"&equalTo="environment art"`, {
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

const getLighting = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="category"&equalTo="lighting"`, {
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

const getProcedural = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/digitalAssets.json?orderBy="category"&equalTo="procedural"`, {
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

const getSingleCartAsset = (firebaseKey) => new Promise((resolve, reject) => {
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
  getProps,
  getTexturing,
  getLighting,
  getProcedural,
  updateMyLibraryOrders,
  getSingleCartAsset,
  getUserLibraryOrders,
  deleteMyLibraryAssets,
  createMyLibraryProducts,
  deleteMyCartAssets,
  getUserCartOrders,
  createMyCartOrders,
  updateMyCartOrders,
  getEnvironmentArt,
  getCharacterArt,
  getDigitalAssets,
  deleteDigitalAssets,
  createDigitalAssets,
  getUserDigitalAssets,
  getSingleDigitalAssets,
  updateDigitalAssets,
};
