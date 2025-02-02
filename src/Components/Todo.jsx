import React from 'react';
import "./Todo.css";
import {addTodoActionCreator, deleteTodoActionCreator, newTodoTextActionCreator} from "../Redux/todoReducer";

const Todo = (props) => {
    let newTodoElement = React.createRef();

    const addTodo = () => {
        props.dispatch(addTodoActionCreator());
    }

    const onInputChange = () => {
        let text = newTodoElement.current.value;
        props.dispatch(newTodoTextActionCreator(text));
    }

    let todoElement = props.todos
        .filter(todo => todo.todoText.trim() !== "")
        .map(todo =>
            <div key={todo.id} className="todoItem">
                <p>{todo.todoText}</p>
                <button onClick={() => props.dispatch(deleteTodoActionCreator(todo.id))} className="deleteBtn">
                    Delete
                </button>
            </div>
        );

    return (
        <div className="inputTodo">
            <input
                onChange={onInputChange}
                value={props.newTodoText}
                ref={newTodoElement}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                placeholder="Enter your todo"
            />
            <button onClick={addTodo}>Add</button>
            {todoElement}
        </div>
    )
}

export default Todo;
