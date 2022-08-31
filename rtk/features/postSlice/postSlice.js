const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const {fetchRelatedPost} = require("../relatedPostSlice/relatedPostSlice")
// initial state
const initialState = {
    loading: false,
    post:{},
    error:"",
}
// create asyncThunk
const fetchPost = createAsyncThunk("post/fetchPost",async (dispatch)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await response.json();
    // await dispatch(fetchRelatedPost(post.tilte))
    return post;

})

// createSlice
const postSlice = createSlice({
    name:"post",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending,(state,action)=>{
           state.loading = true,
           state.post = {},
           state.error = ''
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
           state.loading = false,
           state.error = '',
           state.post = action.payload
        })
        builder.addCase(fetchPost.rejected,(state,action)=>{
           state.loading = false,
           state.error = action.error.message,
           state.post = {}
        })
    }
})

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;