import express from "express";

const app = express();

// Route parameters
app.get('/ecom/products/iphone/:id', (req, res) => {
    res.send('The id you specified is ' + req.params.id);
});

app.get('/ecom/products/iphone/:id/:name', (req, res) => {
    res.send('The id you specified is ' + req.params.id + ' and the name is ' + req.params.name);
});

app.get('/ecom/products/iphone/:id/:name/:price', (req, res) => {
    res.send('The id you specified is ' + req.params.id + ' and the name is ' + req.params.name + ' and the price is ' + req.params.price);
});

//Destrcuturing
app.get('/ecom/products/iphones/:model', (req, res) => {
    const { model } = req.params;
    res.send(`Iphone ${model} is available`);
});

//Destrcuturing
app.get('/ecom/products/iphones/:model/:color', (req, res) => {
    const { model, color } = req.params;
    res.send(`Iphone ${model} in ${color} color is available`);
});


<<<<<<< HEAD
=======
>>>>>>> 68bddd756e0abe52f87f242186ffc16c5f293891
app.param('id', (req, res, next, id) => {
    console.log('This is a dynamic route parameter');
    next();
});

app.get('/ecom/products/iphone/:id', (req, res) => {
    res.send('The id you specified is ' + req.params.id);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
