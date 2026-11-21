// DOM string map: tự động parse
const product = document.querySelector('.product');
console.log(product.dataset.productId);     // "1024" (string)
console.log(product.dataset.category);    // "laptop"
console.log(product.dataset.price);        // "15.990.000"

// Gán giá trị động
product.dataset.inStock = "true";
// → data-in-stock="true"

// Xóa thuộc tính
delete product.dataset.price;
