import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { getSingleDigitalAssets } from '../../api/digitalAssets';
// import { useAuth } from '../../utils/context/authContext';

export default function ViewListing() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  // const [viewcount, setViewcount] = useState(0);

  useEffect(() => {
    getSingleDigitalAssets(firebaseKey).then((details) => {
      if (details) {
        setProductDetails(details);
      }
    });
  }, [firebaseKey]);

  // const addViewCount = () => {
  //   if (user.displayName !== productDetails.userName) {
  //     setViewcount((prevState) => prevState + 1);

  //     const payload = { views: viewcount };
  //     updateDigitalAssets(payload).then(getSingleDigitalAssets(firebaseKey));
  //     };
  //   }
  // };

  // useEffect(() => {
  //   addViewCount();
  // });

  const viewStyle = {
    marginTop: '25px',
    marginBottom: '50px',
    fontFamily: 'Poppins',
  };

  return (
    <>
      <Container>
        <div>
          Hello
        </div>
      </Container>
      <Carousel>
        <Carousel.Item>
          <Image
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
          <Image
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
          <Image
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
          <div style={{
            display: 'flex',
            color: '#7B7B7B',
            width: '200px',
            alignItems: 'center',
            marginBottom: '15px',
          }}
          >
            <Image src="/viewEye.png" style={{ height: '25px' }} />
            <p style={{ margin: '0px', paddingLeft: '5px', paddingRight: '5px' }}>viewcount</p>
            <p style={{ margin: '0px' }}>Views</p>
          </div>
          <h3 style={{ marginBottom: '5px', color: 'white' }}><b>{productDetails.name}</b></h3>
          <div style={{ display: 'flex', color: '#35CEB3' }}>
            <p style={{ color: '#7B7B7B', marginRight: '7px' }}> by </p>
            <p>{productDetails.userName}</p>
          </div>
          <h5 style={{ color: 'white' }}>{productDetails.description}</h5>
          <p style={{ color: 'white' }}>${productDetails.price}</p>
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
