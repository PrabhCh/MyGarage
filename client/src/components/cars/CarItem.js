import React from 'react';

const CarItem = ({ car }) => {
  const { id, year, make, model, odometer, price, type } = car;

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
    </div>
  );
};

export default CarItem;
