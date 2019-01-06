<template>
  <div class="home">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"></Header>
        <Lists :todos="todos" :delTodo="delTodo"></Lists>
        <Footer :todos="todos" :selectedAll="selectedAll" :delFinished="delFinished"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./../components/Header";
import Lists from "./../components/Lists";
import Footer from "./../components/Footer";

export default {
  name: "home",
  data() {
    return {
      todos: [
        { title: "打高尔夫球", finished: true },
        { title: "会见奥巴马", finished: false },
        { title: "回家吃饭", finished: false },
        { title: "回家敲代码", finished: false }
      ]
    };
  },
  components: {
    Header,
    Lists,
    Footer
  },
  methods:{
    delTodo(index){
      this.todos.splice(index, 1);
    },
    addTodo(todo){
      this.todos.unshift(todo);
    },
    selectedAll(isChecked){
      this.todos.forEach(todo => {
        todo.finished = isChecked;
      })
    },
    delFinished(){
      this.todos = this.todos.filter(todo => !todo.finished)
    }
  }
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

