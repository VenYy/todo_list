<template>
  <div id="app">
    <div class="wrapper">
      <my-header :receive="receive" />
      <todo-list
        :todos="todos"
        :checkTodo="checkTodo"
        @delete-todo="handleDeleteTodo"
      />
      <my-footer
        :todoDone="todoDone"
        :todoAll="todoAll"
        :todos="todos"
        @handleAllTodo="handleAllTodo"
        @deleteDone="deleteDone"
      />
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
    /** 添加todo **/
    receive(todoObj) {
      // console.log(todoObj)
      this.todos.unshift(todoObj);
    },

    /** 选中或取消选中单个todo **/
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },

    /** 删除单个todo **/
    handleDeleteTodo(id) {
      console.log(id);
      this.todos.splice(
        this.todos.findIndex((item) => item.id === id),
        1
      );
    },

    /** 选中或取消选中所有todo **/
    handleAllTodo() {
      // 检查是否所有的 todo 都已经选中
      const allDone = this.todos.every((todo) => todo.done);

      // 切换所有 todo 的选中状态
      this.todos.forEach((todo) => {
        todo.done = !allDone;
      });
    },

    /** 删除所有已完成的todo **/
    deleteDone() {
      this.todos = this.todos.filter((todo) =>!todo.done);
    }
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
