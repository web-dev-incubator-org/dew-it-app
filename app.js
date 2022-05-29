///////////SKELETON STRUCTURE/////////////
//The entire app will run from this file///
//Your job is to write the code to fill this App//
//Your code should be written in a separate .js file and then imported into this one to keep things neat//
//Keep in mind you have to import the firebase functions you need into your file to use them. You must install firebase with npm to use these functions. If you don't know how to do this, ask.
//If you have questions about anything, ask

//these are some of the basic necessities you may need to interact with firebase
// import {
//   collection,
//   setDoc,
//   deleteDoc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// import {db} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

/////////code starts here///////////////
//import the functions that I wrote in separate files
import submitDew from "./functions/submitDew.js";
import getDews from "./functions/getDews.js";
import createDisplay from "./functions/createDom.js";
const newDewsButton = document.querySelector(".new-dews-button");
const mainDewsContainer = document.querySelector(".main-dews-container");
const dewsTitleContainer = document.querySelector(".dew-title-container");
const dewsModalContainer = document.querySelector(".dews-modal-container");
const closeNewDews = document.getElementsByClassName("close")[0];
const submitDewButton = document.querySelector(".submit-dew-button");
const dewTitle = document.querySelector(".dew-title");
const dewDescription = document.querySelector(".dew-description");
const dewNotes = document.querySelector(".dew-notes");

//created an iife that runs every time the app loads. Put things that need to run on the initial load in here
const initApp = (() => {
  getDewsAndRender();
})();

//remove async because this is promise syntax
function getDewsAndRender() {
  getDews().then((dews) => {
    renderDews(dews);
  });
}
//auto formatted with Prettier. I highly recommend getting this extension if using vscode.
function renderDews(dewsArray) {
  dewsArray.forEach((element) => {
    createDisplay(element);
  });
}
//renderDews(arraygoeshere) {
//takes an array as parameter and renders it to the screen
//create a div to hold each dew's content
//create a data-id to keep track of each dew
//create a checkbox for complete/incomplete status for each dew
//create an edit button for each dew
//create a delete button for each dew
// }

newDewsButton.addEventListener("click", () => {
  //show a modal with form inputs when clicked
  dewsModalContainer.classList.add("show");
});

closeNewDews.addEventListener("click", () => {
  dewsModalContainer.classList.remove("show");
});

//editDewModal.addEventListener("click", (e) => {
//show an edit dew modal when edit dew is clicked
//});

submitDewButton.addEventListener("click", (e) => {
  //send the input values from the form (including a unique Firebase ID!) to Firebase when form is submitted

  //this is necessary to prevent the form's default behavior so we can send data to Firebase
  e.preventDefault();
  //this function takes the parameters title, description, notes. We will get the values from the form and run the function with these arguments.
  submitDew(dewTitle.value, dewDescription.value, dewNotes.value);
  dewsModalContainer.classList.remove("show");
});

//editDewButton.addEventListener("click", (e) => {
//send the updated dew to Firebase when form is submitted
//getdewsFromFirebase()
//});

//deletedewButton.addEventListener("click", (e) => {
//delete the dew from from Firebase when clicked
//getdewsFromFirebase()
//});
