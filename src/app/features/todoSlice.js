"use client";

import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  
};


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      const inputData = JSON.stringify(state.todos)
      localStorage.setItem("todos", inputData)
      console.log(current(state.todos))
    },
    removeTodo: (state, action) => {
      
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log(action.payload)
      localStorage.setItem("todos",JSON.stringify(state.todos.filter((todo) => todo.id !== action.payload)))
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
