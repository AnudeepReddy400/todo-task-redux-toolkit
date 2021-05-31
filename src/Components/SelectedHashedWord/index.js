import {useSelector,useDispatch} from 'react-redux'
import {clearAll} from '../../redux/displayFilter'
import {displayAll} from '../../redux/todoSlice'
import './index.css'

const SelectedHashedWord =()=>{
    const displayHashedTodo = useSelector((state)=>state.displayHashedTodo)
    const dispatch = useDispatch()
    const getAllTodos =()=>{
          dispatch(clearAll())
          dispatch(displayAll())
    }
    if(displayHashedTodo.clear){
        return(
            <div className = "hashed-todo-container">
                <p>Filter:</p>
            <div className = "hashedTodoNameContainer">
                <p className = "hashedTodoName">{displayHashedTodo.filter}</p>
                <button type = "button" className = "display-all-todos" onClick = {getAllTodos}>X</button>
            </div>
            </div>
        )
        }else{
            return<div></div>
        }
    }


export default SelectedHashedWord