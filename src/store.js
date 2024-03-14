import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todos/todoSlice'


const reducer = {
    todos: todoReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;