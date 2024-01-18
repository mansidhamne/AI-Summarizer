import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    }, //helps grab one slice of the whole cake
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(articleApi.middleware)
});

// Store is global state that stores entire info of the application. 
// we need only a certain part of it. ie we just need the article api
// for this we added a reducer, and added it in the middleware as well
