<template>

  <div v-if="selectedStudent" class="edit-form">
    <h4>Student card</h4>
    <form>
      <div class="form-group">
        <label for="firstName">Title</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="selectedStudent.firstname"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Description</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="selectedStudent.lastname"
        />
      </div>

      <div class="form-group">
        <label for="date">Date of birth</label>
        <input
          type="date"
          class="form-control"
          id="date"
          v-model="selectedStudent.dateOfBirth"
        />
      </div>

      <div class="form-group">
        <label for="biography">Bio</label>
        <input
          class="form-control"
          id="biography"
          v-model="selectedStudent.biography"
        />
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="selectedStudent.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">
      Delete student
    </button>

    <button type="submit" class="badge badge-success" @click="updateTutorial">
      Update infos
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please select a student</p>
  </div>
</template>

<script>

import StudentServices from "../services/StudentServices";

export default {
  name: "student",
  data() {
    return {
      selectedStudent: null,
      message: ''
    };
  },
  methods: {
    getStudent(id) {
      StudentServices.get(id)
        .then(response => {
          this.selectedStudent = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateStudentInfo() {
      StudentServices.update(this.selectedStudent.id, this.selectedStudent)
        .then(response => {
          console.log(response.data);
          this.message = 'The student infos was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteStudent() {
      StudentServices.delete(this.selectedStudent.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "students" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getStudent(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>