import { Todos } from "../models/todos";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

//actions
const addTodo = (msg) => ({
    type: ADD_TODO,
    msg: msg
});

const toggleTodo = (idx) => ({
    type: TOGGLE_TODO,
    idx: idx
});

const ActionCreators = {
    addTodo,
    toggleTodo
};

//initial State
const initialState = {
    todos: []
};

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            state.todos.push(new Todos(action.msg));
            return {
                ...state,
                todos: JSON.parse(JSON.stringify(state.todos))
            };
        case TOGGLE_TODO:
            state.todos[action.idx].done = !state.todos[action.idx].done;
            return {
                ...state,
                todos: JSON.parse(JSON.stringify(state.todos))
            };
        default:
            return state;
    }
}

export {ActionCreators};
export default reducer;