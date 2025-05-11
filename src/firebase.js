import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANft9YoesjA5s0YIID1bdY3ZEcRjfI7Wc",
  authDomain: "shopify-93367.firebaseapp.com",
  projectId: "shopify-93367",
  storageBucket: "shopify-93367.firebasestorage.app",
  messagingSenderId: "629658752283",
  appId: "1:629658752283:web:56bca799c5283a68702fbe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);