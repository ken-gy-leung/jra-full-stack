import React, {useState} from 'react'
import { getCurrentDateTime } from '../utils/utils'

const AddOrSearchWidget = ({ onTaskAdd, onTaskSearch }) => {
  const [action, setAction] = useState('Add')
  const [titleInput, setTitleInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')
  const [deadlineSearchFrom, setDeadlineSearchFrom] = useState('')
  const [deadlineSearchTo, setDeadlineSearchTo] = useState('')

  const handleActionChange = event => {
    setAction(event.target.value)
    if (!!deadlineInput) {
      setDeadlineSearchFrom(deadlineInput)
    }
  }

  const handleTitleInputChange = event => {
    const inputValue = event.target.value
    setTitleInput(inputValue)
  }

  const handleContentInputChange = event => {
    const inputValue = event.target.value
    setContentInput(inputValue)
  }

  const handleDeadlineChange = event => {
    setDeadlineInput(event.target.value)
  }

  const handleDeadlineFromChange = event => {
    setDeadlineSearchFrom(event.target.value)
  }

  const handleDeadlineToChange = event => {
    setDeadlineSearchTo(event.target.value)
  }

  const handleTaskAdd = () => {
    // title is required for adding a task
    if (titleInput === '') return
    onTaskAdd(deadlineInput, titleInput, contentInput)
    setDeadlineInput('')
    setTitleInput('')
    setContentInput('')
  }

  // use Enter key to add task
  const handleTaskAddByEnter = (event) => {
    if(event.key === 'Enter'){
      handleTaskAdd()
    }
  }
  
  const handleTaskSearch = () => {
    onTaskSearch(deadlineSearchFrom, deadlineSearchTo, titleInput, contentInput)
  }

  // use Enter key to search task
  const handleTaskSearchByEnter = (event) => {
    if(event.key === 'Enter'){
      handleTaskSearch()
    }
  }

  const handleSearchReset = () => {
    setDeadlineSearchFrom('')
    setDeadlineSearchTo('')
    setDeadlineInput('')
    setTitleInput('')
    setContentInput('')
    onTaskSearch('', '', '')
  }

  return (
    <>
      <select name='action-select' value={action} onChange={handleActionChange}>
        <option value='Add'>Add</option>
        <option value='Search'>Search</option>
      </select>
      {
        action === 'Add' ?
        <input
          type='datetime-local'
          // use current date & time as min value for datetime-local input
          min={getCurrentDateTime()}
          value={deadlineInput}
          data-placeholder='Pick a Deadline'
          onChange={handleDeadlineChange}
        /> :
        <>
          <input
            type='datetime-local'
            value={deadlineSearchFrom}
            data-placeholder='From'
            max={deadlineSearchTo}
            onChange={handleDeadlineFromChange}
          />
          <input
            type='datetime-local'
            value={deadlineSearchTo}
            data-placeholder='To'
            min={deadlineSearchFrom}
            onChange={handleDeadlineToChange}
          />
        </>
      }
      <input
        type='text'
        name='title-input'
        value={titleInput}
        onChange={handleTitleInputChange}
        onKeyDown={action === 'Add' ? handleTaskAddByEnter : handleTaskSearchByEnter}
        placeholder={`Title*: support 'ENTER' to ${action}`} 
      />
      <input
        type='text'
        name='content-input'
        value={contentInput}
        onChange={handleContentInputChange}
        onKeyDown={action === 'Add' ? handleTaskAddByEnter : handleTaskSearchByEnter}
        placeholder={`Content: support 'ENTER' to ${action}`} 
      />
      <button 
        onClick={action === 'Add' ? handleTaskAdd : handleTaskSearch}>{action}
      </button>
      <button 
        onClick={handleSearchReset}>Reset
      </button>
    </>
  )
}

export default AddOrSearchWidget