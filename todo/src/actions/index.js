// import reducer from "../reducers/index";

export const ADD_TODO = "ADD_TODO";
export const SET_NEW_ITEM_TEXT = "SET_NEW_ITEM_TEXT";
export const EDIT_TEXT_TODO = "EDIT_TEXT_TODO";
export const TOGGLE_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

const addTodo = (text) => {
	return ({ type: ADD_TODO, payload: text });
};

const setNewItemText = (text) => {
	return ({ type: SET_NEW_ITEM_TEXT, payload: text });
}

const toggleTodo = (id) => {
	return ({ type: TOGGLE_TODO, payload: id });
}

const editTextTodo = (id, text) => {
	return ({ type: EDIT_TEXT_TODO, payload: { id: id, text: text } });
}

const deleteTodo = (id) => {
	return ({ type: DELETE_TODO, payload: id });
}

const markAllCompleted = () => {
	return ({ type: MARK_ALL_COMPLETED });
}

const clearCompleted = () => {
	return ({ type: CLEAR_COMPLETED });
}

const actions = {
	addTodo: addTodo,
	setNewItemText: setNewItemText,
	toggleTodo: toggleTodo,
	editTextTodo: editTextTodo,
	deleteTodo: deleteTodo,
	markAllCompleted: markAllCompleted,
	clearCompleted: clearCompleted,
};

export default actions;