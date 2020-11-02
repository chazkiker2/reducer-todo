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

const StyledApp = styled.div`
	width: 99vw;
	margin: 0 auto;
	/* height: 100vh; */
	overflow-x: hidden;
	-webkit-scrollbar: none;
	scrollbar-width: none;
	box-sizing: border-box;
	header {
		box-sizing: border-box;
		width: 100vw;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		height: 60px;
		background-color: rgb(36, 37, 38);
		color: rgb(186, 143, 255);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 12px;
		top: 0;
		margin: 0;
		box-sizing: border-box;
		img {
			box-sizing: border-box;
			height: 40px;
			width: auto;
		}
	}
	main {
		box-sizing: border-box;
		background-color: #FFF;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		
		text-align: center;
	}
`;

const SplitPane = styled.section`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 60vw;
	margin: 0 auto;
	border: 0;
	background-color: lightgray;
	border-radius: 10px;
	box-sizing: border-box;
	padding-bottom: 5px;
	div.splitpane-left {
		display: inline-flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-items: center;
		width: 60vw;
		box-sizing: border-box;
	}
`;

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
		<StyledApp className="App">
			<header className="App-header">
				<img src="https://redux.js.org/img/redux.svg" alt="redux logo" />
				<h1>Redux To-Do's</h1>
			</header>
			<main>
				<section>
					<h2>Todo's</h2>
					<SplitPane>
						<div className="splitpane-left">
							<Header input={state.input} handleInputChanges={handleInputChanges} handleInputSubmit={handleInputSubmit} />
							<Sidebar handleClearCompleted={handleClearCompleted} handleMarkAllCompleted={handleMarkAllCompleted} />
						</div>
						{/* <div > */}
						<TodoList todos={state.todos} handleToggle={handleToggle} handleDelete={handleDelete} />
						{/* </div> */}
					</SplitPane>
				</section>
			</main>
		</StyledApp>
	);
}

export default App;
