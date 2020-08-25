import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: `${process.env.PROJECT_ID_FIREBASE}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID_FIREBASE}.firebaseio.com`,
  projectId: process.env.PROJECT_ID_FIREBASE,
  storageBucket: `${process.env.PROJECT_ID_FIREBASE}.appspot.com`,
  messagingSenderId: process.env.MESSAGING_SENDER_ID_FIREBASE,
  appId: process.env.APP_ID_FIREBASE,
  measurementId: process.env.MEASUREMENT_ID_FIREBASE,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


let firestore = firebase.firestore();

export default firestore