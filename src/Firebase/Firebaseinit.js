
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC1hZpdNGJWm5B8VFSI9z8oaCgSv-_vYdw",
  authDomain: "assignment-11-d6f7f.firebaseapp.com",
  projectId: "assignment-11-d6f7f",
  storageBucket: "assignment-11-d6f7f.firebasestorage.app",
  messagingSenderId: "606579549670",
  appId: "1:606579549670:web:d5b594537094ba27262227"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);