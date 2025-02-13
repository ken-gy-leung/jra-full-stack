import { getCurrentDateTime } from "../utils/commonUtils"

const Task = ({ deadline, content, done, onDoneToggle, onDeadlineChange, onContentChange, onTaskDelete }) => {
    const toggleDone = event => {
        onDoneToggle(event.target.checked)
    }

    const changeDeadline = event => {
        onDeadlineChange(event.target.value)
    }

    const changeContent = event => {
        onContentChange(event.target.value)
    }

    return (
        <div className="task">
            <input
                className="task-checkbox"
                type="checkbox"
                checked={done}
                onChange={toggleDone}
            />
            <input
                className="task-date-time-picker"
                type="datetime-local"
                // use current date & time as min value for datetime-local input
                min={getCurrentDateTime()}
                value={deadline}
                onChange={changeDeadline}
            />
            <input
                className={`task-content ${done ? "task-done" : "task-undone"}`}
                type="text"
                value={content}
                onChange={changeContent}
            />
            <div className="task-delete-button" onClick={onTaskDelete}>&#10060;</div>
        </div>
    )
}

export default Task