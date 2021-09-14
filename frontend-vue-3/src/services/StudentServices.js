import http from "../http-common";

class StudentService {
  getAll() {
    return http.get("/students");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }

  create(data) {
    return http.post("/students", data);
  }

  update(id, data) {
    return http.put(`/students/${id}`, data);
  }

  delete(id) {
    return http.delete(`/students/${id}`);
  }

  deleteAll() {
    return http.delete(`/students`);
  }

  findByLastName(lastName) {
    return http.get(`/students?lastName=${lastName}`);
  }
}

export default new StudentService();