import {createSlice} from '@reduxjs/toolkit'

const suggestedTodosSlice = createSlice({
    name : "suggestedTodo",
    initialState : "",
    reducers:{
        todoWord : (state,action)=>{
            return action.payload
        },
        clearSuggestions:(state,action)=>{
            return ""
        }
    }
})
export const {todoWord,clearSuggestions} = suggestedTodosSlice.actions
export default suggestedTodosSlice.reducer