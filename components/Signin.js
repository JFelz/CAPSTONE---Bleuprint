import React from 'react';
import {
  Button, Image,
} from 'react-bootstrap';
import { signIn } from '../utils/auth';
import NoAuth from './NoAuth';

function Signin() {
  return (
    <>
      <NoAuth />
      <section className="HeroSection">
        <div className="BleuprintTitle">
          <h1 style={{
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            marginTop: '100px',
            marginBottom: '0px',
            paddingBottom: '0px',
            width: '550px',
            color: 'white',
            fontSize: '50px',
          }}
          > YOUR BLUEPRINT
          </h1>
          <div className="Freedom">
            <h1 style={{
              fontWeight: 'bold',
              marginBottom: '5px',
              paddingBottom: '0px',
              width: '550px',
              color: 'white',
              fontSize: '50px',
            }}
            >TO <span>FREEDOM</span>
            </h1>
          </div>
          <div>
            <h3 style={{
              fontFamily: 'Poppins',
              fontWeight: 'initial',
              marginBottom: '40px',
              paddingBottom: '0px',
              width: '350px',
              color: 'white',
              fontSize: '30px',
            }}
            >BEGINS HERE.
            </h3>
          </div>
          <div>
            <p style={{ color: 'white', marginBottom: '50px', width: '20rem' }}>Putting power back into the hands of digital artists and shattering the myth of “the starving artist”.</p>
          </div>
          <div>
            <Button
              type="button"
              size="lg"
              className="copy-btn"
              onClick={signIn}
              style={{
                color: 'white',
                fontWeight: 'bolder',
                textShadow: '0px 0.5px 1.5px #3d3d3d',
                boxShadow: '0px 2px 2px black',
              }}
            >
              Sign In with Google Account
            </Button>
          </div>
        </div>
        <div className="LeftBackground" />
        <div className="SmilingWoman" />
      </section>
      <section className="Section2">
        <div className="Section2BoxesJoined">
          <div className="Section2Before" />
          <div className="Section2After" />
        </div>
        <div className="Section2Title">
          <p>How Our Platform Works</p>
        </div>
        <div className="Section2Row">
          <div className="Box1">
            <Image
              src="/IMarketplaceStore.png"
              alt="Bleuprint"
            />
            <h5 style={{ marginBottom: '0px', padding: '10px' }}> Sign-In to Open a Store </h5>
            <p style={{ width: '300px', paddingTop: '0px', fontSize: '17px' }}> All you have to do is Sign-In to start. You can create and upload a product to sell in the Bleuprint marketplace. The marketplace consists of a wide variety of digital products meant to help fellow creatives on their journey to financial freedom.</p>
          </div>
          <div className="Box2">
            <Image
              src="/ImagePromote.png"
              alt="Bleuprint"
            />
            <h5 style={{ marginBottom: '0px', padding: '10px' }}> Promote Your Products </h5>
            <p style={{ width: '300px', paddingTop: '0px', fontSize: '17px' }}>Bleuprint will market and share the latest products on the marketplace with the community. It’s completely up to you how much effort and time you want to put towards growing your following and promote your products in your own way.</p>
          </div>
          <div className="Box3">
            <Image
              src="/ImageEarn.png"
              alt="Bleuprint"
            />
            <h5 style={{ marginBottom: '0px', padding: '10px' }}> Start Earning </h5>
            <p style={{ width: '300px', paddingTop: '0px', fontSize: '17px' }}>You will earn 95% of each sale when you sell directly to your customers. You will also have monthly expenses to take into account displayed in the Analytics page of your account. You’ll get paid monthly into your PayPal account, or via. bank transfer.</p>
          </div>
        </div>
      </section>
      <section className="BenefitsSection">
        <div className="BreakIntro">
          <p style={{ fontWeight: 'lighter', fontSize: '18px' }}> Business has never been so easy! Let your spirit soar as you embark on a remarkable journey towards building a thriving business. </p>
        </div>
        <div className="SafeSecure">
          <Image
            src="/ImageSafeSecure.png"
            alt="Bleuprint"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '678px',
              flexShrink: 0,
            }}
          />
          <div className="SafeSecureBody">
            <h3 style={{ marginBottom: '15px' }}>
              Safe and Secure
            </h3>
            <p style={{ fontWeight: 'lighter', fontSize: '17px' }}>
              Safeguarding your valuable data and ensuring compliance with GDPR requirements is our top priority. With our comprehensive suite of online and data security services, we provide you with robust protection against cyber threats, giving you peace of mind and the confidence to focus on what matters most: your business.
            </p>
          </div>
        </div>
        <div className="FinAnalytics">
          <Image
            src="/ImageFinAnalytics.png"
            alt="Bleuprint"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '678px',
              flexShrink: 0,
            }}
          />
          <div className="FinAnalyticsBody">
            <h3 style={{ marginBottom: '15px' }}>
              Financial Analytics
            </h3>
            <p style={{ fontWeight: 'lighter', fontSize: '17px' }}>
              Safeguarding your valuable data and ensuring compliance with GDPR requirements is our top priority. With our comprehensive suite of online and data security services, we provide you with robust protection against cyber threats, giving you peace of mind and the confidence to focus on what matters most: your business.
            </p>
          </div>
        </div>
        <div className="BusinessForm">
          <Image
            src="/ImageBusinessForm.png"
            alt="Bleuprint"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '678px',
              flexShrink: 0,
            }}
          />
          <div className="BusinessFormBody">
            <h3 style={{ marginBottom: '15px' }}>
              Business Formation
            </h3>
            <p style={{ fontWeight: 'lighter', fontSize: '17px' }}>
              Safeguarding your valuable data and ensuring compliance with GDPR requirements is our top priority. With our comprehensive suite of online and data security services, we provide you with robust protection against cyber threats, giving you peace of mind and the confidence to focus on what matters most: your business.
            </p>
          </div>
        </div>
      </section>
      <section className="OurMission">
        <div>
          <h1 style={{ marginBottom: '15px' }}> Our Mission </h1>
          <p style={{ fontWeight: 'lighter' }}> Our mission is to empower digital artists by creating a platform that unlocks new opportunities and financial independence. We are dedicated to revolutionizing the art industry by providing artists with the means to take control of their financial journey and discover alternative revenue streams beyond traditional studio dependency.

            Our platform is designed to redefine the narrative around artists, debunking the myth of the starving artist.
          </p>
        </div>
      </section>
      <section className="Ending">
        <div className="EndingBoxesJoined">
          <div className="EndingBefore" />
          <div className="EndingAfter" />
        </div>
        <div
          className="text-center d-flex flex-column justify-content-center align-items-center"
          style={{
            height: '10vh',
            padding: '0px',
            marginBottom: '150px',
          }}
        >
          <h4 style={{ marginBottom: '5px' }}>What are you waiting for? </h4>
          <h2 style={{ marginBottom: '50px', width: '20rem', fontWeight: 'bold' }}>Get your art online!</h2>
          <div>
            <Button
              type="button"
              size="lg"
              className="copy-btn"
              onClick={signIn}
              style={{
                color: 'white',
                fontWeight: 'bolder',
                textShadow: '0px 0.5px 1.5px #3d3d3d',
                boxShadow: '0px 2px 2px #8d8d8d',
              }}
            >
              Sign In with Google Account
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
