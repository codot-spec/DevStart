

const headerDiv = document.getElementById('header');
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic';
headerDiv.appendChild(subHeading);

const secondDiv = document.querySelector('div:nth-of-type(2)');
const para = document.createElement('p');
para.textContent = 'Total fruits: 4';
para.id = 'fruits-total';
secondDiv.insertBefore(para, secondDiv.firstChild);