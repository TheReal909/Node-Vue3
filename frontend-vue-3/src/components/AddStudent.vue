<template>
  <div class="submit-form">

      <div class="form-group">
        <label for="firstname">Firstname</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          v-model="student.firstname"
          name="firstname"
        />
      </div>

      <div class="form-group">
        <label for="lastname">Lastname</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          required
          v-model="student.lastname"
          name="lastname"
        />
      </div>

      <div class="form-group">
        <label for="date">Date of birth</label>
        <input
          type="date"
          class="form-control"
          id="date"
          v-model="student.dateOfBirth"
          name="firstname"
        />
      </div>

      <div class="form-group">
        <label for="biography">Bio</label>
        <input
          class="form-control"
          id="biography"
          v-model="student.biography"
          name="biography"
        />
      </div>

      <button @click="saveStudent" class="btn btn-success">Add student</button>
    <!-- </div> -->

    <!-- <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="addNewStudent">Add</button>
    </div> -->
  </div>
</template>

<script>
import StudentServices from "../services/StudentServices";

export default {
  name: "add-student",
  data() {
    return {
      student: {
        id: null,
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        biogragry: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveStudent() {
      var data = {
        firstname: this.student.firstname,
        lastname: this.student.lastname,
        dateOfBirth: this.student.lastname,
        biogragry: this.student.biogragry,
      };

      StudentServices.create(data)
        .then((response) => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    addNewStudent() {
      this.student = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
