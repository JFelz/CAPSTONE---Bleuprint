import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import {
  Card,
  Carousel,
  Container,
  Button,
} from 'react-bootstrap';
import { createMyCartOrders, getSingleDigitalAssets, updateMyCartOrders } from '../../api/digitalAssets';
import { useAuth } from '../../utils/context/authContext';
import Footer from '../../components/Footer';
// import { useAuth } from '../../utils/context/authContext';

function ViewListing() {
  const [productDetails, setProductDetails] = useState({});
  const [bool, setBool] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDigitalAssets(firebaseKey).then((details) => {
      if (details) {
        setProductDetails(details);
      }
    });
  }, [firebaseKey]);

  const handleClick = (e) => {
    e.preventDefault();

    setBool(true);

    const payload = {
      ...productDetails,
      cartUser: user.uid,
    };
    createMyCartOrders(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateMyCartOrders(patchPayload);
    });
  };

  // expense.push(productDetails);

  return (
    <>
      <Container style={{ width: '100%' }}>
        <Card style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          margin: '0px',
          padding: '15px',
          objectFit: 'cover',
        }}
        >
          <Image src={productDetails.userImage} style={{ width: '100px', height: '100px', borderRadius: '15px' }} />
          <div>
            <div style={{
              marginLeft: '20px',
              marginRight: '50px',
              width: '100%',
              color: 'white',
            }}
            >
              by <b style={{ color: '#35CEB3' }}>{productDetails.userName}</b>
            </div>
            <div style={{ marginLeft: '20px', width: '100%', color: 'white' }}>
              in {productDetails.category}
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            paddingRight: '30px',
          }}
          >
            <Button style={{
              borderRadius: '25px',
              backgroundColor: '#35CEB3',
              borderWidth: '0px',
              width: '300px',
            }}
            >
              Contact Me
            </Button>
          </div>

        </Card>
      </Container>
      <Carousel>
        <Carousel.Item>
          <Image
            width={700}
            height={700}
            className="d-block w-100"
            src={productDetails.imageUrl}
            alt="First slide"
            style={{ objectFit: 'contain', backgroundColor: '#0D0D0D', borderRadius: '10px' }}
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
            style={{ objectFit: 'contain', backgroundColor: '#0D0D0D', borderRadius: '10px' }}
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
            style={{ objectFit: 'contain', backgroundColor: '#0D0D0D', borderRadius: '10px' }}
          />

        </Carousel.Item>
      </Carousel>
      {/* //Left Side */}
      <div className="ViewPage">
        <div style={{ width: '50%', backgroundColor: '' }} className="text-black ms-5 details">
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
          <h5 style={{
            color: 'white',
            paddingBottom: '15px',
            paddingTop: '15px',
            fontFamily: 'Poppins regular',
          }}
          >
            PRODUCT DETAILS
          </h5>
          <p style={{ color: 'white', fontFamily: 'Poppins light' }}>{productDetails.description}</p>
        </div>
        {/* Right Side */}
        <div style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '',
          borderWidth: '10px',
          borderColor: 'black',
        }}
        >

          <div
            style={{
              width: '50%',
              height: '75px',
              color: '#F4F4F4',
              fontSize: '20px',
            }}
            className="d-flex justify-content-between"
          >
            <p>Standard License</p>
            <p>USD ${productDetails.price}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '50%',
              height: '50px',
              color: '#F4F4F4',
              fontSize: '20px',
            }}
          >
            { bool === false
              ? (
                <Button
                  type="button"
                  className="btn btn-success"
                  style={{ backgroundColor: '#70E35D', width: '100%', borderWidth: '0px' }}
                  onClick={handleClick}
                >
                  Add To Cart
                </Button>
              ) : (
                <Button
                  type="button"
                  className="btn btn-danger"
                  style={{ backgroundColor: '#D84141', width: '100%', borderWidth: '0px' }}
                >
                  Already in Cart
                </Button>
              )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewListing;
