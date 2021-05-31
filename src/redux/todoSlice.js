import {createSlice} from '@reduxjs/toolkit'




const todoSlice = createSlice({
    name:"todos",
    initialState : {
         todoList:[],
         checkedTodos : [],
         stackedTodos:[]
    },
    reducers:{
        addTodo: (state,action) =>{
            let todoCreatedAt = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date())
            let newTodos = [{todoName:action.payload,todoSelected:false,todoCreated:todoCreatedAt},...state.todoList]
            state.todoList = newTodos
            state.stackedTodos = newTodos
        
    },
    selectTodo:(state,action) =>{
        let indexOfSelectedTodo = state.todoList.findIndex((each) => each.todoName === action.payload.todoName)
        for(let item of state.todoList){
            if(state.todoList.indexOf(item) === indexOfSelectedTodo){
                item.todoSelected = true
            }
        }
        state.checkedTodos = [state.todoList[indexOfSelectedTodo],...state.checkedTodos]
        let filteredCheckList = state.todoList.filter((each)=>each.todoSelected !== true)
        let newTodoList = [...filteredCheckList,...state.checkedTodos]
        state.todoList = newTodoList
        state.stackedTodos = newTodoList
    },
    resetTodo:(state,action)=>{
        state.todoList = []
        state.checkedTodos=[]
    },
    filterTodo:(state,action)=>{
        let similarHashedTodos = state.todoList.filter((each) =>each.todoName.includes(action.payload))
        state.todoList = similarHashedTodos
    },
    displayAll:(state,action)=>{
        state.todoList = state.stackedTodos
    }
}
})

export const {addTodo,selectTodo,resetTodo,filterTodo,displayAll} = todoSlice.actions
export default todoSlice.reducer