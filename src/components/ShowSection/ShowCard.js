import React from 'react';
import Benny from '../../images/Benny.jpg';
import Andrea from '../../images/Andrea.jpg';
import Vijay from '../../images/Vijay.jpg';
import Shilpa from '../../images/Shilpa.jpg';
import './ShowSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

const ShowCard = () => {
  return (
    <div className='card-deck mt-3 mb-4'>
      <div className='card'>
        <img className='card-img-top' src={Benny} alt='Card image cap' />
        <div className='card-body'>
          <a href='/'>Folk</a>
          <h5 className='card-title mt-3'>Benny Dayal</h5>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <div className='info'>
            <a href='/'>More Info &#8594;</a>
          </div>
          <div className='coupon'>
            <FontAwesomeIcon
              icon={faReceipt}
              style={{
                background:
                  'linear-gradient(to top, rgb(132 0 151), rgb(71 0 209))',
                color: '#e300c4',
                fontSize: '20px'
              }}
            />
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img-top' src={Vijay} alt='Card image cap' />
        <div className='card-body'>
          <a href='/'>Bollywood</a>
          <h5 className='card-title mt-3'>Vijay Yesudas</h5>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <div className='info'>
            <a href='/'>More Info &#8594;</a>
          </div>
          <div className='coupon'>
            <FontAwesomeIcon
              icon={faReceipt}
              style={{
                background:
                  'linear-gradient(to top, rgb(132 0 151), rgb(71 0 209))',
                color: '#e300c4',
                fontSize: '20px'
              }}
            />
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img-top' src={Andrea} alt='Card image cap' />
        <div className='card-body'>
          <a href='/'>Folk</a>
          <h5 className='card-title mt-3'>Andrea Jeremiah</h5>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <div className='info'>
            <a href='/'>More Info &#8594;</a>
          </div>
          <div className='coupon'>
            <FontAwesomeIcon
              icon={faReceipt}
              style={{
                background:
                  'linear-gradient(to top, rgb(132 0 151), rgb(71 0 209))',
                color: '#e300c4',
                fontSize: '20px'
              }}
            />
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img-top' src={Shilpa} alt='Card image cap' />
        <div className='card-body'>
          <a href='/'>Folk</a>
          <h5 className='card-title mt-3'>Shilpa Rao</h5>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <div className='info'>
            <a href='/'>More Info &#8594;</a>
          </div>
          <div className='coupon'>
            <FontAwesomeIcon
              icon={faReceipt}
              style={{
                background:
                  'linear-gradient(to top, rgb(132 0 151), rgb(71 0 209))',
                color: '#e300c4',
                fontSize: '20px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
