'use strict';

// Global variables & Constants

const voteTallyUlElem = document.getElementById('voteTally');
const allProductsSectionTag = document.getElementById('allProducts');
const leftProdDivTag = document.getElementById('leftProduct');
const middleProdDivTag = document.getElementById('midProduct');
const rightProdDivTag = document.getElementById('rightProduct');
const leftProdH2Elem = document.getElementById('leftProdH2');
const midProdH2Elem = document.getElementById('midProdH2');
const rightProdH2Elem = document.getElementById('rightProdH2');

let voteCounter = 0;

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
}

// make a global function that takes 3 products and calls their render method







console.log(voteTallyUlElem);
console.log(allProductsSectionTag);
console.log(leftProdDivTag);
console.log(middleProdDivTag);
console.log(rightProdDivTag);
console.log(leftProdH2Elem);
console.log(midProdH2Elem);
console.log(rightProdH2Elem);
console.log(voteCounter);
Product(n, i)