// pop up
const menu = document.getElementById("menu");
const popUp = document.getElementById("pop-up");
const close = document.getElementById("close");
menu.onclick = function () {
  popUp.style.display = "inline-block";
};
close.onclick = function () {
  popUp.style.display = "none";
};
// pop up

// product counter

var counter = 0;
document.getElementById("span").innerHTML = counter;

document.getElementById("plus").onclick = function plus() {
  counter = counter + 1;
  document.getElementById("span").innerHTML = counter;
};

document.getElementById("minus").onclick = function plus() {
  if (counter > 0) {
    counter = counter - 1;
    document.getElementById("span").innerHTML = counter;
  }
};
// product counter

// cart show up

const cart = document.getElementById("cart");
const popUpCart = document.getElementById("popUpCart");
const html = document.querySelector("main");
cart.onclick = function () {
  popUpCart.style.display = "grid";
};
html.onclick = function () {
  popUpCart.style.display = "none";
};

const add = document.getElementById("add");
const p = document.getElementById("p");
const price = document.getElementById('price')
add.onclick = function () {
  if (counter > 0) {
    // document.getElementById("empty").style.display = "none";
    p.innerHTML = `$125.00 × ${counter}`;
    price.innerHTML = `$${(counter * 125.00).toFixed(2)}` ;
  } else {
    console.log("you are empty");
  }
};
// cart show up
