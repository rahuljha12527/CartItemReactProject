import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIGSR26X0B4Dy5wW4AaGb4E16x_37a5J4",
  authDomain: "cart-73177.firebaseapp.com",
  databaseURL: "https://cart-73177.firebaseio.com",
  projectId: "cart-73177",
  storageBucket: "cart-73177.appspot.com",
  messagingSenderId: "638409779402",
  appId: "1:638409779402:web:267d978456c34559eb6c33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




