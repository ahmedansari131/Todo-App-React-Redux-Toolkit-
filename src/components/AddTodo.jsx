import React, { useState } from "react";
import { addTodo, updateTodo } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";

const AddTodo = (props) => {
  const {inputText, setInputText, isUpdating, setIsUpdating, todoId} = props;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if(isUpdating){
      dispatch(updateTodo([inputText, todoId]));
      setInputText("");
      setIsUpdating(false);
      return;
    }

    if(inputText === "") return;
    dispatch(addTodo(inputText));
    setInputText("");
  };

  return (
    <div className=" w-full h-96 flex justify-center p-10  border-b border-sky-900 flex-col gap-5">
      <h2 className="text-3xl font-bold text-white uppercase">Todo App</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-full items-start h-full gap-4"
      >
        <textarea
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          placeholder="Enter text here"
          id="textarea"
          className="w-full rounded-md resize-none outline-none p-3 h-full"
        ></textarea>
        <div className="flex gap-5">
          <PrimaryBtn text="Add" action={handleSubmit} isUpdating={isUpdating} />
          <SecondaryBtn setInputText={setInputText} />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
