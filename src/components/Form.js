import '../App.css'

function Form({inputText, setInputText, todos, setTodos, filter, setFilter, filtered, setFiltered}) {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	}
	const submitTodoHandler = (e) => {
		e.preventDefault();

		if (inputText == "" || inputText == " " || !inputText) return;
		setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 10, date: Date.now()}]);
		setInputText("");
	}

	const filterTodoHandler = (e) => {
		setFilter(e.target.value);		
	}

	return (
			<form className="todo-form">
				<input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
				<button onClick={submitTodoHandler} className="todo-button" type="submit">
					<i className="fas fa-plus-square"></i>
				</button>
				<div className="select">
					<select onChange={filterTodoHandler} name="todos" className="filter-todo">
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>
				</div>
			</form>
	);
};

export default Form;