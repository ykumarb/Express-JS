// create a folder
// npm init -y
// npm i express
// create instance express
// provide port :3000
// basic route /


import express from 'express';

// Create an express app instance that allows to create server.
const app = express();

// HTTP methods

// GET 👉 retrieve data
// POST 👉 insert/create data
// PATCH 👉 partially update data
// DELETE 👉 delete data
// PUT 👉 update data
// ALL 👉 Any HTTP request method


// Basic routing (get is the http method)
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express.js!</h1>');
});

// Route in case of /about
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

// Route in case of /contact
app.get('/contact', (req, res) => {
    res.send('<h1>About contact</h1>');
})

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });