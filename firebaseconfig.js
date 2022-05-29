import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiydtot56YvYPFcHHPUjWnStkpuObavs0",
  authDomain: "dew-it-app.firebaseapp.com",
  databaseURL: "https://dew-it-app-default-rtdb.firebaseio.com",
  projectId: "dew-it-app",
  storageBucket: "dew-it-app.appspot.com",
  messagingSenderId: "523712062062",
  appId: "1:523712062062:web:7869678afc18406981fc7f",
  measurementId: "G-3YZM7MVTSJ",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
