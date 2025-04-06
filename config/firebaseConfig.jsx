// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence} from "firebase/auth"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// FIREBASE API KEYS
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db=getFirestore(app);
const analytics = getAnalytics(app);console.log('Firebase App Initialized:', app);
console.log('Firebase Authentication Initialized:', auth);
console.log('Firebase Firestore Initialized:', db);
console.log('Firebase Analytics Initialized:', analytics);