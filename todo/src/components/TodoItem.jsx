import React from 'react'

const TodoItem = (props) => {
	const { todo } = props;
	return (
		<div>
			<h5>{todo.text}</h5>
		</div>
	)
}

export default TodoItem;
