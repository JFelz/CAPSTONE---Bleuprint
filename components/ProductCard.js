// import React from 'react';
// import PropTypes from 'prop-types';
// import { Card, Button } from 'react-bootstrap';
// import Link from 'next/link';

// export default function ProductCard([productObj, onUpdate]) {
//   return (
//     <>
//       <Link href={`/index/${productObj.firebaseKey}`} passHref>
//         <Card style={{
//           height: '400px',
//           width: '250px',
//           margin: '10px',
//           cursor: 'pointer',
//         }}
//         >
//           <Card.Img variant="top" src={productObj.imageUrl} alt={productObj.name} style={{ height: '200px' }} />
//           <Card.Body>
//             <Card.Title style={{ minHeight: '20px', fontFamily: 'Gill Sans' }}>Product Details: {productObj.description}</Card.Title>
//             {/* DYNAMIC LINK TO VIEW THE LISTING DETAILS  */}
//             {/* DYNAMIC LINK TO EDIT THE LISTING DETAILS  */}
//           </Card.Body>
//           <Card.Footer className="text-muted">
//             <Link href={`/Listings/edit/${productObj.firebaseKey}`} passHref>
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

// ProductCard.propTypes = {
// productObj: PropTypes.shape({
//   name: PropTypes.string,
//   description: PropTypes.string,
//   imageUrl: PropTypes.string,
//   price: PropTypes.number,
//   category: PropTypes.string,
// }).isRequired,
// onUpdate: PropTypes.func.isRequired,
// };
