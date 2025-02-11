const Task = ({ content, done, onToggle }) => {
    const toggleDone = event => {
        onToggle(event.target.checked)
    }

    return (
        <div className="task">
            <input className="task-done" type="checkbox" checked={done} onChange={toggleDone} />
            <div className="task-content">{content}</div>
        </div>
    )
}

export default Task