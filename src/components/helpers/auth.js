import { firebaseAuth } from '../config/constants';

export function auth(email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

