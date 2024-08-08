import { Auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

export async function signupFn(email, password) {
    return createUserWithEmailAndPassword(Auth, email, password);
}

export async function loginFn(email, password) {
    signInWithEmailAndPassword(Auth, email, password);
}
