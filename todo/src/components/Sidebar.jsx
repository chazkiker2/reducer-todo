import React from 'react'

const Sidebar = (props) => {
	const { handleClearCompleted, handleMarkAllCompleted } = props;
	return (
		<div>
			<button onClick={handleClearCompleted}>Clear Completed</button>
			<button onClick={handleMarkAllCompleted}>Mark All Completed</button>
		</div>
	)
}

export default Sidebar
