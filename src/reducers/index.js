import reducer as dogReducer from './dog';
import reducer as catReducer from './cat';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  dog: dogReducer,
  cat: catReducer
})

export default reducer