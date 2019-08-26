export default (initialState, handlers) => (state = initialState, action) =>
	(handlers[action.type] && handlers[action.type](state, action, initialState)) || state;
