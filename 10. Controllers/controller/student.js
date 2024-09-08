import express from "express";

const allStudents = (req, res) => {
    res.send('All Students!');
}

const newStudent = (req, res) => {
    res.send('Insert a new student ID!');
}

const updateStudent = (req, res) => {
    res.send('Update a student ID!');
}

const removeStudent = (req, res) => {
    res.send('Remove a student ID!');
}

export { allStudents, newStudent, updateStudent, removeStudent };