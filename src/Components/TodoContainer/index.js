import {useDispatch} from 'react-redux'
import AddTodo from '../AddTodo'
import TodoList from '../TodoList';
import {resetTodo} from '../../redux/todoSlice'
import SelectedHashedWord from '../SelectedHashedWord'

const TodoContainer = () =>{
  const dispatch = useDispatch()

  const onResetTodoList = ()=>{
    dispatch(resetTodo())
  }
  return(
  <div className="todos-bg-container">
        <div className="content-Container">
              <h1 className="todos-heading">Todos</h1>
              <div className = "heading-container">
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <button type = "button" className = "reset-button" onClick = {onResetTodoList}>Reset</button>
              </div>
              <AddTodo/>
             <SelectedHashedWord/>
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container" id="todoItemsContainer">
                <TodoList/>
              </ul>
        </div>
      </div>
  )
}

export default TodoContainer;