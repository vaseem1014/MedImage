import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import Auth for login/signup
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAdZkyK4FIbUfM7XXTKKY7ZQ95BoaWmxtM",
  authDomain: "medimage-39e56.firebaseapp.com",
  projectId: "medimage-39e56",
  storageBucket: "medimage-39e56.appspot.com", // ✅ Fix this (firebasestorage.app → appspot.com)
  messagingSenderId: "639871323362",
  appId: "1:639871323362:web:a46516687545a4f4f0a2bb",
  measurementId: "G-WLLQJF6QK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Export auth instance for login/signup
const analytics = getAnalytics(app);

export { auth, app, analytics }; // ✅ Export `auth` so other files can use it
