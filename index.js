const exp = require('express');
const app = exp();
require('dotenv').config();
const PORT = process.env.PORT;
const products = require('./routes/products.js');

app.get("/", (req, res)=>{
    res.send('<h1>Start page</h1>')
});
app.get("/products", products);

app.listen(PORT, ()=>{
    console.log("Server has been started on port: " + PORT);
});