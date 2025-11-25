function processProducts(products) {
  // 1. Use map() to extract product names (if needed)
  const productNames = products.map(function (item) {
    return item.name;
  });

  console.log("Product Names:", productNames);

  // 2. Use forEach() to log messages based on price
  products.forEach(function (product) {
    if (product.price > 50) {
      console.log(product.name + " is above $50");
    } else {
      console.log(product.name + " is below $50");
    }
  });
}

// Example Input
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(products);
