const Task = ({ content, done, onToggle }) => {
    const toggleDone = event => {
        onToggle(event.target.checked)
    }

    return (
        <div className="task">
            <input className="task-checkbox" type="checkbox" checked={done} onChange={toggleDone} />
            <div className={`task-content ${done? "task-done" : "task-undone"}`}>{content}</div>
        </div>
    )
}

export default Task