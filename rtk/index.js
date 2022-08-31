const store = require("./app/store");
const {fetchpost} = require("./features/task/taskSlice");

store.subscribe(()=>{
})
const dispatch = store.dispatch()
store.dispatch(fetchpost(dispatch));

