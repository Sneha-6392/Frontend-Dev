/* 
Original function:
function fetchBugs(callback) {
setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}
*/
function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("fetching bugs");
        setTimeout(() => {
            apiFailed = Math.random() < 0.3;
            if (apiFailed) {
                console.log("API failed");
            }
            resolve (["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}
getBugs()
    .then((bugs) => {
        console.log("Bug list received:");
        console.table(bugs); 
    })
    .catch((error) => {
        console.error(error);
    });
