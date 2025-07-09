"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./features/todoSlice";

const Todo = () => {
 
  const todos = useSelector((state)=>state.todos)
  const [localTodos,setLocalTodos]=useState([]);
console.log(todos)
  
  // const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(()=>{
     const todo = JSON.parse(localStorage.getItem("todos"))
     setLocalTodos(todo);
  },[todos])
  return (
    <>
      <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          My Todo List
        </h2>

        <ul className="space-y-2">
          {localTodos?.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              <span className="text-gray-800">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 font-bold hover:text-red-700 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
