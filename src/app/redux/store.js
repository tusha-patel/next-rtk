import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import todoReducer from "./todoslice"

export const Store = configureStore({
    reducer: {
        usersData: userReducer,
        todosData: todoReducer,
    }
})