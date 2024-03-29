import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_h9FZDmvGVYEFwzfMVseVbCIbagxCUVc",
  authDomain: "webduffel.firebaseapp.com",
  projectId: "webduffel",
  storageBucket: "webduffel.appspot.com",
  messagingSenderId: "1091952627396",
  appId: "1:1091952627396:web:c7cf75898bca4b27110391",
  measurementId: "G-DV6HY00HW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);