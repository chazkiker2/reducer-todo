import React from 'react'


const Header = props => {
	const { input, handleInputChanges, handleInputSubmit } = props;
	return (
		<form onSubmit={handleInputSubmit}>
			<input name="todo-input" type="text" value={input} placeholder="Add item" onChange={handleInputChanges} />
		</form>
	)
}


export default Header
