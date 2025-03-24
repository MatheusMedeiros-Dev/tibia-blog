import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAPSYA1LLrK4mAnxOOtsOX2sqAnMpVFDA",
  authDomain: "miniblog-tibia.firebaseapp.com",
  projectId: "miniblog-tibia",
  storageBucket: "miniblog-tibia.firebasestorage.app",
  messagingSenderId: "203106220527",
  appId: "1:203106220527:web:3081b7ee8daba81c929e1a",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços do Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
