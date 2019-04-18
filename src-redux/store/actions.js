import {ADD_ITEM, DELETE_ITEM, CHANGE_VALUE, INIT_LIST} from './action-types'

export const addItem = (item) => ({type: ADD_ITEM, item})
export const deleteItem = (index) => ({type: DELETE_ITEM, index})
export const changeValue = (value) => ({type: CHANGE_VALUE, value})
export const initList = (list) => ({type: INIT_LIST, list})
export const getTodoList = () => {
  return (dispatch) => {
    setTimeout(() => {
     const list = ['hello', 'java', 'php']
      console.log(list)
      dispatch(initList(list))
    }, 2000)
  }
}