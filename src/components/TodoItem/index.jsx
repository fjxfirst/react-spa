import React,{Component} from 'react'
export default class TodoItem extends Component{
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