import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component{
  static propTypes = {
    todoItem: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number
  }
  static defaultProps = {
    todoItem: 'hello',
    deleteItem: PropTypes.func,
    index: PropTypes.number
  }
  deleteItem=()=>{
    this.props.deleteItem(this.props.index)
  }
  render(){
    const {todoItem}=this.props
    return(
      <div onClick={this.deleteItem}>{todoItem}</div>
    )
  }
}