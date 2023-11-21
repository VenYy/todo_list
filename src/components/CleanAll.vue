<template>
  <div class="clean-all">
    <div class="todos-status">
      <input type="checkbox" class="form-check-input">
      已完成<span class="done">{{ todoDone }}</span>&nbsp;/&nbsp;全部<span class="all">{{ todoAll }}</span>
    </div>
    <div class="clean-all-btn">
<!--      <button class="btn btn-danger btn-sm" @click="cleanAll">清除已完成任务</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "CleanAll",
  data() {
    return {}
  },
  props: ["todoDone", "todoAll"],
  methods: {
  },

}
</script>

<style scoped>


.clean-all {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
}

.clean-all input {
  vertical-align: text-top;
  margin-right: 5px;
}

.todos-status {
  float: left;
}

.clean-all-btn {
  margin-left: 100px;
  float: left;
}
</style>