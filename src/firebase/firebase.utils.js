import firebase from "firebase";


const config = {
    apiKey: "AIzaSyDXTeEoZ7nme-kc6HILlbmAmXKlFOk8j6Q",
    authDomain: "fiep-7d64f.firebaseapp.com",
    databaseURL: "https://fiep-7d64f.firebaseio.com",
    projectId: "fiep-7d64f",
    storageBucket: "fiep-7d64f.appspot.com",
    messagingSenderId: "322542958413",
    appId: "1:322542958413:web:cd896ba8cfb5880136a904",
    measurementId: "G-302E6P1L0G"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;