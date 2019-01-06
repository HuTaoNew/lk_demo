<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck">
    </label>
    <span>
      <span>已完成{{this.finishedCount}}件</span>
      / 总计{{this.todos.length}}件
    </span>
    <button class="btn btn-warning" @click="deleteTodos()">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    todos: Array,
    selectedAll: Function,
    delFinished: Function
  },
  computed: {
    finishedCount() {
      return this.todos.reduce(
        (total, todo) => total + (todo.finished ? 1 : 0),
        0
      );
    },
    isCheck: {
      get() {
        if (this.todos.length > 0) {
          return this.finishedCount === this.todos.length;
        }
      },

      set(value) {
        this.selectedAll(value);
      }
    }
  },
  methods: {
    deleteTodos() {
      this.delFinished();
    }
  }
};
</script>

<style scoped>
/*尾部*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
