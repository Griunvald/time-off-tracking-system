import firebase from '../config/firebase';

const db = firebase.firestore();

export const setUserProfile = (user) => {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      role: 'user',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
