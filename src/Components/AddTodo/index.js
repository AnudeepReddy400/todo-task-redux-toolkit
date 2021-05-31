import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/todoSlice'
import {todoWord,clearSuggestions} from '../../redux/searchWord'
import HashWords from '../HashWords'

const AddTodo = ()=>{

    const dispatch = useDispatch()

    const onAddTodo = event =>{
        if (event.key === "Enter"){
          let input = event.target.value
          dispatch(addTodo(input))
          dispatch(clearSuggestions())
          event.target.value =''
          
        }
        
        
      }

      const changeValue = event =>{
        let searchWord = event.target.value
        dispatch(todoWord(searchWord))
        
    }
      return(

        <div className = "input-container">
            <input type="text" className="todo-user-input" onKeyDown={onAddTodo} onChange = {changeValue}/>
            <HashWords/>
        </div>

)
      }



export default AddTodo