import Firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCZSmdHaSTUxwHF8YV_h2DX1WpWbcLfb5E",
    authDomain: "spot-4-world.firebaseapp.com",
    projectId: "spot-4-world",
    storageBucket: "spot-4-world.appspot.com",
    messagingSenderId: "471939643310",
    appId: "1:471939643310:web:3d60208281142fa4337a3f"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase }