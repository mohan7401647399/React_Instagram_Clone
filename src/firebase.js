import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9noKS-XvLmcd-itRoxkWN2ThDBh-RB4E",
  authDomain: "instagram-clone-fc9fd.firebaseapp.com",
  projectId: "instagram-clone-fc9fd",
  storageBucket: "instagram-clone-fc9fd.appspot.com",
  messagingSenderId: "685322843788",
  appId: "1:685322843788:web:473f98fc503903877feda9"
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
