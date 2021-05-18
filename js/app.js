'use strict';

// Global variables & Constants

const voteTallyUlElem = document.getElementById('voteTally');
const allProductsSectionTag = document.getElementById('allProducts');
const leftProdImgTag = document.getElementById('leftProd_img');
const midProdImgTag = document.getElementById('midProd_img');
const rightProdImgTag = document.getElementById('rightProd_img');
const leftProdH2Elem = document.getElementById('leftProd_h2');
const midProdH2Elem = document.getElementById('midProd_h2');
const rightProdH2Elem = document.getElementById('rightProd_h2');

let voteCounter = 0;

// current product
let currentLeftProd = null;
let currentMidProd = null;
let currentRightProd = null;

// Create product constructor function
function Product(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.timesShown = 0;
  this.votes = 0;

  // allows us to push the product into the array that holds all the products
  Product.allProducts.push(this);
}

// Create an array to hold all products
Product.allProducts = [];

// make a method that renders one product to the page
Product.prototype.renderProduct = function(h2, imgTag) {
  imgTag.src = this.imgPath;
  h2.textContent = this.name;
};

// make a global function that takes 3 products and calls their render method
function renderThreeProds(leftProd, midProd, rightProd) {
  leftProd.renderProduct(leftProdH2Elem, leftProdImgTag);
  midProd.renderProduct(midProdH2Elem, midProdImgTag);
  rightProd.renderProduct(rightProdH2Elem, rightProdImgTag);
}

// pick random products and make sure that all 3 products displayed are different products
function pickProducts() {
  const leftProdIndex = Math.floor(Math.random() * Product.allProducts.length);
  const midProdIndex = Math.floor(Math.random() * Product.allProducts.length);
  let rightProdIndex;
  while (rightProdIndex === undefined || rightProdIndex === midProdIndex || rightProdIndex === leftProdIndex) {
    rightProdIndex = Math.floor(Math.random() * Product.allProducts.length);
  }
}


// assign the current products based off the index numbers generated
currentLeftProd = Product.allProducts[leftProdIndex];
currentMidProd = Product.allProducts[midProdIndex];
currentRightProd = Product.allProducts[rightProdIndex];


function renderVoteTally() {
  voteTallyUlElem.innerHTML = '';
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Voting Results';
  voteTallyUlElem.appendChild(h2Elem);
  for (let product of Product.allProducts) {
    const liElem = document.createElement('li');
    liElem.textContent = `${Product.name} : ${Product.votes}`;
    voteTallyUlElem.appendChild(liElem);
  }
}

function handleClick(e) {
  console.log('I am listening');
  let thingTheyClickedOn = e.target;
  console.log(thingTheyClickedOn);
  if (voteCounter < 10) {
    if (thingTheyClickedOn === leftProdImgTag || thingTheyClickedOn === midProdImgTag || thingTheyClickedOn === rightProdImgTag) {
      // add 1 to the vote and increment the counter
      voteCounter++;
      // add to the image the clicked on
      if (thingTheyClickedOn === leftProdImgTag) {
        currentLeftProd.votes++;
      }
      else if (thingTheyClickedOn === midProdImgTag) {
        currentMidProd.votes++;
      }
      else {
        currentRightProd.votes++;
      }
      // render new
      pickProducts();
      renderThreeProds(currentLeftProd, currentMidProd, currentRightProd)
    }
  } else {
    allProductsSectionTag.removeEventListener('click', handleClick);
  }
}

// add a listener and a handler
allProductsSectionTag.addEventListener('click',handleClick);







new Product('R2-D2 Bag', '../img/bag.jpg.url');
new Product('Banana Slicer', '../img/banana.jpg.url');
new Product('Bathroom Tablet Stand', '../img/bathroom/jpg.url');
new Product('Boots', '../img/boots.jpg.url');
new Product('Breakfast Maker', '../img/breakfast.jpg.url');
new Product('Meatball Bubblegum', '../img/bubblegum.jpg.url');
new Product('Chair', '../img/chair.jpg.url');
new Product('Cthulhu', '../img/cthulhu.jpg.url');
new Product('Dog-Duck Muzzle', '../img/dog-duck.jpg.url');
new Product('Dragon Meat', '../img/dragon.jpg.url');
new Product('Utensil Pen', '../img/pen.jpg.url');
new Product('Pet Sweep', '../img/pet-sweep.jpg.url');
new Product('Pizza Scissors', '../img/scissors.jpg.url');
new Product('Shark Sleeping Bag', '../img/shark.jpg.url');
new Product('Baby Sweep', '../img/sweep.jpg.url');
new Product('Tauntaun Sleeping Bag', '../img/tauntaun.jpg.url');
new Product('Unicorn Meat', '../img/unicorn.jpg.url');
new Product('Water Can', '../img/water-can.jpg.url');
new Product('Wine Glass', '../img/wine-glass.jpg.url');
renderThreeProds(currentLeftProd, currentMidProd, currentRightProd);
