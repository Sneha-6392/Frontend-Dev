// Inputs
let sType = "morning";  
let watcherage = 22;              
let isstudent = true;      
let tickets = 4;            

let pricePerTicket = 0;
if (sType === "morning") {
  pricePerTicket = 120;
} else if (showType === "evening") {
  pricePerTicket = 180;
}


let baseP = tickets * pricePerTicket;

let discount = 0;
if (isstudent) {
  discount = 0.10 * baseP;      
} else if (age > 60) {
  discount = 0.20 * baseP;      
}

let discountedTotal = baseP - discount;


let serviceFee = 0;
if (tickets > 3) {
  serviceFee = 50;
}

let finalAmount = discountedTotal + serviceFee;


console.log(` Base Price: ₹${baseP}`);
console.log(` Discounted Total: ₹${discountedTotal}`);
console.log(` Final Amount (after service fee): ₹${finalAmount}`);
