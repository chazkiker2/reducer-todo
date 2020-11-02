import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
	const { todos } = props;

	return (
		<div>
			{
				todos.map((todo) => {
					return <TodoItem todo={todo} key={todo.id} />
				})
			}
		</div>
	);
};

export default TodoList;
