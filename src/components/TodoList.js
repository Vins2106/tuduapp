import React, { useState } from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, setTodos, filter, filtered }) => {


	return (
		<div className="todo-container">
			<ul className="todo-list">
			{filtered.sort((a, b) => a.date - b.date).map((todo) => (
				<Todo 
				todo={todo} 
				name={todo.text} 
				completed={todo.completed} 
				key={todo.id}
				todos={todos}
				setTodos={setTodos} />
			))}
			</ul>
		</div>
	);
}

export default TodoList;