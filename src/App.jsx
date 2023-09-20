import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { useState } from "react";


function App() {
  const [inputText, setInputText] = useState("");
  const [todoId, setTodoId] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <>
    <div className="w-full min-h-screen bg-sky-950">
      <AddTodo inputText={inputText}  setInputText={setInputText} isUpdating={isUpdating} setIsUpdating={setIsUpdating} todoId={todoId} setTodoId={setTodoId} />
      <TodoList inputText={inputText}  setInputText={setInputText} isUpdating={isUpdating} setIsUpdating={setIsUpdating} todoId={todoId} setTodoId={setTodoId} />
    </div>
    </>
  )
}

export default App
