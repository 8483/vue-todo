<template>
  <div class="app">
    <div class="component">App.vue</div>
    <Header/>
    <div class="component">rounter-view</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0px;
}

.app {
  background: red;
  padding: 10px;
}
</style>
