import React from 'react'
import styled from "styled-components";

const SidebarPanel = styled.div`
	display: flex;
	flex-flow: row nowrap;
	button {
		display: inline-block;
		height: 50px;
		margin: 5px;
		white-space: nowrap;
		background-color: blue;
		color: white;
		box-sizing: border-box;
		border: 0;
		padding: 2px;
		border-radius: 5px;
	}
`;

const Sidebar = (props) => {
	const { handleClearCompleted, handleMarkAllCompleted } = props;
	return (
		<SidebarPanel>
			<button onClick={handleMarkAllCompleted}>Mark All Completed</button>
			<button onClick={handleClearCompleted}>Clear Completed</button>
		</SidebarPanel>
	)
}

export default Sidebar
