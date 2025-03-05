import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAPSYA1LLrK4mAnxOOtsOX2sqAnMpVFDA",
  authDomain: "miniblog-tibia.firebaseapp.com",
  projectId: "miniblog-tibia",
  storageBucket: "miniblog-tibia.firebasestorage.app",
  messagingSenderId: "203106220527",
  appId: "1:203106220527:web:3081b7ee8daba81c929e1a",
};

const app = initializeApp(firebaseConfig);

// chamando o banco de dados
const db = getFirestore(app);

export { db };
