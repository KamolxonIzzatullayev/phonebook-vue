import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQsEWViEDURgGbWcCCow8M60tSa7MlRLc",
  authDomain: "phonebook-3fab5.firebaseapp.com",
  projectId: "phonebook-3fab5",
  storageBucket: "phonebook-3fab5.appspot.com",
  messagingSenderId: "554610496192",
  appId: "1:554610496192:web:7450411b2e28e354221325"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const contactsColRef = collection(db, 'contacts');

export default contactsColRef;