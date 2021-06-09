import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <Navbar></Navbar>
      <div className='topBanner'>
        <div className='banner-overlay'></div>
        <div className='container'>
          <div className='row content-sec'>
            <div className='col-md-10'>
              <div className='heroContent'>
                <h1 className='title'>cari cari</h1>
                <p className='subContent'>
                  Live from their sofa to yours. Get closer to your favorite{' '}
                  <br></br>
                  artists, and never miss out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
