import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//TODO
/**Þarf að gera eh svona því caching á user virkar ekki í símum en þetta er erfitt þannig það má bíða. 
 * 
 * User þarf að logga sig aftur inn ef app refreshar í síma
 * 
 * 
 @firebase/auth: Auth (11.6.0): 
You are initializing Firebase Auth for React Native without providing
AsyncStorage. Auth state will default to memory persistence and will not
persist between sessions. In order to persist auth state, install the package
"@react-native-async-storage/async-storage" and provide it to
initializeAuth:

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 [Component Stack]
 */

const firebaseConfig = {
    apiKey: "AIzaSyAIru-pokh5Q657cAyk0mbxcbm2xGn2Lo0",
    authDomain: "flashcardsjapanese-c3938.firebaseapp.com",
    projectId: "flashcardsjapanese-c3938",
    storageBucket: "flashcardsjapanese-c3938.firebasestorage.app",
    messagingSenderId: "593000097946",
    appId: "1:593000097946:web:99997dae92a18c44d7d723",
    measurementId: "G-KBQCC8JJJM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };