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
import deleteDewFromFb from "./functions/deleteDewFromFb.js";
import createDisplay from "./functions/createDom.js";
const newDewsButton = document.querySelector(".new-dews-button");
const mainDewsContainer = document.querySelector(".main-dews-container");
const dewsModalContainer = document.querySelector(".dews-modal-container");
const closeNewDews = document.getElementsByClassName("close")[0];
const submitDewButton = document.querySelector(".submit-dew-button");
const dewTitle = document.querySelector(".dew-title");
const dewDescription = document.querySelector(".dew-description");
const dewNotes = document.querySelector(".dew-notes");
const dewForm = document.querySelector(".dew-form");

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
//auto formatted with Prettier. I highly recommend getting this extension if using vscode
function renderDews(dewsArray) {
  //this while loop is necessary because we need to clear the dews from the page on every render. Without this, every time we call this render function, we will just add more dom elements on top of what's already there.
  while (mainDewsContainer.firstChild) {
    mainDewsContainer.removeChild(mainDewsContainer.firstChild);
  }
  dewsArray.forEach((element) => {
    //extract dom creation to separate file and import it in
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
  dewForm.reset();
});

//editDewModal.addEventListener("click", (event) => {
//show an edit dew modal when edit dew is clicked
//});

submitDewButton.addEventListener("click", (event) => {
  //send the input values from the form (including a unique Firebase ID!) to Firebase when form is submitted

  //this is necessary to prevent the form's default behavior so we can send data to Firebase
  event.preventDefault();
  //this function takes the parameters title, description, notes. We will get the values from the form and run the function with these arguments.
  submitDew(dewTitle.value, dewDescription.value, dewNotes.value);
  dewsModalContainer.classList.remove("show");
  getDewsAndRender();
  dewForm.reset();
});

//editDewButton.addEventListener("click", (event) => {
//send the updated dew to Firebase when form is submitted
//getDewsAndRender();
//});

//place an event listener on the entire container and use an if statement to target delete buttons. Can add other features that require event listeners in here as well.
mainDewsContainer.addEventListener("click", (event) => {
  event.preventDefault();
  //store clicked DOM dew in const
  const dewParent = event.target.closest(".dew-display");
  //store clicked DOM data-id in const
  const dataId = dewParent.dataset.id;

  const deleteDew = (() => {
    if (event.target.className === "delete-dew-button") {
      // delete the dew from Firebase when clicked using dom data-id
      deleteDewFromFb(dataId);
      // delete the dew from DOM
      dewParent.remove();
      //render updated state
      getDewsAndRender();
    }
  })();
});
