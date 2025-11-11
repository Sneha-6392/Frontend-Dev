let orderAmount = 450;
let ispremium = false;
let isremote = true;
let estimatetym = 4;
let deliveryfee = 0;
let deliverydays = 0;
if (orderAmount < 500) {
  deliveryfee += 50;
}
if (ispremium) {
  deliveryfee = 0;
}
if (isremote) {
  deliverydays += 2;
}
let total = orderAmount + deliveryfee;
let totaltym = estimatetym + deliverydays;
console.log(`Total cost = Rs ${total}`);
console.log(`Estimated delivery time: ${totaltym} days`);
