import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  // Add Car
  const addCar = (car) => {
    car.id = uuidv4();
    dispatch({ type: ADD_CAR, payload: car });
  };

  // Delete Car
  const deleteCar = (id) => {
    dispatch({ type: DELETE_CAR, payload: id });
  };

  // Set Current Car
  const setCurrent = (car) => {
    dispatch({ type: SET_CURRENT, payload: car });
  };

  // Clear Current Car
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Car
  const updateCar = (car) => {
    dispatch({ type: UPDATE_CAR, payload: car });
  };

  // Filter Cars
  const filterCars = (text) => {
    dispatch({ type: FILTER_CARS, payload: text });
  };

  // CLear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <CarContext.Provider
      value={{
        cars: state.cars,
        current: state.current,
        filtered: state.filtered,
        addCar,
        deleteCar,
        setCurrent,
        clearCurrent,
        updateCar,
        filterCars,
        clearFilter
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};

export default CarState;
