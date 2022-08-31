const { createSlice,createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
    loading:false,
    relatedPosts:[],
    error:''
};

const fetchRelatedPost = createAsyncThunk("relatedPost/fetchRelatedPost",async(title)=>{
    const querArray = title.split(" ")
    let querString = querArray.map((q)=>`title_like=${q}`).join("&")
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${querString}`);
    const relatedPosts = await response.json();
    return relatedPosts
})
const relatedPostsSlice = createSlice({
    name:"relatedPost",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchRelatedPost.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchRelatedPost.fulfilled,(state,action)=>{
            state.loading = false,
            state.relatedPosts = action.payload

        })
        builder.addCase(fetchRelatedPost.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message,
            state.relatedPosts = []
        })
       
    },
  
});

module.exports = relatedPostsSlice.reducer;
module.exports.fetchRelatedPost = fetchRelatedPost;


// (async function (){
// await store.dispatch(thunk1)
// await store.dispatch(thunk2)
// })()