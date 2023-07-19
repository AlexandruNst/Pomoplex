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
        setTaskText("");
    }

    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <h3 className='form-title'>Add a new task</h3>
            <div>
                <input
                    type="text"
                    placeholder="Enter new task"
                    onChange={handleInputChange}
                    value={taskText}
                />
                <button>Add</button>
            </div>
        </form>
    )
}