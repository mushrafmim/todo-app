import ToDoEntry from "./components/ToDoEntry"

export default function ToDosList({
    toDos,
    deleteToDoFunction = e => e
}) {
    return (
        <div className="ToDoWindow">
            {toDos.length === 0 ?
                <div className="NoToDos">No Tasks Left.</div>
                : toDos.map((toDo, i) => (
                    <ToDoEntry
                        key={i}
                        todo={toDo}
                        deleteToDoFunction={deleteToDoFunction}
                    />
                ))}
        </div>
    )
};
