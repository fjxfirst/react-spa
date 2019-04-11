import React, {Component, Fragment} from 'react'
import TodoItem from 'components/TodoItem'
import './TodoList.css'
export default class TodoList extends Component {
  state = {
    inputValue: '',
    list: []
  }
  handleInputChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtn = (e) => {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }))
  }
  handleDeleteItem = (index) => {
    this.setState((preState) => {
      const list = preState.list
      list.splice(index, 1)
      return {list}
    })
  }

  render() {
    const {list, inputValue} = this.state
    return (
      <Fragment>
        <div>
          <label htmlFor="input">请输入</label>
          <input id="input" className="testInput" type="text" value={inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtn}>提交</button>
        </div>
        <div>
          {
            list.map((item, index) => <TodoItem key={index} todoItem={item} index={index} deleteItem={this.handleDeleteItem}/>)
          }
        </div>
      </Fragment>
    )
  }
}