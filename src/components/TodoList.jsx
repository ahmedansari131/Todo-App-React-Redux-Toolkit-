import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../slices/todoSlice";
import AddTodo from "./AddTodo";

const TodoList = (props) => {
  const { inputText, setInputText, isUpdating, setIsUpdating, todoId, setTodoId } = props;
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getTextToInput = (text, id) => {
    setIsUpdating(true);
    let todoText = text;
    setInputText(todoText);
  };

  return (
    <div className="p-10 flex flex-col gap-4">
      {todos.map((item) => (
        <div
          key={item.id}
          className="bg-sky-800 border border-sky-400 rounded-md px-6 py-3 flex justify-between items-center "
        >
          <div>
            <li className="list-none text-white font-medium">{item.text}</li>
          </div>
          <div className="flex items-center gap-6 text-white">
            <button
              onClick={() => {
                getTextToInput(item.text, item.id);
                setTodoId(item.id);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                dispatch(removeTodo(item.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
