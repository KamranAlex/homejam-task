import React from 'react';
import Review1 from '../../images/rev1.png';
import Review2 from '../../images/rev2.png';
import Review3 from '../../images/rev3.png';
import US from '../../images/🇺🇸.png';
import IT from '../../images/🇮🇹.png';

const ReviewCard = () => {
  return (
    <div class='card-deck'>
      <div class='card review-card'>
        <div class='card-body review-card-body'>
          <div className='client-info d-flex'>
            <img className='img-fluid' src={Review1} alt='' />
            <div className='client-text'>
              <h6>Hellen Jummy</h6>
              <div className='d-flex client-location'>
                <img src={US} alt='' />
                <p className='mb-0 ml-2 mt-1'>Palo Alto, CA</p>
              </div>
            </div>
          </div>
          <div className='feedback-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              donec in nisi vitae. Vestibulum pellentesque eget laoreet
              adipiscing.{' '}
            </p>
          </div>
        </div>
      </div>
      <div class='card review-card'>
        <div class='card-body review-card-body'>
          <div className='client-info d-flex'>
            <img className='img-fluid' src={Review2} alt='' />
            <div className='client-text'>
              <h6>Isaac Oluwatemilorun</h6>
              <div className='d-flex client-location'>
                <img src={IT} alt='' />
                <p className='mb-0 ml-2 mt-1'>Palo Alto, CA</p>
              </div>
            </div>
          </div>
          <div className='feedback-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              donec in nisi vitae. Vestibulum pellentesque eget laoreet
              adipiscing.{' '}
            </p>
          </div>
        </div>
      </div>
      <div class='card review-card'>
        <div class='card-body review-card-body'>
          <div className='client-info d-flex'>
            <img className='img-fluid' src={Review3} alt='' />
            <div className='client-text'>
              <h6>Hellen Jummy</h6>
              <div className='d-flex client-location'>
                <img src={US} alt='' />
                <p className='mb-0 ml-2 mt-1'>Palo Alto, CA</p>
              </div>
            </div>
          </div>
          <div className='feedback-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              donec in nisi vitae. Vestibulum pellentesque eget laoreet
              adipiscing.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
