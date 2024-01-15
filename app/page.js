"use client"

import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 p-2 mr-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-2 border-b border-gray-300 ${
              todo.completed ? 'text-gray-500 line-through' : ''
            }`}
          >
            <span>{todo.text}</span>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
