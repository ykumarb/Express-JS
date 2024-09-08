import express from "express";
import path from "path";

const app = express();

// Middleware to serve static web files
app.use(express.static('./public'));

app.get("/", (req, res) => {
    // Use sendFile method
    res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000!");
});