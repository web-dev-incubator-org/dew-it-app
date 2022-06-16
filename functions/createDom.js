export default function createDisplay(element) {
  const mainDewsContainer = document.querySelector('.main-dews-container');
  const dewDisplay = document.createElement('div');
  dewDisplay.setAttribute('data-id', element.id);
  dewDisplay.classList.add('dew-display');
  mainDewsContainer.appendChild(dewDisplay);

  //created separate iifes. mini functions to make things more modular. Future dom features like checkboxes, priority, etc can be separated into mini functions like this
  const createTitle = (() => {
    const dewDataTitle = document.createElement('h1');
    dewDataTitle.textContent = element.title;
    dewDisplay.appendChild(dewDataTitle);
  })();

  const createDescription = (() => {
    const dewDataDescription = document.createElement('p');
    dewDataDescription.textContent = element.description;
    dewDisplay.appendChild(dewDataDescription);
  })();

  const createNotes = (() => {
    const dewDataNotes = document.createElement('p');
    dewDataNotes.textContent = element.notes;
    dewDisplay.appendChild(dewDataNotes);
  })();

  const createEditButton = (() => {
    const dewEditButton = document.createElement('button');
    dewEditButton.setAttribute('class', 'edit-dew-button dew-buttons');
    dewEditButton.textContent = 'Edit';
    dewDisplay.appendChild(dewEditButton);
  })();


  const createDeleteButton = (() => {
    const dewDeleteButton = document.createElement('button');
    dewDeleteButton.setAttribute('class', 'delete-dew-button dew-buttons');
    dewDeleteButton.textContent = 'Delete';
    dewDisplay.appendChild(dewDeleteButton);
  })();
}
  
