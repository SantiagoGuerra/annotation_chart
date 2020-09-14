import { combineReducers } from 'redux';

import optionsReducer from './options';
import pointReducer from './point'

const reducer = combineReducers({
  options: optionsReducer,
  point: pointReducer
})


export default reducer;