<template>
  <div class="home">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header></Header>
        <Lists></Lists>
        <Footer></Footer>
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
    };
  },
  components: {
    Header,
    Lists,
    Footer
  },
  methods:{

    selectedAll(isChecked){
      this.todos.forEach(todo => {
        todo.finished = isChecked
      })
    },
    delFinished () {
      this.todos = this.todos.filter(todo => !todo.finished)
    }
  }
}
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
