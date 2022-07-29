import {v4} from 'uuid';
import { useState } from 'react';
import './App.css';
import AddToDo from './AddToDoForm/AddToDo';
import ToDoWindow from './ToDosList/ToDosList';

function App() {

  const [toDos, setToDos] = useState([]);


  const addTodoFunction = (newToDo) => {
    console.log(toDos);
    setToDos([
      ...toDos,
      {
        id: v4(),
        todo: newToDo
      }
    ])
  }

  const deleteToDoFunction = (deleteId) => {
    setToDos(
      toDos.filter((todo, i) => todo.id !== deleteId)
    )
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>

      <AddToDo
        addTodoFunction={addTodoFunction}
      />
      <ToDoWindow
        toDos={toDos}
        deleteToDoFunction={deleteToDoFunction}
      />
      {/* {toDos.map((toDo, i) => (
        <ToDoComponent
          todo={toDo}
          deleteToDoFunction={deleteToDoFunction}
        />
      ))} */}

    </div>
  );
}

export default App;
