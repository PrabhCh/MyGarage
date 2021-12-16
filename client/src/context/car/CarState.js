import React, { useReducer } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import CarContext from './carContext';
import carReducer from './carReducer';
import {
  GET_CARS,
  ADD_CAR,
  DELETE_CAR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CAR,
  FILTER_CARS,
  CLEAR_CARS,
  CLEAR_FILTER,
  CAR_ERROR
} from '../types';

const CarState = (props) => {
  const initialState = {
    cars: [
      {
        id: 1,
        year: 2021,
        make: 'Honda',
        model: 'Accord',
        odometer: '22,000KM',
        price: '$45,000',
        type: 'new'
      },
      {
        id: 2,
        year: 2019,
        make: 'Audi',
        model: 'S5',
        odometer: '45,000KM',
        price: '$55,000',
        type: 'used'
      },
      {
        id: 3,
        year: 2010,
        make: 'BMW',
        model: '335i',
        odometer: '180,000KM',
        price: '$22,000',
        type: 'used'
      }
    ]
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  // Add Car

  // Delete Car

  // Set Current Car

  // Clear Current Car

  // Update Car

  // Filter Cars

  // CLear Filter

  return (
    <CarContext.Provider
      value={{
        cars: state.cars
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};

export default CarState;
