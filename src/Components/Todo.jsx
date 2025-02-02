import React from 'react';
import "./Todo.css";
import {addTodoActionCreator, newTodoTextActionCreator} from "../Redux/todoReducer";

const Todo = (props) => {
    console.log(props);
    let todoElement = props.todos.map(todo => <p key={todo.id}>{todo.todoText}</p>);
    let newTodoElement = React.createRef();

    const addTodo = () => {
        let action = addTodoActionCreator({type: "ADD-TODO"});
        props.dispatch(action);
    }

    const onInputChange = () => {
        let text = newTodoElement.current.value;
        let action = newTodoTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className="inputTodo">
            <input onChange={onInputChange} value={props.newTodoText} ref={newTodoElement}/>
            <button onClick={addTodo}>Add</button>
            {todoElement}
        </div>
    )
}

export default Todo;