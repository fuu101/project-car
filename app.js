// define all buttons
// const redOption = document.getElementsByClassName('red');
// const blackOption = document.getElementsByClassName('black');
// const grayOption = document.getElementsByClassName('gray');
const blackOption = document.querySelector(".black");
const redOption = document.querySelector(".red");
const grayOption = document.querySelector(".gray");

const feedbackBtn = document.querySelector(".feedback");
const CardBtn = document.getElementById('button');
const productImg = document.getElementsByClassName("product-image")[0];
const productType = document.getElementsByTagName('h3')[0];

// add event listeners to blackOption
blackOption.addEventListener('click', function() {
  productImg.style.backgroundImage = 'url("./img/black-car.jpg")';
  productType.style.backgroundColor = 'Black';
  CardBtn.style.backgroundColor = 'Black';

});

// add event listeners to redOption
redOption.addEventListener('click', function() {
  productImg.style.backgroundImage = 'url("./img/red-car.png")';
  productType.style.backgroundColor = 'red';
  CardBtn.style.backgroundColor = 'red';

});

// add event listeners to grayOption
grayOption.addEventListener('click', function() {
  productImg.style.backgroundImage = 'url("./img/gray-car.jpg")';
  productType.style.backgroundColor = 'gray';
  CardBtn.style.backgroundColor = 'gray';

});

CardBtn.addEventListener('click', function() {
    CardBtn.style.display = 'none';
    feedbackBtn.style.display = 'block';
  });

feedbackBtn.addEventListener('click', function() {
    feedbackBtn.style.display = 'none';
    CardBtn.style.display = 'block';
  });


