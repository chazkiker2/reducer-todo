import React from 'react';
import styled from "styled-components";

const Todo = styled.div`
	background: lightgray;
	text-align: left;
	text-decoration: ${pr => pr.checked ? "line-through" : "none"};
	border: 1px solid black;
	div.custom-checkbox {
		display: inline-block;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		background-color: ${pr => pr.checked ? "black" : "transparent"};
	}
`;

const TodoItem = (props) => {
	const { todo, handleToggle } = props;
	return (
		<Todo onClick={() => handleToggle(todo.id)}>
			<div className="custom-checkbox" />
			<h5>{todo.text}</h5>
		</Todo>
	)
}

export default TodoItem;
