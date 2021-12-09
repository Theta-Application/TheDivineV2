import React from "react";
import '../css/footer.css';
import logo from '../img/LOGO.png'


function Footer() {

  return (
    <div className="footer">
              <img width="75px" src={logo}  alt="eye"/>
        <h2>© 2021 The Divine LLC</h2>
    </div>
  );
}

export default Footer;
