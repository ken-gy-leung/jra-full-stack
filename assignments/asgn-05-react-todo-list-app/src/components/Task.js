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

    const adjustHeight = element => {
        // Reset to 1px first to force reflow
        element.style.height = '1px'

        // Get fresh computed styles
        const computedStyle = getComputedStyle(element)
        const lineHeight = parseFloat(computedStyle.lineHeight)
        const padding = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)

        // Calculate content height without padding
        const contentHeight = element.scrollHeight - padding

        // Ensure minimum of 1 line even when empty
        const lineCount = Math.max(Math.ceil(contentHeight / lineHeight), 1)
        console.log('line count', lineCount)
        // Calculate new height using lineCount
        const newHeight = lineCount * lineHeight + padding

        // Apply calculated height
        element.style.height = `${newHeight}px`
        element.style.overflowY = contentHeight > newHeight ? 'auto' : 'hidden'
    }

    useEffect(() => {
        const handleFontLoad = () => {
            if (titleRef.current) {
                adjustHeight(titleRef.current)
            }
        }

        // Wait for fonts to load before first calculation
        document.fonts.ready.then(handleFontLoad)

        // Initial check in case fonts are already loaded
        if (document.fonts.status === 'loaded') {
            handleFontLoad()
        }
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