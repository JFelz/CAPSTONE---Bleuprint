import { clientCredentials } from "../utils/client";

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

export default getDigitalAssets;
