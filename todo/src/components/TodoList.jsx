import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
	const { todos, handleToggle, handleDelete} = props;
	return (
		<div>
			{
				todos.map((todo) => {
					return <TodoItem todo={todo} key={todo.id} handleToggle={handleToggle} handleDelete={handleDelete} />
				})
			}
		</div>
	);
};

export default TodoList;
