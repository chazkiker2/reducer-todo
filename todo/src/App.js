import React, { useReducer } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import reducer from "./reducers/index";
import actions from "./actions/index";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
library.add(fab);

const { addTodo, setNewItemText, toggleTodo, editTextTodo, deleteTodo, markAllCompleted, clearCompleted, } = actions;

const INITIAL_STATE = {
	todos: [],
	input: "",
	newItemText: "",
}
function App() {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const handleInputChanges = (evt) => {
		dispatch(setNewItemText(evt.target.value));
	}

	const handleInputSubmit = (evt) => {
		evt.preventDefault();
		dispatch(setNewItemText(""));
		dispatch(addTodo(state.input));
	}

	const handleClearCompleted = () => {
		dispatch(clearCompleted());
	}

	const handleMarkAllCompleted = () => {
		dispatch(markAllCompleted())
	}

	const handleToggle = (id) => {
		dispatch(toggleTodo(id));
	}
	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Redux To-Do's</h1>
			</header>
			<main>
				<section>
					<h2>Todo's</h2>
					<div className="todo-app">
						<Sidebar handleClearCompleted={handleClearCompleted} handleMarkAllCompleted={handleMarkAllCompleted} />
						<Header input={state.input} handleInputChanges={handleInputChanges} handleInputSubmit={handleInputSubmit} />
						<TodoList todos={state.todos} handleToggle={handleToggle} handleDelete={handleDelete} />

					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
