let x = 16.75;
let round = Math.round(x);
let root = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;
console.log(`
Number Operations Summary

Original number: ${x}
Rounded value: ${rounded}
Square root: ${sqrt.toFixed(2)}
Power (x³): ${power.toFixed(2)}
Random number (10–50): ${randomNum}
`);
