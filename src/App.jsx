import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (input.trim() === "") return; // prevent empty
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Toggle completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Active tasks count
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 To-Do List</h1>

      {/* Input */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <button onClick={addTodo}>Add</button>

      {/* Todos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: "10px 0",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <p>{activeCount} tasks left</p>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
