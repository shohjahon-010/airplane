import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container text-center">
        <div className="footer-logo d-flex justify-content-center text-center">
          <img src="./img/footer-img.png" alt="" />
          <h2 className="text-white">AIR</h2>
        </div>
          <div className="divv"></div>
        <div>
          <div className="d-md-flex justify-content-between">
            <div className="d-flex gap-sm-5 gap-2">
              <p>SERVICES </p>
              <p>ABOUT US</p>
              <p>NEWS</p>
              <p>CONTACT</p>
            </div>
            <p>© 2021 Air. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
