const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];
for (let emp of employees) {
  try {
    if (!emp.name || emp.salary === undefined || emp.years === undefined) {
      throw new Error(
        `Missing property in employee record: ${JSON.stringify(emp)}`
      );
    }
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error(`Invalid numeric conversion in: ${emp.name}`);
    }
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    const output = `Name       : ${emp.name}
                    Salary     : ₹${salary}
                    Experience : ${years} years
                    Bonus      : ₹${bonus.toFixed(2)}`;
    console.log(output);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
