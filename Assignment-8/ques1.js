class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    calculateAverage() {
        const total = this.marks.reduce((sum, val) => sum + val, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return 'A';
        if (avg >= 75) return 'B';
        if (avg >= 50) return 'C';
        return 'F';
    }
    printResult() {
        console.log(`\nStudent: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.getGrade()}`);
    }
}
const s1 = new Student("Sneha", [90, 88, 92, 85]);
const s2 = new Student("Astha", [70, 65, 60, 75]);
const s3 = new Student("Vanshika", [40, 35, 50, 45]);

s1.printResult();
s2.printResult();
s3.printResult();
