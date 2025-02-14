import React, {useState} from 'react'
import { getCurrentDateTime } from '../utils/commonUtils'

const AddOrSearchWidget = ({ onTaskAdd, onTaskSearch }) => {
  const [action, setAction] = useState('Add')
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
    if (contentInput === '') return
    onTaskAdd(deadlineInput, contentInput)
    setDeadlineInput('')
    setContentInput('')
  }

  // use Enter key to add task
  const handleTaskAddByEnter = (event) => {
    if(event.key === 'Enter'){
      handleTaskAdd()
    }
  }
  
  const handleTaskSearch = () => {
    onTaskSearch(deadlineSearchFrom, deadlineSearchTo, contentInput)
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
        name='content-input'
        value={contentInput}
        onChange={handleContentInputChange}
        onKeyDown={action === 'Add' ? handleTaskAddByEnter : handleTaskSearchByEnter}
        placeholder={`Support 'ENTER' to ${action}`} 
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