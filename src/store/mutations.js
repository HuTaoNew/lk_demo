import {ADD_TODO, DEL_TODO, DEL_FINISHED, SELECT_ALL} from './mutation-types'

export default{
  [ADD_TODO](state, {todo}){
    state.todos.unshift(todo);
  },

  [DEL_TODO](state, {index}){
    state.todos.splice(index, 1);
  },

  [DEL_FINISHED](state){
    state.todos = state.todos.filter(todo => !todo.finished)
  },

  [SELECT_ALL](state, {value}){
    state.todos.forEach(todo => {
      todo.finished = value;
    });
  }
}
