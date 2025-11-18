class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price =price;
        this.category = category;
    }
    discount(percent) {
        const discountAmount = (this.price *percent) / 100;
        this.price = this.price - discountAmount;
    }
    getDetails() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}
const products = [
    new Product(1, "Mars Lipstick", 5000, "Cosmetics"),
    new Product(2, "Maggie", 1000, "Food"),
    new Product(3, "Levi's Jeans", 2500, "Clothing"),
    new Product(4, "Samsung Galaxy S21", 70000, "Electronics"),
    new Product(5, "Woodland Shoes", 3000, "Footwear"),
]
products.forEach(product => product.discount(10));
const filteredProducts = products.filter(p => p.price > 1000);
console.log("Products with price > 1000:");
filteredProducts.forEach(p => console.log(p.getDetails())); 