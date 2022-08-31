const configureStore = require("@reduxjs/toolkit").configureStore;
const postReducer = require("../features/postSlice/postSlice")
const relatedPostsReducer = require("../features/relatedpostSlice/relatedPostSlice")
const { createLogger } = require("redux-logger");

const logger = createLogger();

// configure store
const store = configureStore({
    reducer: {
        post:postReducer,
        relatedPosts:relatedPostsReducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(logger)
});

module.exports = store;
