<template>
  <ul class="todo-main">
    <li>
      <label>
        <input type="checkbox">
        <span>Vue-拼多多项目实战-课程讲解</span>
      </label>
      <button style="display:none">删除</button>
    </li>
    <li>
      <label>
        <input type="checkbox">
        <span>Vue-拼多多项目实战-作业布置</span>
      </label>
      <button style="display:none">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "lists"
};
</script>

<style scoped>
/*列表*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/*列表选项*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  background-color: orangered;
  padding: 4px 10px;
  border-radius: 5px;
  color: #fff;
  border: none;
  float: right;
  margin-top: 3px;
  outline: none;
  cursor: pointer;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
