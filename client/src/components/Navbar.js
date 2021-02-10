import React from 'react';
import firebase from '../config/firebase';

const Navbar = () => {
  const socialLogin = async (selectProvider) => {
    let provider;

    if (selectProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
    }
    try {
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(({ user }) => {
          console.log(user.getIdToken());
        });
      console.log('f');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          socialLogin('google');
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Navbar;
