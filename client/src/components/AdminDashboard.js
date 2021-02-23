import React from 'react';
import firebase from './../config/firebase';
import { firebaseLooper } from '../utils/firebaseLooper';

const db = firebase.firestore();

const AdminDashboard = () => {
  const emailList = [];
  const requstsList = [];
  const usersRef = db.collection('users');

  usersRef.get().then((snapshot) => {
    const emails = firebaseLooper(snapshot);
    emails.forEach((el) => {
      emailList.push(el.email);
      const requestsRef = db
        .collection('users_requests')
        .doc(el.email)
        .collection(el.email);

      requestsRef.get().then((snapshot) => {
        const requests = firebaseLooper(snapshot);
        if (requests.length > 0) {
          requstsList.push(...requests);
        }
      });
    });
    console.log(requstsList);
  });

  return <div>Admin's Dashboard</div>;
};

export default AdminDashboard;
