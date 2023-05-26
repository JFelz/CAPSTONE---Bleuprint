const url = '';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f0e103fd7cmshed3791833b7246ap178d45jsn6d40b378ec9d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

// const getDigitalAssets = () => new Promise((resolve, reject) => {
//   fetch(`https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL2e4mYbwSTbao5I-cAVbanrMNVGgGN7O3&part=snippet&maxResults=50`, {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'f0e103fd7cmshed3791833b7246ap178d45jsn6d40b378ec9d',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data) {
//         resolve(Object.values(data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch(reject);
// });
