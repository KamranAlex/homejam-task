import React from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='container review-section h-auto pt-4 pb-5'>
      <div className='d-flex justify-content-between'>
        <h2 className='sectionTitle'>Reviews</h2>
        <div className='reviewNav'>
          <span className='pr-3'>1/12</span>
          <a href='/'>&#8592; &#8594;</a>
        </div>
      </div>
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default Reviews;
