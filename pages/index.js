// // import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// // import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// // import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
// import { useState, useEffect } from 'react';
// import getDigitalAssets from '../api/digitalAssets';
// // import { Card } from 'react-bootstrap';

// function Home() {
//   // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
//   // const [video, setVideos] = useState();

//   const seePlaylistVideos = () => {
//     getDigitalAssets().then(setVideos);
//   };

//   useEffect(() => {
//     seePlaylistVideos();
//   }, []);
//   // const user = { displayName: 'Jovanni' }; // TODO: COMMENT OUT FOR AUTH
//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >

//       {/* <h1>Hello {user.displayName}! </h1> */}
//       {/* <Card key={video} /> */}
//     </div>
//   );
// }

// export default Home;
