// import { getCurrentDateTime } from '../utils/utils'
import { useEffect, useRef } from 'react'

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

    const titleRef = useRef(null)

    const pxToRem = px => {
        const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
        return px / baseFontSize
    }

    const adjustHeight = element => {
        element.style.height = 'auto'
        console.log('title input:')
        console.log(element)
        let heightInRem = pxToRem(element.scrollHeight)
        console.log('scroll height:', `${heightInRem}rem`)
        heightInRem = heightInRem < 4.7 ? heightInRem - 2 : heightInRem - 1
        element.style.height = `${heightInRem}rem`
    }

    useEffect(() => {
        // if (titleRef.current) {
            adjustHeight(titleRef.current)
        // }
    }, [title])

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
                <div className='task-delete-button' onClick={onTaskDelete}>&#10060;</div>
            </div>
            <textarea
                ref={titleRef}
                className={`task-title task-${status}`}
                type='text'
                name='title-input'
                value={title}
                onChange={changeTitle}
            />
            <textarea
                className={`task-content task-${status}`}
                type='text'
                name='content-input'
                value={content}
                onChange={changeContent}
            />
        </div>
    )
}

export default Task