class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

   
    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is required to calculate fare.");
        }
        if (this.distance < 0) {
            throw new Error("Distance cannot be negative.");
        }

        const ratePerKm = 12; 
        return this.distance * ratePerKm;
    }
}


const driver = new Driver("Amit", 4.8, "Maruti Swift");
const user = new User("Rahul", 4.5);
try {
    const trip1 = new Trip("Delhi", "Gurgaon", 18);
    const fare = trip1.calculateFare();
    console.log(`Driver: ${driver.name} (${driver.vehicle})`);
    console.log(`Passenger: ${user.name}`);
    console.log(`Trip: ${trip1.fromLocation} → ${trip1.toLocation}`);
    console.log(`Distance: ${trip1.distance} km`);
    console.log(`Fare: ₹${fare}`);
} 
catch (error) {
    console.log("Error:", error.message);
}
try {
    const trip2 = new Trip("Mumbai", "Thane", -5);
    console.log("Fare:", trip2.calculateFare());
} 
catch (error) {
    console.log("Error:", error.message);
}
