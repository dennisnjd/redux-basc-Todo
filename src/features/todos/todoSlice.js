import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({ id: nextTodoId++, text: action.payload, completed: false })
        },

        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo } = todoSlice.actions;
