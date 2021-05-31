import {useSelector,useDispatch} from 'react-redux'
import {selectTodo,filterTodo} from '../../redux/todoSlice'
import {hashedTodo} from '../../redux/displayFilter'

const TodoList =()=>{
    const todos = useSelector((state)=>state.todos)
    console.log(todos)
    const dispatch = useDispatch()

    const todoSelected = each =>{
        dispatch(selectTodo(each))
        
    }

    const selectedHashedWord = value =>{
        if(value[0] === "#"){
            console.log(value)
            dispatch(filterTodo(value))
            dispatch(hashedTodo(value))
        }
    }
    
    return todos.todoList.map((each,index) =>{
        let highlightedText = each.todoName[0] === '#' ? "highlight-text" : ""
        let selctedTodo = each.todoSelected ? "selectedTodo" : ""
        let todoStatus = each.todoSelected? "Completed" : "Active"
        return(
            <li className = {`todo-item-container`}  key = {index} >
            <div className = {`label-container ${selctedTodo}`} >
                <h1 className = {`checkbox-label ${highlightedText}`} onClick = {()=>selectedHashedWord(each.todoName)}>{each.todoName}</h1>
                <p>{each.todoCreated}</p>
                <p className = "todo-status" onClick ={() => todoSelected(each)}>{todoStatus}</p>
            </div>
        </li>
        )
    })
}
    


export default TodoList