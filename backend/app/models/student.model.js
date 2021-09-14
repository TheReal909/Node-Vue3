const { sequelize } = require(".");
module.exports = (sequelize, Sequelize) =>{
    const Student = sequelize.define("student", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        biography: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.DATE,
        }
    })
    return Student;
}