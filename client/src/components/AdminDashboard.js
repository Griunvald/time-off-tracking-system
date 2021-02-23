import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import firebase from './../config/firebase';
import { firebaseLooper } from '../utils/firebaseLooper';

const db = firebase.firestore();

const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
            dispatch({ type: 'GET_ALL_USERS_REQUESTS', payload: requstsList });
          }
        });
      });
      console.log(requstsList);
    });
  }, [dispatch]);

  return <div>Admin's Dashboard</div>;
};

export default AdminDashboard;
