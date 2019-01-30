// app.js

var Product = require('./Object/Product')
var ShoppingCart = require('./Object/ShoppingCart')

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

let shoppingCart = new ShoppingCart()
let apple = new Product('1','Apple I Phone',700)



console.log(shoppingCart.addProduct(apple,2));
console.log(shoppingCart.products);
console.log(shoppingCart.getTotalPrice());
