import {
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { db } from "../firebaseconfig.js";

export default async function deleteDewFromFb(dataId) {
  const docRef = doc(db, "dews", dataId);
  await deleteDoc(docRef);
}
