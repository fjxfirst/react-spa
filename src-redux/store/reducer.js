import {ADD_ITEM,DELETE_ITEM,CHANGE_VALUE,INIT_LIST} from './action-types'
const defaultState = {
  inputValue:'',
  list:[]
}
export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type){
    case CHANGE_VALUE: return {...state,inputValue:action.value}
    case ADD_ITEM: return {inputValue:'',list:[...state.list,action.item]}
    case DELETE_ITEM: {
      const newList = [...state.list]
      newList.splice(action.index,1)
      return {...state,list:newList}
    }
    case INIT_LIST: return {inputValue:'', list:action.list}
    default: return state
  }
}