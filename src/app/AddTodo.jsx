"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-6 w-full"
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter your todo"
          className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-5 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
