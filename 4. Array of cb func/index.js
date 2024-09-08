import express from "express";

const app = express();

// Array of callback functions
const cb1 = (req, res, next) => {
    console.log("First callback function");
    next();
}

const cb2 = (req, res, next) => {
    console.log("Second callback function");
    next();
}

const cb3 = (req, res, next) => {
    console.log("Third callback function");
    res.send("<h1>Array of callback functions</h1>");
}

app.get("/array-cb", [cb1, cb2, cb3]);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});