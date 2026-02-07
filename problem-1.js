/*function signature/sample */
function newPrice(currentPrice, discount) {
  //   console.log(typeof currentPrice);
  //   console.log(typeof discount);

  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    const discountAmount = (currentPrice * discount) / 100;
    const afterDiscount = currentPrice - discountAmount;
    return afterDiscount.toFixed(3);
  }
}

const afterDiscount = newPrice(1500, 20);
console.log(afterDiscount);
