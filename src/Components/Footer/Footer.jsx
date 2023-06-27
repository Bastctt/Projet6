import React from 'react';
import './Footer.scss';
import logo from "../../assets/images/logo-footer.svg"

function Footer() {
  return (
    <footer>
        <img src={logo} alt="Logo Kasa"/> 
        <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
