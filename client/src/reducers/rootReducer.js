import { combineReducers } from 'redux';
import testReducer from './testReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import calendarReducer from './calendarReducer';
import userRequestsReducer from './userRequestsReducer';
import adminDashboardReducer from './adminDashboardReducer';

const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
  auth: authReducer,
  calendar: calendarReducer,
  userRequests: userRequestsReducer,
  admin: adminDashboardReducer,
});

export default rootReducer;
