let productName = "  wireless headphones PRO ";
// trim
productName = productName.trim();
// lower case
productName = productName.toLowerCase();
// capitalize the first letter of each word
productName = productName.split(" ") 
productName = productName.map(word => word.charAt(0).toUpperCase() + word.slice(1))
productName = productName.join(" "); 
// replace "Pro" with "Pro Edition"
productName = productName.replace("Pro", "Pro Edition");
console.log("Cleaned Product Title:", productName);
console.log("Title Length:", productName.length);