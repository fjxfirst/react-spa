import {ADD_ITEM, DELETE_ITEM,CHANGE_VALUE} from './action-types'

export const addItem = (item) => ({type: ADD_ITEM, item})
export const deleteItem = (index) => ({type: DELETE_ITEM, index})
export const changeValue = (value) => ({type: CHANGE_VALUE, value})