// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKdnW9eANsQtlp5K8ynM8G2an96Awedug",
  authDomain: "project-uem-b5c74.firebaseapp.com",
  projectId: "project-uem-b5c74",
  storageBucket: "project-uem-b5c74.firebasestorage.app",
  messagingSenderId: "580764574642",
  appId: "1:580764574642:web:6d33d9350d3a5534143aab",
  measurementId: "G-1M3RH0V9B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db=getFirestore(app);
const analytics = getAnalytics(app);