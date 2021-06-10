import React from 'react';
import ShowCard from './ShowCard';
import './ShowSection.css';
const ShowSection = () => {
  return (
    <div className='container show-section h-auto py-4'>
      <h2 className='sectionTitle'>Upcomming Shows</h2>
      <ShowCard></ShowCard>
    </div>
  );
};

export default ShowSection;
