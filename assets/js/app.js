//===========Elements==========//
//-------memory section----------//
const btn8memory = document.getElementById("memory-8-btn");
const btn16memory = document.getElementById("memory-16-btn");
//-------storage section----------//
const btn256storage = document.getElementById("btn256storage");
const btn512storage = document.getElementById("btn512storage");
const btn1TBstorage = document.getElementById("btn1TBstorage");

//=======product prices========//
const priceOf16GBmemory = 180;

function displayPrice(id, price) {
  const inputField = document.getElementById(id);
  if (!price) {
    price = 0;
  }
  inputField.innerText = price;
}

//===========Handler==========//
//-------memory section----------//
btn16memory.addEventListener("click", function () {
  displayPrice("extra-memory-cost", priceOf16GBmemory);
});

btn8memory.addEventListener("click", function () {
  displayPrice("extra-memory-cost");
});

btn8memory.addEventListener("click", function () {
  displayPrice("extra-memory-cost");
});

