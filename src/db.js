import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3_7xQPROc4a_vAWjJi5xcC-ZxleGbXSg",
    authDomain: "arusip.firebaseapp.com",
    databaseURL: "https://arusip.firebaseio.com",
    projectId: "arusip",
    storageBucket: "arusip.appspot.com",
    messagingSenderId: "685406909672",
    appId: "1:685406909672:web:7d89d46eb04b183c08055d",
    measurementId: "G-CX55S53LFD"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();