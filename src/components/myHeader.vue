<template>
  <div class="my-header">
    <input class="input-group-text" type="text" placeholder="请输入你的任务名称, 按回车确认" v-model="text"
           @keyup.enter="addTodo">
  </div>
</template>

<script>
import {nanoid} from "nanoid"

export default {
  name: "SearchHeader",
  props: ["receive"],
  data() {
    return {
      text: ""
    }
  },
  methods: {
    addTodo() {
      if (!this.text.trim()) return alert("输入不能为空")
      const todoObj = {id: nanoid(), text: this.text, done: false}
      this.receive(todoObj)
      this.text = ""
    }
  }
};
</script>

<style scoped>


.my-header input {
  width: 100%;
}
</style>
