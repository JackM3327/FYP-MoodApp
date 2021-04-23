import firebase from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyD3oaWp4K4bcfaNwqw0djpQRa1L_MDBjEM",
    authDomain: "fyp-moodapp.firebaseapp.com",
    projectId: "fyp-moodapp",
    storageBucket: "fyp-moodapp.appspot.com",
    messagingSenderId: "681983210406",
    appId: "1:681983210406:web:fc8c3a5cb28cbb70255567",
    measurementId: "G-4EH03272C6"
  };
  
 
  require('firebase/analytics')

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics()
export default firebase;