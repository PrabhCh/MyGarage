import React from 'react';
import Cars from '../cars/Cars';
import CarForm from '../cars/CarForm';

const Sell = () => {
  return (
    <div className='grid-2'>
      <div>
        <CarForm />
      </div>
      <div>
        <Cars />
      </div>
    </div>
  );
};

export default Sell;
