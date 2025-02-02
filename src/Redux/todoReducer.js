const ADD_TODO = "ADD-TODO";
const NEW_TODO_TEXT = "NEW-TODO-TEXT";

let initialState = {
    todos: [
        {id: 0, todoText: ""},
    ],
    newTodoText: ""
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            const maxId = state.todos.reduce((max, todo) => Math.max(max, todo.id), 0);
            let newTodo = {
                id: maxId + 1,
                todoText: state.newTodoText
            };
            state.todos.push(newTodo)
            state.newTodoText = "";
            return state;
        case NEW_TODO_TEXT:
            state.newTodoText = action.text;
            return state;
        default:
            return state;
    }
}


export const addTodoActionCreator = () => {
    return {
        type: ADD_TODO
    }
}

export const newTodoTextActionCreator = (text) => {
    return {
        type: NEW_TODO_TEXT,
        text
    }
}

export default todoReducer;