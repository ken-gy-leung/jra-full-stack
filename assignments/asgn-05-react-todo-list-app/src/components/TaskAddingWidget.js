import React, {useState} from 'react'

const TaskAddingWidget = ({onAdd}) => {
  const [content, setContent] = useState('')
  const handleInputChange = event => { 
    setContent(event.target.value) 
  }

  const handleTaskAdd = () => {
    if(content.trim() === '') return
    onAdd(content)
    setContent('')
  }

  // use Enter key to add task
  const handleTaskAddByEnter = (event)=>{
    if(event.key === 'Enter'){
      handleTaskAdd()
    }
  }

  return (
    <>
      <input type='text' value={content} onChange={handleInputChange} onKeyDown={handleTaskAddByEnter} placeholder="Support 'ENTER' to Add" />
      <button onClick={handleTaskAdd}>Add</button>
    </>
  )
}

export default TaskAddingWidget