import dogReducer from './dog';
import catReducer from './cat';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  dog: dogReducer,
  cat: catReducer
});

export default reducer;
