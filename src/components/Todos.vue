<template>
  <div class="todos">
    <div class="component">Todos.vue</div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)"/>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
.todos {
  background: rgb(85, 113, 255);
  padding: 10px;
}
</style>
