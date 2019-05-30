<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <div class="component">TodoItem.vue</div>
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{todo.title}}
      <button class="btn-delete" @click="$emit('delete-todo', todo.id)">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: rgb(85, 176, 255);
  padding: 10px;
  margin-bottom: 10px;
}

.is-complete {
  text-decoration: line-through;
}
</style>
