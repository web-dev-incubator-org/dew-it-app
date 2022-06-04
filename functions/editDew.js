import {
  doc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

import { db } from '../firebaseconfig.js';

export default async function editDew(dataId, title, description, notes) {
  const docRef = doc(db, 'dews', dataId);
  await updateDoc(docRef, {
    title,
    description,
    notes,
  });
}
