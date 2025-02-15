import { getCurrentDateTime } from '../utils/utils'

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

    const getClassNameByTaskStatus = (fieldClass) => {
        return `${fieldClass} ${done ? 'task-done' : 'task-undone'} ${!deadline ? 'task-no-deadline' : !done && deadline < getCurrentDateTime() ? 'task-overdue' : ''}`
    }

    return (
        <div className='task'>
            <input
                className='task-checkbox'
                type='checkbox'
                name='done-checkbox'
                checked={done}
                onChange={toggleDone}
            />
            <input
                className={getClassNameByTaskStatus('task-date-time-picker')}
                type='datetime-local'
                // use current date & time as min value for datetime-local input
                min={getCurrentDateTime()}
                value={deadline}
                onChange={changeDeadline}
            />
            <input
                className={getClassNameByTaskStatus('task-content')}
                type='text'
                name='content-input'
                value={content}
                onChange={changeContent}
            />
            <div className='task-delete-button' onClick={onTaskDelete}>&#10060;</div>
        </div>
    )
}

export default Task