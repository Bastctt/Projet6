import React from 'react';
import './Footer.css';
import logo from "../../assets/images/logo-footer.svg"

function Footer() {
  return (
    <footer className="footer">
        <img src={logo} alt="Logo Kasa" className="img" /> 
        <p className="kasaRight">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
