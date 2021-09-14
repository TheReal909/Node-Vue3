<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link to="/" class="navbar-brand">Student Management</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/students" class="nav-link">Students</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addStudent" class="nav-link"
            >Add Students</router-link
          >
        </li>
      </div>
    </nav>
    
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
