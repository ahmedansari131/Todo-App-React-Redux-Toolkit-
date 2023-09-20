import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../slices/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

const TodoList = (props) => {
  const {
    inputText,
    setInputText,
    isUpdating,
    setIsUpdating,
    todoId,
    setTodoId,
  } = props;
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getTextToInput = (text) => {
    setIsUpdating(true);
    let todoText = text;
    setInputText(todoText);
  };

  return (
    <div className="p-10 flex flex-col gap-4">
      {todos.map((item) => (
        <div
          key={item.id}
          className="bg-sky-800 border border-sky-400 rounded-md px-6 py-5 flex justify-between items-center "
        >
          <div>
            <li className="list-none text-white font-medium text-lg">{item.text}</li>
          </div>
          <div className="flex items-center gap-6 text-white">
            <div className="py-1 px-3 bg-green-900 rounded-md cursor-pointer border border-green-600 hover:bg-green-800">
              <UpdateIcon
                onClick={() => {
                  getTextToInput(item.text, item.id);
                  setTodoId(item.id);
                }}
              />
            </div>
            <div className="py-1 px-3 bg-red-900 rounded-md border border-red-500 cursor-pointer hover:bg-red-800">
              <DeleteIcon
                onClick={() => {
                  dispatch(removeTodo(item.id));
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
