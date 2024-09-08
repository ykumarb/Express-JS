import express from 'express';

const app = express();

// Two callback functions
app.get(
    "/double-cb", 
    (req, res, next) => {
        console.log("First callback function");
        next();
    }, 
    (req, res) => {
        console.log("Second callback function");
        res.send("<h1>Double callback function</h1>");
    }
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  