import express from "express";
import products from "./products.js";

const app = express();

app.get('/products', (req, res) => {
    res.json(products)
})
app.listen(3000, (req, res) => {
    console.log("Server listening on port 3000");
});