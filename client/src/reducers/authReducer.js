const SIGN_IN_USER = 'SIGN_IN_USER';
const SIGN_OUT_USER = 'SIGN_OUT_USER';

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
    default:
      return state;
  }
};

export default authReducer;
