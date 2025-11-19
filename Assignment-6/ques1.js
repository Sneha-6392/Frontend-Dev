function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water");
        setTimeout(() => {
            if (Math.random() < 0.2) {
                return reject("Failed to boil water");
            }
            resolve("Water boiled");
        }, 1000);
    });
}
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee");
        setTimeout(() => {
            if (Math.random() < 0.2) {
                return reject("Failed to brew coffee");
            }
            resolve("Coffee brewed");
        }, 1500);
    });
}
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into cup");
        setTimeout(() => {
            if (Math.random() < 0.2) {
                return reject("Failed to pour coffee");
            }
            resolve("Coffee poured into cup");
        }, 500);
    });
}
boilWater() 
    .then((message) => {
        console.log(message);
        return brewCoffee();
    })
    .then((message) => {
        console.log(message);
        return pourCoffee();
    })
    .then((message) => {
        console.log(message);
        console.log("Coffee is ready");
    })
    .catch((error) => {
        console.error(error);
    });