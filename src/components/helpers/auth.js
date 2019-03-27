import { firebaseAuth } from '../config/constants';

export function auth(email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password);
}

export function logout() {
  return firebaseAuth().signOut().then(() => {window.location.href = '/'});
}

export function login(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password).then(() => {window.location.href = '/keyboard'});
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

