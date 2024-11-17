// Write your code below
const header = document.getElementById('header');
const mainHeading = document.getElementById('main-heading');
const basketHeading = document.getElementById('basket-heading');
const thanksDiv = document.getElementById('thanks');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

header.style.backgroundColor = 'green';
header.style.borderBottom = '2px solid orange';

basketHeading.style.color = 'green';


const para = document.createElement('p');
para.textContent = 'Please visit us again';
thanksDiv.appendChild(para);