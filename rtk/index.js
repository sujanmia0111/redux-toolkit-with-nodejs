const store = require("./app/store");
const { fetchPost } = require("./features/postSlice/postSlice");

// store.subscribe(() =>
// {
// })

store.dispatch(fetchPost());

