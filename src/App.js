import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
import React, { useState, useEffect } from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, filter])

  const filterHandler = () => {
    switch(filter) {
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true));
      break;

      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false));
      break;

      default:
        setFiltered(todos)
      break;
    }    
  }

  return (
    <div className="App">
      <header>
        <h1 className="web-title">tudu app</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      filter={filter}
      setFilter={setFilter}
      filtered={filtered}
      setFiltered={setFiltered} />

      <TodoList
      todos={todos} 
      setTodos={setTodos}
      filter={filter}
      filtered={filtered} />
    </div>
  );
};

export default App;
