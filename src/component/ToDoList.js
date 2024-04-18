import React, { useState } from "react";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) =>{
    const updatedTodos = todos.filter((_,i)=>i!==index);
    setTodos(updatedTodos)
  }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={addToDo}>ADD</button>
      <ul>
        {
            todos.map((todos,index)=>(
                <li key={index}>
                    {todos}
                    <button onClick={()=>removeTodo(index)}>Remove</button>
                </li>
            ))
        }
        
      </ul>
    </div>
  );
};

export default ToDoList;
