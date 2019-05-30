<template>
  <div class="add">
    <div class="component">AddTodo.vue</div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add todo...">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      let newTodo = {
        title: this.title,
        completed: false
      };

      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
.add {
  background: green;
  padding: 10px;
}
</style>
