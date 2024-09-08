import express from "express";
const app = express();

// Other way for cb functions
const cb4 = (req, res, next) => {
    console.log("First callback function");
    next();
}

const cb5 = (req, res, next) => {
    console.log("Second callback function");
    next();
}

app.get("/crazyness", [cb4, cb5], (req, res, next) => {
   console.log("Third callback function");
   next();
}, (req, res) => {
    console.log("Fourth callback function");
    res.send("<h1>Crazyness</h1>");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});