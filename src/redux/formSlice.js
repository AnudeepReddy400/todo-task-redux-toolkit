import {createSlice} from '@reduxjs/toolkit'


const formContent = createSlice({
    name:"form",
    initialState:{
        formList:[]
    },
    reducers:{
        addForm:(state,action)=>{
            state.formList.push(action.payload)
        }
    }
})


export const{addForm} = formContent.actions
export default formContent.reducer