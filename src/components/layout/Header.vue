<template>
  <header>
    <div class="component">Header.vue</div>
    <h1>Todo List</h1>
    <nav>
      <div class="component">router-link</div>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  background: rgb(255, 166, 0);
  padding: 10px;
}

nav {
  background: white;
  padding: 10px;
}

.nav-item {
  background: cyan;
  padding: 5px;
  margin-right: 5px;
}
</style>
