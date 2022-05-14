import { initializeApp } from 'firebase/app';

export const initializeFirebaseApp = () =>
  initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'deeper-react-2022-05.firebaseapp.com',
    projectId: 'deeper-react-2022-05',
    storageBucket: 'deeper-react-2022-05.appspot.com',
    messagingSenderId: '60863066581',
    appId: '1:60863066581:web:cf050277b8d7ccc82c0d5c',
  });
