import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup 
} from "firebase/auth";

// Sign up with Email & Password
export const signUp = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Sign up error:", error);
    throw error; // Re-throw to handle in component
  }
};

// Sign in with Email & Password
export const signIn = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Sign in error:", error);
    throw error; // Re-throw to handle in component
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    // Fix for Cross-Origin-Opener-Policy issue
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.error("Google login failed:", error);
    throw error; // Re-throw to handle in component
  }
};

// Logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
    throw error; // Re-throw to handle in component
  }
};