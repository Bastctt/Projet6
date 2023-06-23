import React from 'react';
import './Banner.css';
import bannerAbout from '../../assets/images/banner-about.svg';
import bannerHome from '../../assets/images/banner-home.svg';

function Banner({ children }) {
  const bannerImage = window.location.pathname === "/about" ? bannerAbout : bannerHome;
  const classNameBanner = bannerImage === bannerHome ? 'banner bannerHome' : 'banner';

  return (
    <section aria-label="Bannière" className={classNameBanner}>
      <img className="img-banner" src={bannerImage} alt="Bannière - Paysage" title="Bannière - Paysage" />
      {children}
    </section>
  );
}

export default Banner;



  