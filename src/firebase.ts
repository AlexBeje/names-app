import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANnS9poF2jx5acez3yfNeuIDnqqsvyIQo',
  authDomain: 'names-app-b1312.firebaseapp.com',
  projectId: 'names-app-b1312',
  storageBucket: 'names-app-b1312.appspot.com',
  messagingSenderId: '1070779111085',
  appId: '1:1070779111085:web:487baa046de4d807221824',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
