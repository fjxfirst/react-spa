import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import TodoItem from 'components/TodoItem'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {addItem,deleteItem,changeValue} from 'store/actions'
import './TodoList.css'
export default class TodoList extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }
  handleInputChange = (e) => {
    this.props.store.dispatch(changeValue(e.target.value))
  }
  handleBtn = (e) => {
   /* this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }))*/
  }
  handleDeleteItem = (index) => {
    /*this.setState((preState) => {
      const list = preState.list
      list.splice(index, 1)
      return {list}
    })*/
  }
  componentDidMount(){
    console.log(this.props.store)
  }
  render() {
    const {inputValue,list} = this.props.store.getState()
    return (
      <Fragment>
        <div>
          <label htmlFor="input">请输入</label>
          <input id="input" className="testInput" value={inputValue} type="text" onChange={this.handleInputChange}/>
          <button onClick={this.handleBtn}>提交</button>
        </div>
        <div>
         {/* <TransitionGroup>
          {
            store.getState().list.map((item, index) =>
              <CSSTransition
                key={index}
                timeout={1000}
                classNames='fade'
                appear={true}
              >
                <TodoItem  todoItem={item} index={index} deleteItem={this.handleDeleteItem}/>
              </CSSTransition>)
          }
          </TransitionGroup>*/}
        </div>
      </Fragment>
    )
  }
}