import {createSlice} from '@reduxjs/toolkit'

const displayFiltersSlice = createSlice({
    name:"displayFilters",
    initialState:{
        filter:"",
        clear:false
    },
    reducers:{
        hashedTodo:(state,action)=>{
            state.filter = action.payload
            state.clear = true

        },
        clearAll:(state,action)=>{
            state.filter = ""
            state.clear =false
        }
    }
})

export const {hashedTodo,clearAll} = displayFiltersSlice.actions
export default displayFiltersSlice.reducer