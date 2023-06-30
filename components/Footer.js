import React from 'react';
import { Image } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <div className="footerSection">
        <div className="footerDiv">
          <div className="footerTitle">
            <Image
              src="/captitle.png"
              width={135}
              height={40}
              alt="Bleuprint"
            />
            <p style={{ marginTop: '7px' }}>© 2023 Bleuprint</p>
          </div>
          <div className="CompanyColumn">
            <h5> COMPANY </h5>
            <a href="https://help.rockcontent.com/en/how-to-solve-404-error"> Help Center </a>
          </div>
          <div className="CommunityColumn">
            <h5> COMMUNITY </h5>
            <a href="https://www.youtube.com"> Youtube </a>
            <a href="https://www.twitter.com"> Twitter </a>
            <a href="https://www.instagram.com/overscopingdev/"> Instagram </a>
            <a href="https://www.facebook.com"> Facebook </a>
          </div>
          <div className="LegalColumn">
            <h5>LEGAL</h5>
            <a href="https://help.rockcontent.com/en/how-to-solve-404-error">Terms of Service</a>
            <a href="https://help.rockcontent.com/en/how-to-solve-404-error">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}
