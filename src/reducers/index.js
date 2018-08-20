import { combineReducers } from 'redux';
import CountriesReducer from './reducer-coutries'
import MortalityReducer from './reducer-mortality'

const rootReducer = combineReducers({
  countries: CountriesReducer,
  mortality: MortalityReducer
});

export default rootReducer;
