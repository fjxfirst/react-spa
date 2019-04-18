import React from 'react';
import ReactDom from 'react-dom';
import TodoList from 'components/TodoList'
import store from 'store'
function render(){
  console.log(1)
  ReactDom.render(<TodoList store={store}/>, document.getElementById('app'))
}
render()
store.subscribe(render)