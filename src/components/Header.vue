<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入今天的任务清单，按回车键确认"
      v-model="todo.title"
      @keyup.enter="addItem(todo)"
    >
  </div>
</template>

<script>
export default {
  name: "header",
  // props: {
  //   addTodo: Function
  // },
  data() {
    return {
      todo: {
        title: "",
        finished: false
      }
    };
  },
  methods: {
    addItem(todo) {
      // 判断数据是否合理
      const title = this.todo.title.trim();
      if (!title) {
        alert('输入的内容不能为空。');
        return;
      }

      //生成todo对象

      //调用处理方法
      this.$store.dispatch('addTodo', this.todo);

      //清空输入框
      this.todo = { title: "", finished: false };
    }
  }
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075),
    0 0 8px rgba(255, 0, 0, 0.6);
}
</style>
