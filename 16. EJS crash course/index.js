import express from "express";
import {join} from "path";  
import route from "./routes/route.js";

const app = express();

// Set view engine
app.set("view engine", "ejs");

app.use('/', route);

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000!");
});