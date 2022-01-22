import React, { useContext, useRef, useEffect } from 'react';
import CarContext from '../../context/car/carContext';

const CarFilter = () => {
  const carContext = useContext(CarContext);
  const text = useRef('');

  const { filterCars, clearFilter, filtered } = carContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterCars(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Cars...'
        onChange={onChange}
      />
    </form>
  );
};

export default CarFilter;
