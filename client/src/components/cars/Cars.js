import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CarItem from './CarItem';
import CarContext from '../../context/car/carContext';

const Cars = () => {
  const carContext = useContext(CarContext);

  const { cars, filtered } = carContext;

  if (cars.length === 0) {
    return <h4>Please add a car</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((car) => (
              <CSSTransition key={car.id} timeout={500} classNames='item'>
                <CarItem car={car} />
              </CSSTransition>
            ))
          : cars.map((car) => (
              <CSSTransition key={car.id} timeout={500} classNames='item'>
                <CarItem car={car} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Cars;
