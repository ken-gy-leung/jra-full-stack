const Task = ({ content, done, onDoneToggle, onContentChange, onTaskDelete }) => {
    const toggleDone = event => {
        onDoneToggle(event.target.checked)
    }

    const changeContent = event => {
        onContentChange(event.target.value)
    }

    return (
        <div className="task">
            <input className="task-checkbox" type="checkbox" checked={done} onChange={toggleDone} />
            <input type="text" className={`task-content ${done? "task-done" : "task-undone"}`} value={content} onChange={changeContent} />
            <div className="task-delete-button" onClick={onTaskDelete}>&#10060;</div>
        </div>
    )
}

export default Task