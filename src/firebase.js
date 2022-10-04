// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0J4zo6R83SleBXblfrvUTx3sk6qAf-iY",
  authDomain: "authgallery-11dcb.firebaseapp.com",
  projectId: "authgallery-11dcb",
  storageBucket: "authgallery-11dcb.appspot.com",
  messagingSenderId: "399694492648",
  appId: "1:399694492648:web:81fa26b03f665b34206a5d",
  measurementId: "G-9R2C0PMJBY",
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
