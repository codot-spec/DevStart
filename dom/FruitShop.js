// Write the code as shown in the video below:

// Write answer to the questions asked below:
const mainHeading =document.querySelector('#main-heading');
mainHeading.style.textAlign='right';

const basketHeading= document.querySelector('#basket-heading');
basketHeading.style.color ='brown';

const fruits= document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius ='5px';
fruits.style.listStyleType ='none';

const basketsHeading = document.querySelector('h2');
basketsHeading.style.marginLeft ='30px';

const fruitItem=document.querySelectorAll('.fruit');
for (let i=0; i<fruitItem.length;i++){
  fruitItem[i].style.padding='10px';
fruitItem[i].style.borderRadius ='5px';
fruitItem[i].style.margin='10px';
  fruitItem[i].style.backgroundColor='lightgrey';
}

const evenfruitItem=document.querySelectorAll('.fruit:nth-child(even)');
for (let i=0; i<evenfruitItem.length;i++){
  evenfruitItem[i].style.backgroundColor='brown';
  evenfruitItem[i].style.color='white';
}