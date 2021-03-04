import {
  SIGN_IN_USER,
  SIGN_OUT_USER,
  UPDATE_USER_LOCALLY,
} from '../actions/types';

const initialState = {
  authenticated: false,
  currentUser: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL,
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    case UPDATE_USER_LOCALLY:
      return {
        ...state,
        currentUser: {
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
