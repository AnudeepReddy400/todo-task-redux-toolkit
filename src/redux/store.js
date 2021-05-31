import {configureStore} from '@reduxjs/toolkit'
import todos from './todoSlice'
import searchWords from './searchWord'
import displayHashedTodo from './displayFilter'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postReducer from './postSlice'
import { combineReducers } from 'redux'


const reducer = combineReducers({
    todos,
    searchWords,
    displayHashedTodo,
    postReducer
})
export default configureStore({
    reducer,
})