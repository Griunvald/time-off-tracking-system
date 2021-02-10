import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAMKdiqRNHnVxCHT4gBa3Ca-JfhccOLRRk',
  authDomain: 'time-off-tracking-system.firebaseapp.com',
  projectId: 'time-off-tracking-system',
  storageBucket: 'time-off-tracking-system.appspot.com',
  messagingSenderId: '433328230891',
  appId: '1:433328230891:web:c6f4da4b57f8db8ee989ae',
  measurementId: 'G-YP6YYX7Y00',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
