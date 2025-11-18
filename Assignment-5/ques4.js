function car(brand, model) {
    this.brand = brand;
    this.model = model;
}
car.prototype.getDetails = function() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
};
const car1 = new car("Toyota", "Corolla");
const car2 = new car("Honda", "Civic");
car1.getDetails();
car2.getDetails();