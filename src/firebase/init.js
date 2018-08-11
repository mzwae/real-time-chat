import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBNM2nEpQFe-22xhQbcEDzgbeXDxP1jC7M",
   authDomain: "ninja-chat-aedf6.firebaseapp.com",
   databaseURL: "https://ninja-chat-aedf6.firebaseio.com",
   projectId: "ninja-chat-aedf6",
   storageBucket: "ninja-chat-aedf6.appspot.com",
   messagingSenderId: "289646659435"
 };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots: true})
 
 export default firebaseApp.firestore()
