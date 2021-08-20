//===========Elements==========//
//-------Base Price Section----------//
const basePriceEl = document.getElementById("base-price");

//-------Memory section----------//
const btn8memory = document.getElementById("memory-8-btn");
const btn16memory = document.getElementById("memory-16-btn");
const extraMemoryCost = document.getElementById("extra-memory-cost");

//-------Storage section----------//
const btn256storage = document.getElementById("storage-256-btn");
const btn512storage = document.getElementById("storage-512-btn");
const btn1TBstorage = document.getElementById("storage-1TB-btn");
const extraStorageCost = document.getElementById("extra-storage-cost");

//-------Delivery section----------//
const btnFree = document.getElementById("free-delivery-btn");
const btnCharged = document.getElementById("charged-btn");
const deliveryCost = document.getElementById("delivery-costs");

//-------Total section----------//
const totalPriceEl = document.getElementById("total-price");
const totalDiscountEl = document.getElementById("total-after-discount");

//-------Promo section----------//
const btnPromo = document.getElementById("promo-btn");
const promoInput = document.getElementById("promo-input");

//=======Items' prices========//
const basePrice = 1299;
const priceOf16GBmemory = 180;
const priceOf512GbSSD = 100;
const priceOf1TbbSSD = 180;
const deliveryCharge = 20;
const discount = 0.2;

//=======Setting base price and primary total========//
basePriceEl.innerText = totalPriceEl.innerText = totalDiscountEl.innerText = basePrice;

//=======Functions========//
let totalCost = basePrice;
function calcDisplayBalance() {
  const costOfMemory = parseFloat(extraMemoryCost.innerText);
  const costOfStorage = parseFloat(extraStorageCost.innerText);
  const costOfDelivery = parseFloat(deliveryCost.innerText);

  totalCost = basePrice + costOfMemory + costOfStorage + costOfDelivery;

  totalPriceEl.innerText = totalCost;
}

function displayPrice(id, price) {
  const inputField = document.getElementById(id);
  if (!price) {
    price = 0;
  }
  inputField.innerText = price;
  calcDisplayBalance();
}

function calcDisplayPriceAfterDiscount() {
  const priceAfterDiscount = totalCost - totalCost * discount;

  if (promoInput.value === "stevekaku") {
    totalDiscountEl.innerText = priceAfterDiscount;
  }
}

//===========Handler==========//
//-------Memory section----------//
btn16memory.addEventListener("click", function () {
  displayPrice("extra-memory-cost", priceOf16GBmemory);
});

btn8memory.addEventListener("click", function () {
  displayPrice("extra-memory-cost");
});

btn8memory.addEventListener("click", function () {
  displayPrice("extra-memory-cost");
});

//-------Storage section----------//
btn256storage.addEventListener("click", function () {
  displayPrice("extra-storage-cost");
});

btn512storage.addEventListener("click", function () {
  displayPrice("extra-storage-cost", priceOf512GbSSD);
});

btn1TBstorage.addEventListener("click", function () {
  displayPrice("extra-storage-cost", priceOf1TbbSSD);
});

//-------Delivery section----------//
btnFree.addEventListener("click", function () {
  displayPrice("delivery-costs");
});

btnCharged.addEventListener("click", function () {
  displayPrice("delivery-costs", deliveryCharge);
});

//-------Promo section----------//
btnPromo.addEventListener("click", function () {
  calcDisplayPriceAfterDiscount();
});
