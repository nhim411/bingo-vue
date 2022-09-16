import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARiZYLSLYjBYoIhDCzGUrSTzemvCfkCJ4",
  authDomain: "bingo-vue-bff7b.firebaseapp.com",
  projectId: "bingo-vue-bff7b",
  storageBucket: "bingo-vue-bff7b.appspot.com",
  messagingSenderId: "126106536433",
  appId: "1:126106536433:web:24acf4ae813495e2af9c50",
  measurementId: "G-8D25ZXX8DY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//type the auth and firestore functions
const auth = getAuth(app);
const firestore = getFirestore(app);
const performance = getPerformance(app);
const storage = getStorage(app);

export { analytics, auth, firestore, performance, storage };
