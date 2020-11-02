import { ADD_TODO, EDIT_TEXT_TODO, SET_NEW_ITEM_TEXT, TOGGLE_TODO, DELETE_TODO, MARK_ALL_COMPLETED, CLEAR_COMPLETED } from "../actions/index";

const nextTodoId = (todos) => {
	const maxId = todos.reduce((mxId, todo) => {
		return Math.max(todo.id, mxId);
	}, -1);
	return maxId + 1;
}

const reducer = (state, action) => {
	switch (action.type) {
		case (ADD_TODO):
			return ({
				...state, todos: [...state.todos, {
					id: nextTodoId(state.todos),
					text: action.payload.trim(),
					completed: false,
				}]
			});

		case (SET_NEW_ITEM_TEXT):
			return ({ ...state, input: action.payload });

		case (TOGGLE_TODO):
			return ({
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id !== action.payload) {
						return todo;
					}
					return {
						...todo, completed: !todo.completed
					};
				})
			});

		case (EDIT_TEXT_TODO):
			return ({
				...state,
				todos: state.todos.map((todo) => {
					if (!todo.id !== action.payload.id) {
						return todo;
					}
					return {
						...todo, text: action.payload.text,
					}
				})
			});

		case (DELETE_TODO):
			return ({
				...state,
				todos: state.todos.filter((todo) => { return todo.id !== action.payload })
			});

		case (MARK_ALL_COMPLETED):
			return ({
				...state, todos: state.todos.map((todo) => {
					return { ...todo, completed: true };
				})
			});

		case (CLEAR_COMPLETED):
			return ({ ...state, todos: state.todos.filter((todo) => !todo.completed) });

		default:
			return state;
	}
};

export default reducer;