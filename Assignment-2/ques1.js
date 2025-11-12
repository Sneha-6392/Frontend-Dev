let bonus = 5000;
function calculateSalary() {
  let isPermanent = true;
  if (isPermanent) {
    salary += bonus;
  }
  console.log("Inside function:");
  console.log("Is Permanent:", isPermanent);
  console.log("Total Salary:", salary);
}
calculateSalary();
console.log("\nOutside function:");
console.log("Global bonus still:", bonus);
let isPermanent = false;
console.log("Global isPermanent:", isPermanent);
calculateSalary();
