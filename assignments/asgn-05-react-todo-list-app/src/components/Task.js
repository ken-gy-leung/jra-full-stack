import { getCurrentDateTime } from '../utils/utils'

const Task = ({ status, deadline, title, content, done, onDoneToggle, onDeadlineChange, onTitleChange, onContentChange, onTaskDelete }) => {
    const toggleDone = event => {
        onDoneToggle(event.target.checked)
    }

    const changeDeadline = event => {
        onDeadlineChange(event.target.value)
    }

    const changeTitle = event => {
        onTitleChange(event.target.value)
    }

    const changeContent = event => {
        onContentChange(event.target.value)
    }

    return (
        <div className='task'>
            <input
                className={`task-date-time-picker task-${status}`}
                type='datetime-local'
                // use current date & time as min value for datetime-local input
                // min={getCurrentDateTime()}
                value={deadline}
                onChange={changeDeadline}
            />
            <input
                className={`task-title task-${status}`}
                type='text'
                name='title-input'
                value={title}
                onChange={changeTitle}
            />
            <input
                className={`task-content task-${status}`}
                type='text'
                name='content-input'
                value={content}
                onChange={changeContent}
            />
            <div className='task-controls'>
                <div className='task-delete-button' onClick={onTaskDelete}>&#10060;</div>
                <input
                    className='task-checkbox'
                    type='checkbox'
                    name='done-checkbox'
                    checked={done}
                    onChange={toggleDone}
                />
            </div>
        </div>
    )
}

export default Task