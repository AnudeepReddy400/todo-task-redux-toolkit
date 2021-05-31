import {useSelector} from 'react-redux'


const HashWords = ()=>{
    const searchWord = useSelector((state)=>state.searchWords)
    const todos = useSelector((state)=>state.todos)
    
    if(searchWord === ""){
        return <div></div>
    }else{
        const filterList = todos.todoList.filter((each)=>each.todoName[0] === "#")
        const hashedWords = filterList.filter((each)=>each.todoName.includes(searchWord))
        return hashedWords.map((each,index) =>{
            return(
                <p key = {index}>{each.todoName}</p>
            )
        })
    }
    
}
export default HashWords