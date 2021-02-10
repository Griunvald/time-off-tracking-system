import { combineReducers } from 'redux';
import testReducer from './testReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
