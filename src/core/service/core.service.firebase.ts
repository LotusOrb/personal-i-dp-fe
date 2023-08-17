import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDJjWd1e81SVZgi6ejlyJe36jWuqM8iDI",
  authDomain: "personal-i-dp.firebaseapp.com",
  projectId: "personal-i-dp",
  storageBucket: "personal-i-dp.appspot.com",
  messagingSenderId: "1086256912439",
  appId: "1:1086256912439:web:235a26242d79ef6d8cc7b2",
};

// Initialize Firebase

class CoreServiceFirebase {
  private firebaseApp: FirebaseApp;
  public auth: Auth;

  constructor() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(this.firebaseApp);
  }

  public async GoogleSignIn() {
    await setPersistence(this.auth, browserSessionPersistence);
    const data = await signInWithPopup(this.auth, new GoogleAuthProvider());
    return data;
  }

  public getInfo() {
    const data = this.auth.currentUser;
    return data;
  }

  public async logOut() {
    const data = await this.auth.signOut();
    return data;
  }
}

export const CoreServiceFirbaseInstance = new CoreServiceFirebase();
