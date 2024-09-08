import express from "express";

const app = express();

app.get("/student", (req, res) => {
    console.log("Get method");
    res.send("All Students");
});

app.post("/student", (req, res) => {
    console.log("Post method");
    res.send("Create Student");
});

app.put("/student", (req, res) => {
    console.log("Put method");
    res.send("Update Student");
});

app.delete("/student", (req, res) => {
    console.log("Delete method");
    res.send("Delete Student");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});