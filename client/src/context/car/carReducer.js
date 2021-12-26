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

const carReducer = (state, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        cars: [action.payload, ...state.cars],
        loading: false
      };
    default:
      return state;
  }
};

export default carReducer;
