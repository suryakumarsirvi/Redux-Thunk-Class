import { configureStore } from "@reduxjs/toolkit";
import countReducer from './features/counter.slice.js';
import usersReducer from './features/users.slice.js';

export const store = configureStore({
    reducer: {
        count: countReducer,
        users: usersReducer
    }
})