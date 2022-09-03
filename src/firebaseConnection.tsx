import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC81wHhr57aFEeQ6ia5BCUSeDB30XTeWQ0",
    authDomain: "codeleap-d55b7.firebaseapp.com",
    projectId: "codeleap-d55b7",
    storageBucket: "codeleap-d55b7.appspot.com",
    messagingSenderId: "1035211835046",
    appId: "1:1035211835046:web:6a317edb01517d3d575667",
    measurementId: "G-J1KHP62XSM"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
