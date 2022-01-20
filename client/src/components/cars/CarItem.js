import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CarContext from '../../context/car/carContext';

const CarItem = ({ car }) => {
  const carContext = useContext(CarContext);
  const { deleteCar, setCurrent, clearCurrent } = carContext;

  const { id, year, make, model, odometer, price, type } = car;

  const onDelete = () => {
    deleteCar(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {year} {make} {model}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (type === 'new' ? 'badge-success' : 'badge-blue')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {odometer && (
          <li>
            <i className='fas fa-envelope-open'></i> {odometer}
          </li>
        )}
        {price && (
          <li>
            <i className='fas fa-phone'></i> {price}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={() => setCurrent(car)}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarItem;
