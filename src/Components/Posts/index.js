import {useDispatch,useSelector} from 'react-redux'
import React,{useEffect,useState} from 'react'
import {getPosts} from '../../redux/postSlice'

const Posts =()=>{
    const [activeValue,selectedValue] = useState("")
    const displayResult = useSelector((state)=>state.postReducer)
    
    const dispatch = useDispatch()
    const onSubmitData = event =>{
        if (event.key === "Enter"){
            dispatch(getPosts(event.target.value))
        }
    }

    const images = displayResult.lists.map((image)=>{
        return <img src = {image.urls.regular}/>
    })
    return(
        <div>
            <input type = "text" onKeyDown = {onSubmitData}/>
            {images}
            </div>

    )
}

export default Posts
