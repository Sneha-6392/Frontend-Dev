const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
let validNumbers = [];
let invalidNumbers = [];
for (let i of apiData) {
    const num = Number(i);
    const bool = Boolean(i);
    const str = String(i);
    console.log(`Number: ${num}`);
    console.log(`Boolean: ${bool}`);
    console.log(`String: "${str}"`);
    if (!isNaN(num) && i !== " " && i !== "" && i !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(i);
    }
}
console.log(`Valid Numbers: ${validNumbers}`);
console.log(`Invalid Numbers: ${invalidNumbers}`);


