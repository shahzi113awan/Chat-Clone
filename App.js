import React, {useEffect} from 'react';
import App from './navigation';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {MenuProvider} from 'react-native-popup-menu';
import store from './src/Store';
import {Provider} from 'react-redux';

var firebaseConfig = {
  apiKey: 'AIzaSyAOzshP1Fw3o6sjg4pYf0rxba_9TSuwGTw',
  authDomain: 'chat-1ac64.firebaseapp.com',
  databaseURL: 'https://chat-1ac64-default-rtdb.firebaseio.com',
  projectId: 'chat-1ac64',
  storageBucket: 'chat-1ac64.appspot.com',
  messagingSenderId: '309789867707',
  appId: '1:309789867707:web:08129d094076669df7f39e',
  measurementId: 'G-Y9TWZK73ME',
};

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
firebase.firestore();
}
export {firebase, Auth};
const setup = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  );
};
export default setup;
