import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7ixrzuZLaXAo6zgkbk5vhsC_v_E1HaQ0",
    authDomain: "linkedin-clone-9caa2.firebaseapp.com",
    projectId: "linkedin-clone-9caa2",
    storageBucket: "linkedin-clone-9caa2.appspot.com",
    messagingSenderId: "948616708899",
    appId: "1:948616708899:web:59a412332daf12837c4296"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;