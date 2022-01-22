import React from 'react';
import Cars from '../cars/Cars';
import CarForm from '../cars/CarForm';
import CarFilter from '../cars/CarFilter';

const Sell = () => {
  return (
    <div className='grid-2'>
      <div>
        <CarForm />
      </div>
      <div>
        <CarFilter />
        <Cars />
      </div>
    </div>
  );
};

export default Sell;
