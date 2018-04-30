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
 
 object = {[itemName] : item, [itemPrice] : randomPrice()};
 return "${item} has been added to the cart"
}

function viewCart() {
  let cartReport = "In your cart you have "
  if (cart.length === 0) {
    return 
  }
  for(let i = 0; i < cart.length; i++){
    if (i === 0) {
      cartReport = "${cartreport}${item} at ${cart[i][itemPrice]}"
    }
    else if(i === cart.length - 1){
      cartReport = "and ${item} at ${cart[i][itemPrice]}."
    }
    else {
      cartReport = ", ${item} at ${cart[i][itemPrice]}"
    }
  }
  return cartReport
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
