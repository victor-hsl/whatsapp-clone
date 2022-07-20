import { initializeApp}from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './FirebaseConfig';
import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const provider = new FacebookAuthProvider();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default {
    fbPopup: async () => {
        let result = await signInWithPopup(auth, provider)
                            .then((result) => console.log(result.user.uid))
                            .catch((error) => console.log(error.message));
        return result;
    }
}