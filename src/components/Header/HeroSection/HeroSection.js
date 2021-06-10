import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeroSection.css';
import './circle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Calender from '../../../images/calender.png';

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

          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-3 circle'>
                <div className='circle1'>
                  <div className='text-center'>
                    <div className='content1'>
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: '#FFF', fontSize: '22px' }}
                      />
                      <p>0</p>
                      <span>Label</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 circle'>
                <div className='circle2'>
                  <div className='text-center'>
                    <div className='content2'>
                      <img src={Calender} alt='' />
                      <p>0</p>
                      <span>Label</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 circle'>
                <div className='circle3'>
                  <div className='text-center'>
                    <div className='content3'>
                      <img src={Calender} alt='' />
                      <p>0</p>
                      <span>Label</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 circle'>
                <div className='circle4'>
                  <div className='text-center'>
                    <div className='content4'>
                      <img src={Calender} alt='' />
                      <p>0</p>
                      <span>Label</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
