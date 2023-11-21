<template>
  <div class="item">
    <div class="item-content">
      <input type="checkbox" class="form-check-input" :checked="item.done" @change="handleTodo(item.id)">
      <span class="item-text">{{ item.text }}</span>
    </div>
    <div class="item-button">
      <button class="btn btn-danger btn-sm">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonItem",
  props: ["item", "checkTodo"],
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    handleTodo(id) {
      this.checkTodo(id)
    }

  }
}
</script>

<style scoped>
.item {
  border-bottom: 1px solid rgba(153, 153, 153, 0.5);
  height: 40px;
  line-height: 40px;
}

.item-content {
  float: left;
}

.item-button {
  float: right;
  margin-right: 100px;
}

.item-content input {
  vertical-align: text-top;
  margin-right: 10px;
}

</style>