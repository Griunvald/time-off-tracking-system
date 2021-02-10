import firebase from '../config/firebase';
const SIGN_IN_USER = 'SIGN_IN_USER';
const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const signInUser = (user) => {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
  };
};

export const verifyAuth = () => {
  return (dispatch) => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
      } else {
        dispatch(signOutUser());
      }
    });
  };
};
