import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const getPosts  = createAsyncThunk(
    'posts/getPosts',async()=>{
        const response = await fetch(`https://apis.ccbp.in/blogs`);
        if(response.ok){
          const newList = await response.json();
          return newList
        }
        
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