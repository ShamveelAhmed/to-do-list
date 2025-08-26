import { useState } from "react";

export default function App() {
  // State to hold todos
  const [todos, setTodos] = useState([]);
  // State for input value
  const [newTodo, setNewTodo] = useState("");

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim() === "") return; // prevent empty
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo(""); // clear input
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

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Active todos count
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo List</h1>

      {/* Input + Add Button */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTodo}>Add</button>

      {/* Todo Items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              margin: "10px 0",
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
              Delete
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
