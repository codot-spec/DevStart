// Write your code below:
// Get all the list elements
const fruits = document.getElementsByClassName('fruit');

// Change the background color of the 3rd element
fruits[2].style.backgroundColor = 'yellow';

// Make all elements bold
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = 'bold';
}