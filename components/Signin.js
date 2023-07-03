import React from 'react';
import {
  Button, Container, Image,
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
            fontSize: '65px',
          }}
          > YOUR BLUEPRINT
          </h1>
          <div>
            <h1 style={{
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              marginBottom: '10px',
              paddingBottom: '0px',
              width: '550px',
              color: 'white',
              fontSize: '65px',
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
              fontSize: '35px',
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
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="BackgroundWidthHolder">
          <Container style={{ width: '200px', color: '#161616' }} />
        </div>
        <div className="SmilingWomanCover">
          <Container style={{ width: '200px', color: '#161616' }} />
        </div>
        <div className="SmilingWoman">
          <Image
            src="/GithubGirl.png"
            alt="Bleuprint"
            width={1200}
          />
        </div>
      </section>
      <section className="Section2">
        <div className="Section2Title">
          <p>How Our Platform Works</p>
        </div>
        <div className="Section2Row">
          <div className="Box1">
            <Image
              src="/ImageStore.png"
              alt="Bleuprint"
            />
            <h5 style={{ marginBottom: '0px', padding: '10px' }}> Sign-In to Open a Store </h5>
            <p style={{ width: '300px', paddingTop: '0px' }}>All you have to do is Sign-In to start. Create and Upload a product to sell in the Bleuprint marketplace. It consists of a wide variety of digital products meant to help fellow creatives on their journey to financial freedom.</p>
          </div>
          <div className="Box2">
            <Image
              src="/ImagePromote.png"
              alt="Bleuprint"
            />
            <h5 style={{ marginBottom: '0px', padding: '10px' }}> Promote Your Products </h5>
            <p style={{ width: '300px', paddingTop: '0px' }}>Bleuprint will market and share the latest products on the marketplace with the community. It’s completely up to you how much effort and time you want to put towards growing your following and promote your products in your own way.</p>
          </div>
          <div className="Box3">
            <Image
              src="/ImageEarn.png"
              alt="Bleuprint"
            />
            <h5 style={{ marginBottom: '0px', padding: '10px' }}> Start Earning </h5>
            <p style={{ width: '300px', paddingTop: '0px' }}>You will earn 95% of each sale when you sell directly to your customers. You will also have monthly expenses to take into account. You’ll get paid monthly into your PayPal account, or via. bank transfer.</p>
          </div>
        </div>
      </section>
      <section className="BenefitsSection">
        <div className="BreakIntro">
          <p> Business has never been so easy! Let your entrepreneurial spirit soar as you embark on a remarkable journey towards building a thriving business. </p>
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
            <h3>
              Safe and Secure
            </h3>
            <p>
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
            <h3>
              Financial Analytics
            </h3>
            <p>
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
            <h3>
              Business Formation
            </h3>
            <p>
              Safeguarding your valuable data and ensuring compliance with GDPR requirements is our top priority. With our comprehensive suite of online and data security services, we provide you with robust protection against cyber threats, giving you peace of mind and the confidence to focus on what matters most: your business.
            </p>
          </div>
        </div>
        <div className="WePromote">
          <Image
            src="/ImageWePromote.png"
            alt="Bleuprint"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '678px',
              flexShrink: 0,
            }}
          />
          <div className="WePromoteBody">
            <h3>
              We Promote For You
            </h3>
            <p>
              Struggling with marketing your products? No worries, Bleuprint can sell on your behalf. Bleuprint will market and share your products on the marketplace with the community. For every purchase, Bleuprint receives 75% of the total revenue.
            </p>
          </div>

        </div>
      </section>
      <section className="OurMission">
        <div>
          <h1>Our Mission</h1>
          <p> Our mission is to empower digital artists by creating a platform that unlocks new opportunities and financial independence. We are dedicated to revolutionizing the art industry by providing artists with the means to take control of their financial journey and discover alternative revenue streams beyond traditional studio dependency.

            Our platform is designed to redefine the narrative around artists, debunking the myth of the starving artist.
          </p>
        </div>
      </section>
      <section className="Ending">
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '15vh',
            padding: '30px',
            maxWidth: '400px',
            margin: '0 auto',
            marginTop: '100px',
          }}
        >
          <h4>What are you waiting for? </h4>
          <h2 style={{ marginBottom: '50px', width: '20rem', fontWeight: 'bold' }}>Get your art online!</h2>
          <div>
            <Button
              type="button"
              size="lg"
              className="copy-btn"
              onClick={signIn}
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
