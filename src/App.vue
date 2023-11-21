<template>
  <div id="app">
    <div class="wrapper">
      <my-header :receive="receive"></my-header>
      <todo-list :todoList="todoList" :checkTodo="checkTodo"></todo-list>
      <clean-all :todoDone="todoDone" :todoAll="todoAll"></clean-all>
    </div>

  </div>
</template>

<script>
import MyHeader from "./components/myHeader.vue";
import TodoList from "./components/TodoList";
import CleanAll from "./components/CleanAll.vue";


export default {
  name: "App",
  components: {
    MyHeader,
    TodoList,
    CleanAll,
  },
  data() {
    return {
      todoList: [
        {id: "1", text: "吃饭", done: true},
        {id: "2", text: "睡觉", done: true},
        {id: "3", text: "敲代码", done: false},
      ],
    }
  },
  computed: {
    todoDone: function() {
      return this.todoList.filter(item => item.done).length;
    },
    todoAll: function() {
      return this.todoList.length;
    }
  },
  methods: {
    // 添加todo
    receive(todoObj) {
      // console.log(todoObj)
      this.todoList.unshift(todoObj)
    },
    // 勾选或取消勾选
    checkTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    }
  }
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
