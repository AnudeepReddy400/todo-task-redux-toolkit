import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts  = createAsyncThunk(
    'posts/getPosts',async(term)=>{
        const response = await axios.get(`https://api.unsplash.com/search/photos`,{
            params:{query:term},
            headers:{
                Authorization:'Client-ID UJ-HLfZlXwx7FtVbT7Ple_Yggl3UOuxKDxbG_a51REI'
            }
        });
        
        return response.data.results
    }

    
)

const postsSlice = createSlice({
    name:'posts',
    initialState:{ 
        lists:[],
        status: null,
    },
    extraReducers:{
        [getPosts.pending]: (state,action)=>{
            state.status = "loading"
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.lists = action.payload
            state.status = "success"
        },
        [getPosts.rejected]:(state,action)=>{
            state.status = "failed"
        }
    }
})

export default postsSlice.reducer