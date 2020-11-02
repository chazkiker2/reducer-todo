import React from 'react';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { f2ed } from '@fortawesome/free-solid-svg-icons'

const Todo = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	background: lightgray;
	text-align: left;
	text-decoration: ${pr => pr.checked ? "line-through" : "none"};
	border: 1px solid black;
	div.custom-checkbox {
		display: inline-block;
		height: 10px;
		width: 10px;
		border: 1px solid black;
		border-radius: 50%;
		background-color: ${pr => pr.checked ? "black" : "transparent"};
		margin: 2px;
	}
	h5 {
		display: inline-block;
	}
`;

const TodoItem = (props) => {
	const { todo, handleToggle, handleDelete } = props;
	return (
		<Todo onClick={() => handleToggle(todo.id)} checked={todo.completed}>
			<div>
				<div className="custom-checkbox" />
				<h5>{todo.text}</h5>
			</div>

			<div>
				<FontAwesomeIcon onClick={() => handleDelete(todo.id)} icon={["fas", "trash-alt"]} />
			</div>
			{/* <i class="far fa-trash-alt"></i> */}
		</Todo>

	)
}

export default TodoItem;
