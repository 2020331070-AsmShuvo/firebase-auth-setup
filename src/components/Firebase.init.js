import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuf3pqAwo-vesFZ1ZHWzGzB0Upep8bwYA",
  authDomain: "fir-setup-auth.firebaseapp.com",
  projectId: "fir-setup-auth",
  storageBucket: "fir-setup-auth.appspot.com",
  messagingSenderId: "996875299282",
  appId: "1:996875299282:web:6fe5fa7344e897b063000b",
  measurementId: "G-7DYQF740SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 
