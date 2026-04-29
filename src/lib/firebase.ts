import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json'; // Assume in root, wait checking path

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    // Create user profile if not exists
    const userRef = doc(db, 'users', res.user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: res.user.email,
        displayName: res.user.displayName,
        createdAt: Date.now()
      });
    }
  } catch (error) {
    console.error("Login failed", error);
  }
};

export const logout = () => signOut(auth);
