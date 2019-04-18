import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import TodoItem from 'components/TodoItem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {addItem, deleteItem, changeValue, getTodoList} from 'store/actions'
import {connect} from 'react-redux'
import './TodoList.css'

class TodoList extends Component {
  static propTypes = {
    changeValue: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    getTodoList: PropTypes.func.isRequired,
    inputValue: PropTypes.string,
    list: PropTypes.array
  }
  handleInputChange = (e) => {
    this.props.changeValue(e.target.value)
  }
  handleBtn = (e) => {
    this.props.addItem(this.inputDom.value)
  }
  handleDeleteItem = (index) => {
    this.props.deleteItem(index)
  }

  componentDidMount() {
    this.props.getTodoList()
  }

  render() {
    const {inputValue, list} = this.props
    return (
      <Fragment>
        <div>
          <label htmlFor="input">请输入</label>
          <input id="input" className="testInput" ref={(inputDom) => {this.inputDom = inputDom}} value={inputValue}
                 type="text" onChange={this.handleInputChange}/>
          <button onClick={this.handleBtn}>提交</button>
        </div>
        <div>
          <TransitionGroup>
            {
              list.map((item, index) =>
                <CSSTransition
                  key={index}
                  timeout={1000}
                  classNames='fade'
                  appear={true}
                >
                  <TodoItem todoItem={item.toString()} index={index} deleteItem={this.handleDeleteItem}/>
                </CSSTransition>)
            }
          </TransitionGroup>
        </div>
      </Fragment>
    )
  }
}

/*const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeValue(value) {
      dispatch(changeValue(value))
    },
    addItem(value){
      dispatch(addItem(value))
    },
    deleteItem(index){
      dispatch(deleteItem(index))
    }

  }
}*/
export default connect(
  (state) => ({
    inputValue: state.inputValue,
    list: state.list
  }),
  {changeValue, addItem, deleteItem, getTodoList}
)(TodoList)