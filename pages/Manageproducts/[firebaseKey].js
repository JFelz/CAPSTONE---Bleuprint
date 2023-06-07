import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { getSingleDigitalAssets } from '../../api/digitalAssets';

export default function ViewListing() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDigitalAssets(firebaseKey).then((details) => {
      if (details) {
        setProductDetails(details);
      }
    });
  }, [firebaseKey]);

  const viewStyle = {
    marginTop: '25px',
    marginBottom: '50px',
    fontFamily: 'Tahoma',
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={productDetails.imageUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{productDetails.name}</h3>
            <p>{productDetails.userName}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={productDetails.imageUrl_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{productDetails.name}</h3>
            <p>{productDetails.userName}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={700}
            height={700}
            className="d-block w-100"
            src={productDetails.imageUrl_3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <div style={viewStyle} className="mt-5 d-flex flex-wrap">
        <div className="text-black ms-5 details">
          <h3 style={{ marginBottom: '20px' }}>{productDetails.name}</h3>
          <h5>{productDetails.description}</h5>
          <p>{productDetails.userName}</p>
          <p>${productDetails.price}</p>
          {/* <p>{listingDetails.location}</p>
          <p>{listingDetails.propertyType}</p>
          <p>Amenities: {listingDetails.amenities}</p>
          <p>{listingDetails?.description || ''}</p>
          <hr /> */}
        </div>
      </div>
    </>
  );
}
