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

export const addCollectionAndDouments = (collectionKey, items) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  items.forEach(element => {
    const elementRef = collectionRef.doc();
    batch.set(elementRef, element);
  });

  batch.commit();

}

export const convertCollectionSnapshotToMap = (collectionSnpashots) => {
  const collections = collectionSnpashots.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title: title,
      items: items,
      routName: encodeURI(title.toLowerCase()),
      id: doc.id
    }
  }
  );

  return collections.reduce((accumulate, collection) => {
    accumulate[collection.title.toLowerCase()] = collection;
    return accumulate;
  }, {})
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnap = await userRef.get();

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({ displayName, email, createAt, ...additionalData })
    } catch (error) {
      console.log('error creating user ', error.message);
    }

  }

  return userRef;
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;