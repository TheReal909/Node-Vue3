<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchByLastName"
          >
            Search here
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Students List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(student, index) in tutorials"
          :key="index"
          @click="setActiveStudent(student, index)"
        >
          {{ student.lastname }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllStudents">
        Remove all
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="selectedStudent">
        <h4>Selected student infos</h4>
        <div>
          <label><strong>Firstname:</strong></label>
          {{ selectedStudent.firstName }}
        </div>
        <div>
          <label><strong>Lastname:</strong></label>
          {{ selectedStudent.lastName }}
        </div>
        <div>
          <label><strong>Date of birth:</strong></label>
          {{ selectedStudent.dateOfBirth }}
        </div>

        <div>
          <label><strong>Biography:</strong></label>
          {{ selectedStudent.biogragry }}
        </div>

        <router-link
          :to="'/students/' + selectedStudent.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please select a student...</p>
      </div>
    </div>
  </div>
</template>

<script>
import StudentServices from "../services/StudentServices";
export default {
  name: "students-list",
  data() {
    return {
      students: [],
      selectedStudent: null,
      currentIndex: -1,
      lastname: "",
    };
  },
  methods: {
    findStudents() {
      StudentServices.getAll()
        .then((resp) => {
          this.students = resp.data;
          console.log("list of students here " + resp.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.findStudents();
      this.selectedStudent = null;
      this.currentIndex = -1;
    },

    setActiveStudent(student, index) {
      this.selectedStudent = student;
      this.currentIndex = student ? index : -1;
    },

    removeAllStudents() {
      StudentServices.deleteAll
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchByLastName() {
      StudentServices.findByLastName(this.lastname)
        .then((response) => {
          this.students = response.data;
          this.setActiveStudent(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    mounted() {
      this.findStudents();
    },
  },
};
</script>

<style>
  .list {
text-align: left;
max-width: 750px;
margin: auto;
}
</style>
