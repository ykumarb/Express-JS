import express from "express";
import userCredentials from "./middleware/logs.js"

const app = express();

app.use(userCredentials);

app.get("/", (req, res) => {
    res.send("<h1>Hello from Admin</h1>");
});


app.get("/about", (req, res) => {
    res.send("<h1>This is about section</h1>");
});


app.get("/contact", (req, res) => {
    res.send("<h1>This is contact section</h1>");
});


app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000!");
});