import express from "express";

const app = express();

// Query String - Part of url follows ? and key value pairs
app.get('/products', (req, res) => {
    const {category, id} = req.query;
    res.send(`The product category: ${category} and product id: ${id}`)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});