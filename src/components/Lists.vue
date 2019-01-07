<template>
  <div>
    <ul class="todo-main" v-for="(todo, index) in $store.state.todos" :key="index">
      <Items :todo="todo" :index="index" />
    </ul>
  </div>
</template>

<script>
import Items from "./Items";

export default {
  name: "lists",
  components: {
    Items
  }
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
</style>
