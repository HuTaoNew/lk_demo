<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck">
    </label>
    <span>
      <span>已完成{{finishedCount}}件</span>
      / 总计{{totalCount}}件
    </span>
    <button class="btn btn-warning" @click="deleteTodos()">清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "footer",
  computed: {
    ...mapGetters(["finishedCount", "totalCount", "isCheckedAll"]),
    isCheck: {
      get() {
        return this.isCheckAll;
      },

      set(value) {
        this.$store.dispatch("selectAll", value);
      }
    }
  },
  methods: {
    deleteTodos() {
      this.$store.dispatch("deleteFinished");
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
