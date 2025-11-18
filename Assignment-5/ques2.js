function applyOperation(numbers, operation) {
    return numbers.map(operation);
}
function double(x) {
    return x * 2;
}
function square(x) {
    return x * x;
}
const nums = [1, 2, 3, 4, 5];
const doubledNumbers = applyOperation(nums, double);
const squaredNumbers = applyOperation(nums, square);
console.log("Doubled Numbers: ", doubledNumbers);
console.log("Squared Numbers: ", squaredNumbers);
