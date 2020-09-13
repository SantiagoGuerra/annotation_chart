import { combineReducers } from 'redux';

import optionsReducer from './options';


const reducer = combineReducers({
  options: optionsReducer,
})


export default reducer;