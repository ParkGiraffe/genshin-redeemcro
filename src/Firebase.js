// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1G1aNNfSbvZL8jXaEmrjCtDcHdQImRD8",
  authDomain: "genshin-redeem-macro.firebaseapp.com",
  projectId: "genshin-redeem-macro",
  storageBucket: "genshin-redeem-macro.appspot.com",
  messagingSenderId: "630369746705",
  appId: "1:630369746705:web:9671ed0dc7e16e03b056b0",
  measurementId: "G-KCEHQHS958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);