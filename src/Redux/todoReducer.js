const ADD_TODO = "ADD-TODO";
const NEW_TODO_TEXT = "NEW-TODO-TEXT";
const DELETE_TODO = "DELETE-TODO";

let initialState = {
    todos: [
        // {id: 0, todoText: ""},
    ],
    newTodoText: ""
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            let newTodo = {
                id: state.todos.length + 1,
                todoText: state.newTodoText
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                newTodoText: ""
            };

        case NEW_TODO_TEXT:
            return {
                ...state,
                newTodoText: action.text
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            };

        default:
            return state;
    }
}


export const addTodoActionCreator = () => ({ type: ADD_TODO });

export const newTodoTextActionCreator = (text) => ({ type: NEW_TODO_TEXT, text });

export const deleteTodoActionCreator = (todoId) => ({ type: DELETE_TODO, todoId });


export default todoReducer;