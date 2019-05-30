<template>
  <div class="home">
    <div class="component">Home.vue</div>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

export default {
  name: "Home",
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        })
        .catch(err => err);
    },
    addTodo(newTodo) {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: newTodo.title,
          completed: newTodo.completed
        })
      })
        .then(res => res.json())
        .then(data => {
          this.todos.push({ ...newTodo, id: data.id });
        })
        .catch(err => err);
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => (this.todos = data))
      .catch(err => err);
  }
};
</script>

<style scoped>
.home {
  background: blue;
  padding: 10px;
}
</style>
