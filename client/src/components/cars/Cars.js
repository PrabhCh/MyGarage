import React, { Fragment, useContext } from 'react';
import CarItem from './CarItem';
import CarContext from '../../context/car/carContext';

const Cars = () => {
  const carContext = useContext(CarContext);

  const { cars } = carContext;

  return (
    <Fragment>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </Fragment>
  );
};

export default Cars;
