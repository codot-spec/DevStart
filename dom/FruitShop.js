// Add the Edit Button to each fruit:
const fruits = document.querySelectorAll('.fruit');

fruits.forEach(fruit => {
  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Edit';
  
  fruit.appendChild(editButton);
});

// Implement form submission and deletion:
const form = document.querySelector('form');
const fruitsList = document.querySelector('.fruits');
let editingFruit = null; // Variable to store the fruit being edited

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fruitToAdd = document.getElementById('fruit-to-add').value;
  
  // If we are editing, update the fruit
  if (editingFruit) {
    editingFruit.firstChild.textContent = fruitToAdd; // Update the fruit name
    editingFruit = null; // Reset the editing state
  } else {
    const newLi = document.createElement('li');
    newLi.classList.add('fruit'); 
    
    // Create a new 'Edit' button for the added fruit
    const newEditButton = document.createElement('button');
    newEditButton.classList.add('edit-btn');
    newEditButton.textContent = 'Edit';
    
    // Create a new 'Delete' button for the added fruit
    const newDeleteButton = document.createElement('button');
    newDeleteButton.classList.add('delete-btn');
    newDeleteButton.textContent = 'x';
    
    // Append the new fruit text, edit button, and delete button to the new list item
    newLi.textContent = fruitToAdd;
    newLi.appendChild(newEditButton);
    newLi.appendChild(newDeleteButton);
    
    fruitsList.appendChild(newLi);
  }
  
  document.getElementById('fruit-to-add').value = ''; // Clear the input field
});

fruitsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruitsList.removeChild(fruitToDelete);
  }
  else if (event.target.classList.contains('edit-btn')) {
    const fruitToEdit = event.target.parentElement;
    
    // Populate the input with the current fruit name
    document.getElementById('fruit-to-add').value = fruitToEdit.firstChild.textContent;
    
    // Set the editingFruit to the current fruit item
    editingFruit = fruitToEdit;
  }
});
