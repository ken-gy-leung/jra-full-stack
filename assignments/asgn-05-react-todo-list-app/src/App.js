import React, { useState } from 'react'
import './App.css'
import Task from './components/Task'
import TaskAddingWidget from './components/TaskAddingWidget'
import { v4  } from 'uuid'

const App = () => {
  // initialize state taskList with the value from localStorage, or an empty array if there is no value
  const localTaskList = localStorage.getItem('taskList')
  const [taskList, setTaskList] = useState(localTaskList ? JSON.parse(localTaskList) : [])

  // initialize state filter with the value from localStorage, or 'all' if there is no value
  const [filter, setFilter] = useState(localStorage.getItem('filter') || 'all')

  const handleTaskAdd = content => {
    // use v4 from uuid to generate a unique id for each task
    const newTask = { id: v4(), content, done: false }
    setTaskList([...taskList, newTask])
    // use localStorage to store the taskList (after JSON.stringify)
    localStorage.setItem('taskList', JSON.stringify([...taskList, newTask]))
  }

  const handleDoneToggle = (id, done) => {
    const updatedTasks = taskList.map(task=>task.id===id? {...task,done}:task)
    setTaskList(updatedTasks)
    // update localStorage with the updated taskList
    localStorage.setItem('taskList', JSON.stringify(updatedTasks))
  }

  const handleFilterChange = event => {
    const newFilter = event.target.value
    setFilter(newFilter)
    // update localStorage with the new filter
    localStorage.setItem('filter', newFilter)
  }

  const handleContentChange = (id,content)=>{
    const updatedTasks=taskList.map(task=>task.id===id? {...task,content}:task)
    setTaskList(updatedTasks)
    localStorage.setItem('taskList', JSON.stringify(updatedTasks))
  }

  const handleTaskDelete = id =>{
    const updatedTasks = taskList.filter(task=>task.id!==id)
    setTaskList(updatedTasks)
    localStorage.setItem('taskList', JSON.stringify(updatedTasks))
  }

  const allTasks = taskList.map(task => 
    <Task
      key={task.id}
      content={task.content}
      done={task.done}
      onDoneToggle={done => handleDoneToggle(task.id, done)}
      onContentChange={content => handleContentChange(task.id, content)}
      onTaskDelete={()=>handleTaskDelete(task.id)}
    />
  )

  const filteredTasks = filter !== 'all' ? allTasks.filter(task => task.props.done === !!Number(filter)) : allTasks

  return (
    <div className="App">
      <div className="task-adding">
        <TaskAddingWidget onTaskAdd={handleTaskAdd} />
      </div>
      <select className='task-filter' onChange={handleFilterChange}>
        <option value="all" selected={filter==="all"}>All</option>
        <option value="1" selected={filter==="1"}>Done</option>
        <option value="0" selected={filter==="0"}>Undone</option>
      </select>
      <div className="task-list">
        {filteredTasks}
      </div>
    </div>
  )
}

export default App
