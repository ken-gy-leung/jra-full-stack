import React, {useState} from 'react'

const AddOrSearchWidget = ({ onTaskAdd, onTaskSearch }) => {
  const [action, setAction] = useState('Add')
  const [input, setInput] = useState('')

  const handleActionChange = event => {
    setAction(event.target.value)
  }

  const handleInputChange = event => {
    const inputValue = event.target.value.trim()
    setInput(inputValue)
  }

  const handleTaskAdd = () => {
    if (input === '') return
    onTaskAdd(input)
    setInput('')
  }

  // use Enter key to add task
  const handleTaskAddByEnter = (event) => {
    if(event.key === 'Enter'){
      handleTaskAdd()
    }
  }
  
  const handleTaskSearch = () => {
    onTaskSearch(input)
  }

  // use Enter key to search task
  const handleTaskSearchByEnter = (event) => {
    if(event.key === 'Enter'){
      handleTaskSearch()
    }
  }

  return (
    <>
      <select onChange={handleActionChange}>
        <option value="Add">Add</option>
        <option value="Search">Search</option>
      </select>
      <input
        type='text'
        value={input}
        onChange={handleInputChange}
        onKeyDown={action === 'Add' ? handleTaskAddByEnter : handleTaskSearchByEnter}
        placeholder={`Support 'ENTER' to ${action}`} 
      />
      <button 
        onClick={action === 'Add' ? handleTaskAdd : handleTaskSearch}>{action}
      </button>
    </>
  )
}

export default AddOrSearchWidget