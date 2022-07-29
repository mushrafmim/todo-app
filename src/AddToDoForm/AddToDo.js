import './AddToDo.css'
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from 'react'


export default function AddToDo({ addTodoFunction }) {
    const [value, setValue] = useState("")

    const addToDo = e => {
        e.preventDefault()

        if (value !== "")
            addTodoFunction(value)
        setValue("")
    }


    return (
        <div className="AddToDo">
            <form onSubmit={addToDo}>
                <div className="AddToDoInput">
                    <input
                        type="text"
                        placeholder='Add Your New ToDo'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <button type="submit" className="AddToDoButton">
                    <AiOutlinePlus size={45} />
                </button>
            </form>
        </div>
    )
};
