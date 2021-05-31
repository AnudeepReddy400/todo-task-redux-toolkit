import {useDispatch,useSelector} from 'react-redux'
import React,{useEffect} from 'react'
import {getPosts} from '../../redux/postSlice'

const Posts =()=>{
    const displayList = useSelector((state)=>state.postReducer)
    console.log(displayList)
    const dispatch = useDispatch()
     useEffect(()=>{
         dispatch(getPosts())
     },[dispatch])
     if(displayList.status === "loading"){
         return<div>loading</div>
     }else if(displayList.status === "success"){
     return displayList.lists.map((each)=>{
         return(
             <div>
                 <p>{each.title}</p>
             </div>
         )
     })
    }else{
        return<div>failed...</div>
    }
}

export default Posts
