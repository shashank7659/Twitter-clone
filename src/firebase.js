import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBwSmfYcCIh-t6v9-ipf8bWZCjKRHlNDxw",
    authDomain: "twitter-clone.firebaseapp.com",
    databaseURL: "https://twitter-clone.firebaseio.com",
    projectId: "twitter-clone-shashank",
    storageBucket: "twitter-clone.appspot.com",
    messagingSenderId: "939816190841",
    appId: "1:939816190841:web:aab80d345587de2176a5a8",
    measurementId: "G-Q44RNNWX9D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;


