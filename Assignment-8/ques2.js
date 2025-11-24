const menu = {
    samosa: 250,
    idli: 120,
    dosa: 180,
    chowmein: 80,
    coke: 40
};
function calculateBill(orderItems) {
    try {

        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Invalid item ordered: ${item}`);
            }
            return menu[item];
        });
        const total = prices.reduce((sum, price) => sum + price, 0);

        console.log(`Order Items: ${orderItems.join(", ")}`);
        console.log(`Total Bill: ₹${total}`);
    } 
    catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

calculateBill(["samosa", "idli", "coke"]);
calculateBill(["chowmein", "dosa", "coke"]);
