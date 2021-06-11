import React from 'react';
import ShowCard from './ShowCard';
import './ShowSection.css';
const ShowSection = () => {
  return (
    <div className='container show-section h-auto py-5'>
      <div className='d-flex justify-content-between'>
        <h2 className='sectionTitle'>Upcomming Shows</h2>
        <a href='/' className='viewAll ml-5 mb-2'>
          View All
        </a>
      </div>
      <ShowCard></ShowCard>
    </div>
  );
};

export default ShowSection;
