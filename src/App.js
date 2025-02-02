import './App.css';
import Todo from "./Components/Todo";

function App(props) {
  return (
      <div className="App">
          <Todo newTodoText={props.state.todo.newTodoText} todos={props.state.todo.todos} dispatch={props.dispatch}/>
      </div>
  );
}

export default App;