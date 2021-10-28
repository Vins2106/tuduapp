import React from 'react';

const Todo = ({ todo, name, completed, todos, setTodos }) => {
	const deleteHandler = (e) => {
		setTodos(todos.filter(x => x.id !== todo.id))
	}

	const completedHandler = (e) => {
		setTodos(todos.map(item => {
			if (item.id === todo.id) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}
	return (
		<div className={`todo ${todo.completed ? "completed" : ""}`}>
			<li className={`todo-item ${todo.completed ? "completed" : ""}`} 
			title={`${todo.completed ? "complete" : "not complete"}`}>{name}</li>
			<div className="todo-options">
				<button title={todo.completed ? 'Uncheck' : 'check'} onClick={completedHandler} className="btn">
					<i className={todo.completed ? 'fas fa-times' : 'fas fa-check'}></i>
				</button>
				<button title="Remove" onClick={deleteHandler} className="btn">
					<i className="fas fa-trash"></i>
				</button>			
			</div>
		</div> 
	);
}

export default Todo