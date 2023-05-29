// import React from 'react';
// // import PropTypes from 'prop-types';
// import { Card, Button } from 'react-bootstrap';
// import Link from 'next/link';

// export default function ProductCard([listingObj, onUpdate]) {
//   return (
//     <>
//       <Link href={`/Listings/${listingObj.firebaseKey}`} passHref>
//         <Card style={{
//           height: '400px',
//           width: '250px',
//           margin: '10px',
//           cursor: 'pointer',
//         }}
//         >
//           <Card.Img variant="top" src={listingObj.imageUrl} alt={listingObj.title} style={{ height: '200px' }} />
//           <Card.Body>
//             <Card.Title style={{ minHeight: '20px', fontFamily: 'Gill Sans' }}>{listingObj.title}</Card.Title>
//             <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>${listingObj.pricePerNight} per night</p>
//             <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{listingObj.petsAllowed && <span>Pets Allowed<br /></span> }</p>
//             {/* DYNAMIC LINK TO VIEW THE LISTING DETAILS  */}
//             {/* DYNAMIC LINK TO EDIT THE LISTING DETAILS  */}
//           </Card.Body>
//           <Card.Footer className="text-muted">
//             <Link href={`/Listings/edit/${listingObj.firebaseKey}`} passHref>
//               <Button variant="info" style={{ background: 'black', color: 'white', border: 'black' }}>EDIT</Button>
//             </Link>
//             <Link href="/explore" passHref>
//               <Button variant="danger" onClick={deleteThisListing} className="m-2">
//                 DELETE
//               </Button>
//             </Link>

//           </Card.Footer>
//         </Card>
//       </Link>
//     </>
//   );
// }
