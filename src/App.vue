<template>
  <div id="app">
    <div class="wrapper">
      <my-header :receive="receive" />
      <todo-list
        :todos="todos"
        :checkTodo="checkTodo"
        @delete-todo="handleDeleteTodo(id)"
      />
      <my-footer :todoDone="todoDone" :todoAll="todoAll" />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/myHeader.vue";
import TodoList from "./components/TodoList";
import MyFooter from "./components/myFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    TodoList,
    MyFooter,
  },
  data() {
    return {
      todos: [
        { id: "1", text: "吃饭", done: true },
        { id: "2", text: "睡觉", done: true },
        { id: "3", text: "敲代码", done: false },
      ],
    };
  },
  computed: {
    todoDone: function () {
      return this.todos.filter((item) => item.done).length;
    },
    todoAll: function () {
      return this.todos.length;
    },
  },
  methods: {
    // 添加todo
    receive(todoObj) {
      // console.log(todoObj)
      this.todos.unshift(todoObj);
    },
    // 勾选或取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },

    handleDeleteTodo(id) {
      console.log(id)
      this.todos.splice(this.todos.findIndex(item => item.id === id), 1)
    },
  },
};
</script>
<style>
#app {
  padding-top: 50px;
}

.wrapper {
  padding: 10px;
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 2px 5px rgba(17, 17, 17, 0.55);
}
</style>
