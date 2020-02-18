// import addCar from '../reducers';
// import addEngine from '../reducers';
// import addDetail from '../reducers';
// import addSound from '../reducers';
// import addSpoiler from '../reducers';
import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import carReducer from './carReducer';
import storeReducer from './storeReducer';

export default combineReducers({ priceReducer, carReducer, storeReducer })