import express from "express";
import student from "./routes/student.js";
const app = express();

//Controllers

app.use('./student', student);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});