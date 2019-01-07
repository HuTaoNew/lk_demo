import {ADD_TODO, DEL_TODO, DEL_FINISHED, SELECT_ALL} from './mutation-types'


export default{
  //添加一条记录
  addTodo({commit}, todo){
    commit(ADD_TODO, {todo});
  },

  // 删除一条记录
  delTodo({commit}, index){
    commit(DEL_TODO, {index});
  },

  // 删除完成的记录
  deleteFinished({commit}){
    commit(DEL_FINISHED);
  },

  //选择所有的记录
  selectAll({commit}, value){
    commit(SELECT_ALL, {value});
  }
}
