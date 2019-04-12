import {ADD_ITEM,DELETE_ITEM,CHANGE_VALUE} from './action-types'
const defaultState = {
  inputValue:'123',
  list:[1,2]
}
export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type){
    case CHANGE_VALUE: return {...state,inputValue:action.value};
    default: return state
  }
}