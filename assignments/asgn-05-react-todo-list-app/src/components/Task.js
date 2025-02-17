// import { getCurrentDateTime } from '../utils/utils'
import AutoSizingTextarea from './AutoSizingTextarea/AutoSizingTextarea'

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
            <div className='task-controls'>
                <input
                    className='task-checkbox'
                    type='checkbox'
                    name='done-checkbox'
                    checked={done}
                    onChange={toggleDone}
                />
                <input
                className={`task-date-time-picker task-${status}`}
                type='datetime-local'
                // use current date & time as min value for datetime-local input
                // min={getCurrentDateTime()}
                value={deadline}
                onChange={changeDeadline}
            />
                {/* <div className='task-delete-button' onClick={onTaskDelete}>&#10060;</div> */}
                <div className='task-delete-button' onClick={onTaskDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512">
                    {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                    <path fill="#ff0000" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
            </div>
            <AutoSizingTextarea
                className={`task-title task-${status}`}
                name='title'
                value={title}
                onChangeValue={changeTitle}
            />

            <AutoSizingTextarea
                className={`task-content task-${status}`}
                name='content'
                value={content}
                onChangeValue={changeContent}
            />
        </div>
    )
}

export default Task