import './ToDoEntry.css'
import { AiFillDelete } from 'react-icons/ai'


export default function ToDoEntry({ todo = "Buying A Laptop", deleteToDoFunction }) {
    return (
        <div className="ToDoComponent">
            <p>{todo.todo}</p>
            <div
                className='DeleteIcon'
                onClick={() => deleteToDoFunction(todo.id)}
            ><AiFillDelete size={45} /></div>
        </div>
    )
};
