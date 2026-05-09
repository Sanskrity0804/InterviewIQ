
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-e1b1a.firebaseapp.com",
  projectId: "interview-agent-e1b1a",
  storageBucket: "interview-agent-e1b1a.firebasestorage.app",
  messagingSenderId: "396235299036",
  appId: "1:396235299036:web:f8f4f07eab080d58b3bc19"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}