import './AddToDo.css'
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from 'react'


export default function AddToDo({ addTodoFunction }) {
    const [value, setValue] = useState("");


    return (
        <div className="AddToDo">
                <div className="AddToDoInput">
                    <input
                        type="text"
                        placeholder='Add Your New ToDo'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div className="AddToDoButton" onSubmit={() => addTodoFunction(value)}>
                    <AiOutlinePlus size={45} />
                </div>
        </div>
    )
};
