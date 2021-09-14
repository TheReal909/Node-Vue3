const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

exports.createStudent = (req, res) => {
  // request validation
  if (!req.body.firstName) {
    res.statut(400).send({
      message: "Firstname cannot be empty :(",
    });
    return;
  }
  // add a student in db
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    biography: req.body.biography,
    dateOfBirth: req.body.dateOfBirth,
  };
  Student.create(student)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.statut(500).send({
        message: err.message || "Oups , error on adding student :(",
      });
    });
};

exports.findAllStudents = (req, resp) => {
  const lastName = req.query.lastName;
  var condition = lastName
    ? { lastName: { [Op.iLike]: `%${lastName}%` } }
    : null;

  Student.findAll({ where: condition })
    .then(data => {
      resp.send(data);
    })
    .catch(err => {
      resp.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students.",
      });
    });
};

exports.findOneStudent = (req, resp) => {
  const id = req.params.id;

  Student.findByPk(id)
    .then(data => {
      resp.send(data);
    })
    .catch(err => {
      resp.status(500).send({
        message: "Error retrieving Student with id=" + id,
      });
    });
};

exports.updateStudent = (req, resp) => {
  const id = req.params.id;

  Student.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        resp.send({
          message: "Student infos updated successfully.",
        });
      } else {
        resp.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      resp.status(500).send({
        message: "Error updating Student with id=" + id,
      });
    });
};

exports.deleteStudent = (req, resp) => {
  const id = req.params.id;

  Student.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        resp.send({
          message: "Student was removed successfully!",
        });
      } else {
        resp.send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`,
        });
      }
    })
    .catch(err => {
        resp.status(500).send({
        message: "Could not delete Student with id=" + id,
      });
    });
};

exports.deleteAllStudents = (req, resp) => {
    Student.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
            resp.send({ message: `${nums} Student were deleted successfully!` });
        })
        .catch(err => {
            resp.status(500).send({
            message:
              err.message || "Some error occurred while removing all students."
          });
        });
};
