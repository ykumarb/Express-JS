import express from "express";

const app = express();

// Refactor code
app
    .route("/student")
    .get((req, res) => {
        console.log("Get method");
        res.send("All Students");
    })
    .post((req, res) => {
        console.log("Post method");
        res.send("Create Student"); 
    })
    .put((req, res) => {
        console.log("Put method");
        res.send("Update Student");
    })
    .delete((req, res) => {
        console.log("Delete method");
        res.send("Delete Student");
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });