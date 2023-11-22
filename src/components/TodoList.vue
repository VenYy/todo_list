<template>
  <div class="todos">
    <ul>
      <my-item
          v-for="item in todos"
          :key="item.id"
          :item="item"
          :checkTodo="checkTodo"
          :todos="todos"
          @delete-todo="deleteTodo"
      />
    </ul>

  </div>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  name: "TodoList",
  components: {
    myItem,
  },
  data() {
    return {
      isHover: false
    }
  },
  props: ["todos", "checkTodo"],
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id)
    }
  }
};
</script>

<style scoped>
.todos {
  margin-top: 30px;
  padding: 10px;
}

ul {
  margin: 0;
  padding: 0;
}


</style>
