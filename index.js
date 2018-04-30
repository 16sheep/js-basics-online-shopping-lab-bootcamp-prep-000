var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 function randomPrice () {
   return Math.floor(Math.random() * Math.floor(100));
 }
 
 let object = {itemName : item, itemPrice : randomPrice()};
 cart.push(object)
 return "${item} has been added to the cart"
}

function viewCart() {
  let cartReport = "In your cart you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for(let i = 0; i < cart.length; i++){
    if (i === 0) {
      cartReport = "${cartreport}${item} at ${cart[i]['itemPrice']}"
    }
    else if(i === cart.length - 1){
      cartReport = "and ${item} at ${cart[i]['itemPrice']}."
    }
    else {
      cartReport = ", ${item} at ${cart[i]['itemPrice']}"
    }
  }
  return cartReport
}

function total() {
  let sum = 0
  for(let i = 0; i < cart.length; i++){
    sum = sum + cart[i]['itemPrice']
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      delete cart[i][itemName];
      return cart[i];
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === false){
    return "Sorry, we don't have a credit card on file for you."
  }
  sum = total();
  cart.length = 0
  return "Your total cost is ${sum}, which will be charged to the card ${cardNumber}."
}
