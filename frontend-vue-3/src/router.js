import { createWebHistory, createRouter } from "vue-router";
import StudentList from './components/StudentsList'
import AddStudent from './components/AddStudent'
import StudentInfo from './components/Student1'
const routes = [
  {
    path: "/",
    alias: "/students",
    name: "students",
    component: StudentList,
  },

  {
    path: "/students/:id",
    name: "students-info",
    component: StudentInfo,
  },

  {
    path: "/addStudent",
    name: "add-student",
    component: AddStudent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
