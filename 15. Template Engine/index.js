import express from "express";
import {join} from "path";
import route from "./routes/route.js";

const app = express();

// Using EJS template engine
app.set("view engine", "ejs");

app.use(express.static(join(process.cwd())));

app.use('/', route);

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000!");
});