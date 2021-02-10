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
