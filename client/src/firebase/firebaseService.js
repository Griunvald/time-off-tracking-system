import firebase from '../config/firebase';
import { setUserProfile } from './firestoreService';

export const logInWithEmail = (creds) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
};

export const logOutFirebase = () => {
  return firebase.auth().signOut();
};

export const signInFirebase = async (creds) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);
    await response.user.updateProfile({
      displayName: creds.displayName,
    });
    return await setUserProfile(response.user);
  } catch (error) {
    throw error;
  }
};

export const socialLogin = async (selectProvider) => {
  let provider;
  if (selectProvider === 'facebook') {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  if (selectProvider === 'google') {
    provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
  }
  try {
    const response = await firebase.auth().signInWithPopup(provider);
    if (response.additionalUserInfo.isNewUser) {
      await setUserProfile(response.user);
    }
  } catch (error) {
    console.log(error.message);
  }
};
