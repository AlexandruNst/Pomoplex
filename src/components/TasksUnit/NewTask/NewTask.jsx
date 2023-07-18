import { useState } from 'react'
import './NewTask.scss'

export default function NewTask(props) {

    const [taskText, setTaskText] = useState("");

    function handleInputChange(event) {
        setTaskText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.addNewTask(taskText)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter new task"
                onChange={handleInputChange}
                value={taskText}
            />
            <button>Add</button>
        </form>
    )
}