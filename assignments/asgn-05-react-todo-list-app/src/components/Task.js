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

        const computedStyle = getComputedStyle(element)
        const lineHeight = parseFloat(computedStyle.lineHeight)
        const padding = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)

        // Calculate base height for 1 line
        const baseHeight = lineHeight + padding

        // Get scroll height without padding
        const contentHeight = element.scrollHeight - padding

        // Calculate needed lines (minimum 0 when empty)
        const lineCount = contentHeight > 0 ? Math.ceil(contentHeight / lineHeight) : 0

        // Use maximum between content height and base height
        const newHeight = Math.max(
            lineCount * lineHeight + padding,
            baseHeight
        )

        element.style.height = `${newHeight}px`
        element.style.overflowY = 'hidden' // Force hide scrollbar
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

    useEffect(() => {
        if (titleRef.current && !title) {
            // Force single line when empty
            titleRef.current.style.height = `${parseFloat(getComputedStyle(titleRef.current).lineHeight) +
                parseFloat(getComputedStyle(titleRef.current).paddingTop) +
                parseFloat(getComputedStyle(titleRef.current).paddingBottom)}px`
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