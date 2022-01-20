import React, { useContext, useState, useEffect } from 'react';
import CarContext from '../../context/car/carContext';

const CarForm = () => {
  const carContext = useContext(CarContext);

  const { addCar, updateCar, current, clearCurrent } = carContext;

  useEffect(() => {
    if (current !== null) {
      setCar(current);
    } else {
      setCar({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [carContext, current]);

  const [car, setCar] = useState({
    year: '',
    make: '',
    model: '',
    odometer: '',
    price: '',
    type: 'used'
  });

  const { year, make, model, odometer, price, type } = car;

  const onChange = (e) => setCar({ ...car, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addCar(car);
    } else {
      updateCar(car);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Edit Car' : 'Add Car'}</h2>
      <input
        type='text'
        placeholder='Year'
        name='year'
        value={year}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Make'
        name='make'
        value={make}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Model'
        name='model'
        value={model}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Odometer Reading'
        name='odometer'
        value={odometer}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Price'
        name='price'
        value={price}
        onChange={onChange}
      />
      <h5>Car Type</h5>
      <input
        type='radio'
        name='type'
        value='used'
        checked={type === 'used'}
        onChange={onChange}
      />{' '}
      Used{' '}
      <input
        type='radio'
        name='type'
        value='new'
        checked={type === 'new'}
        onChange={onChange}
      />{' '}
      New
      <div>
        <input
          type='submit'
          value={current ? 'Update Car' : 'Add Car'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default CarForm;
