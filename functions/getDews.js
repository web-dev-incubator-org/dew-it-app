//Import the functions you need. Read the firebase docs or ask if you're not sure which ones you need.
//You will generally always need collection
import {
  collection,
  getDocs,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
//import the database instance
import { db } from "../firebaseconfig.js";

//we are exporting an async function to app.js. The default part is optional but I see it often and it seems to be common practice. It allows you to name the import anything you want AND forces you to omit the {} when importing. This must be async because we must wait for firebase to send us the data before running the rest of the function.
export default async function getDews() {
  //this is just a reference to the collection stored as a const
  const dewsRef = collection(db, "dews");
  //this is the query function that gets the dews and orders them by Timestamp, oldest to newest
  const querySnapshot = await getDocs(query(dewsRef, orderBy("createdAt")));

  // add retrieved dews to an array and return it
  const dews = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    dews.push(doc.data());
  });

  return dews;
}
