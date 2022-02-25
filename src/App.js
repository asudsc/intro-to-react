import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState, createRef } from 'react';
import TodoItem from './TodoItem.js';

function App() {

  const [todos, setTodos] = useState([])
  const textRef = createRef()

  function addTodo(name) {
    if (name != "") {
      let newTodos = [...todos]
      newTodos.push(name)
      console.log(newTodos)
      setTodos(newTodos)
      textRef.current.value = ""
    }
  }

  return (
    <div className={"container col-5 mt-5 align-items-center justify-content-center"}>
        <h1>DSC's To Do app</h1>


        <div className={"list"}>
            <ul className={"list-group"}>
                {todos.map((item) => (
                    <TodoItem value={item}></TodoItem>
                ))}
            </ul>
        </div>
        
        
        <input
          type={"text"}
          placeholder={"Enter item here"}
          ref={textRef}
          className={"inputBox mt-5 form-control"}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo(textRef.current.value)
            }
          }}
        ></input>

        <Button
          onClick={() => {
            addTodo(textRef.current.value)
          }}
          className={"addButton mt-3"}
        >
          Add todo
        </Button>
    </div>

  );
}

export default App;
