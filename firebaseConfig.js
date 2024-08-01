import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByISn_75TO7oLQBmAdKmTlHO6zVynU3Ag",
  authDomain: "my-waitlist-app.firebaseapp.com",
  projectId: "my-waitlist-app",
  storageBucket: "my-waitlist-app.appspot.com",
  messagingSenderId: "40115842871",
  appId: "1:40115842871:web:f33536094fa23d25a634b2",
  measurementId: "G-FRKJ9S6XNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export default auth;