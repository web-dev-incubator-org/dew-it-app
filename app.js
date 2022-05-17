///////////SKELETON STRUCTURE/////////////
//The entire app will run from this file///
//Your job is to write the code to fill this App//
//Your code should be written in a separate .js file and then imported into this one to keep things neat//
//Keep in mind you have to import the firebase functions you need into your file to use them. You must install firebase with npm to use these functions. If you don't know how to do this, ask.
//If you have questions about anything, ask

//these are some of the basic necessities you may need to interact with firebase
// import {
//   collection,
//   addDoc,
//   deleteDoc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// import {db} from './firebaseconfig'

/////////code starts here///////////////
const newTodoButton = document.querySelector('.new-todos-button');
const todosModalContainer = document.querySelector('.todos-modal-container');

//getTodosFromFirebase() {
 //get todos from Firebase
 //call renderTodos() using that data
// }

//renderTodos(arraygoeshere) {
  //takes an array as parameter and renders it to the screen
  //create a div to hold each todo's content
  //create a data-id to keep track of each todo
  //create a checkbox for complete/incomplete status for each todo
  //create an edit button for each todo
  //create a delete button for each todo
// }

newTodoButton.addEventListener("click", () => {
  //show a modal with form inputs when clicked
  todosModalContainer.classList.add('show')
});

//editTodoModal.addEventListener("click", (e) => {
  //show an edit todo modal when edit todo is clicked
//});

//submitTodo.addEventListener("click", (e) => {
  //send the input values from the form (including a unique Firebase ID!) to Firebase when form is submitted
//});

//editTodo.addEventListener("click", (e) => {
  //send the updated todo to Firebase when form is submitted
  //getTodosFromFirebase()
//});

//deleteTodo.addEventListener("click", (e) => {
  //delete the todo from from Firebase when clicked
  //getTodosFromFirebase()
//});

