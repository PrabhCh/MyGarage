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
    case UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        ),
        loading: false
      };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};

export default carReducer;
