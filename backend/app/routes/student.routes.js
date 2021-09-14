const { students } = require("../models/index.js");

module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/", students.createStudent);
  
    // Retrieve all Students
    router.get("/", students.findAllStudents);
  
    // Retrieve a single Student with id
    router.get("/:id", students.findOneStudent);
  
    // Update a Student with id
    router.put("/:id", students.updateStudent);
  
    // Delete a Student with id
    router.delete("/:id", students.deleteStudent);
  
    // Delete all Students 
    router.delete("/", students.deleteAllStudents);
  
    app.use('/api/students', router);
  };