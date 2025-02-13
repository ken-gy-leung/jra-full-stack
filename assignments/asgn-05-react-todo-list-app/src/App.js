import React, { useState } from 'react'
import './App.css'
import Task from './components/Task'
import AddOrSearchWidget from './components/AddOrSearchWidget'
import { v4  } from 'uuid'

const App = () => {
  // initialize state taskList with the value from localStorage, or an empty array if there is no value
  const localTaskList = localStorage.getItem('taskList')
  const initialTasks = localTaskList ? JSON.parse(localTaskList) : []
  const [taskList, setTaskList] = useState(initialTasks)

  // initialize state filter with the value from localStorage, or 'all' if there is no value
  const [filter, setFilter] = useState(localStorage.getItem('filter') || 'all')

  const getLocalTaskStorage = () => {
    return JSON.parse(localStorage.getItem('taskList'))
  }

  const setLocalTaskStorage = tasks => {
    localStorage.setItem('taskList', JSON.stringify(tasks))
  }

  const handleTaskAdd = (deadline, content) => {
    // use v4 from uuid to generate a unique id for each task
    const newTask = { id: v4(), deadline, content, done: false }
    setTaskList([...taskList, newTask])
    // use localStorage to store the taskList (after JSON.stringify)
    setLocalTaskStorage([...taskList, newTask])
  }

  const handleDoneToggle = (id, done) => {
    const tasks = getLocalTaskStorage()
    const updatedTasks = tasks.map(task=>task.id===id? {...task,done}:task)
    // update localStorage with the updated taskList
    setLocalTaskStorage(updatedTasks)

    const updatedResults = taskList.map(task=>task.id===id? {...task,done}:task)
    setTaskList(updatedResults)
  }

  const handleFilterChange = event => {
    const newFilter = event.target.value
    setFilter(newFilter)
    // update localStorage with the new filter
    localStorage.setItem('filter', newFilter)
  }

  const handleDeadlineChange = (id, deadline) => {
    const tasks = getLocalTaskStorage()
    const updatedTasks = tasks.map(task=>task.id===id? {...task, deadline}:task)
    setLocalTaskStorage(updatedTasks)

    const updatedResults = taskList.map(task => task.id === id ? { ...task, deadline } : task)
    setTaskList(updatedResults)
  }

  const handleContentChange = (id, content) => {
    const tasks = getLocalTaskStorage()
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, content } : task)

    setLocalTaskStorage(updatedTasks)

    const updatedResults = taskList.map(task => task.id === id ? { ...task, content } : task)

    setTaskList(updatedResults)
  }

  const handleTaskDelete = id =>{
    const tasks = getLocalTaskStorage()
    const updatedTasks = tasks.filter(task => task.id !== id)
    setLocalTaskStorage(updatedTasks)

    const updatedResults = taskList.filter(task => task.id !== id)
    setTaskList(updatedResults)
  }

  const handleTaskSearch = (deadlineFrom, deadlineTo, contentInput) => {
    const tasks = getLocalTaskStorage()
    // return all tasks if no search criteria is provided
    if ([deadlineFrom, deadlineTo, contentInput].every(arg=>!arg)) return setTaskList(tasks)
    const filteredTasks = tasks.filter(task => task.deadline >= deadlineFrom && (!deadlineTo || !task.deadline || task.deadline <= deadlineTo) && task.content.includes(contentInput))
    setTaskList(filteredTasks)
  }

  const allTasks = taskList.map(task => 
    <Task
      key={task.id}
      deadline={task.deadline}
      content={task.content}
      done={task.done}
      onDoneToggle={done => handleDoneToggle(task.id, done)}
      onDeadlineChange={deadline => handleDeadlineChange(task.id, deadline)}
      onContentChange={content => handleContentChange(task.id, content)}
      onTaskDelete={()=>handleTaskDelete(task.id)}
    />
  )

  const filteredTasks = filter !== 'all' ? allTasks.filter(task => task.props.done === !!Number(filter)) : allTasks

  return (
    <div className="App">
      <div className="task-adding">
        <AddOrSearchWidget onTaskAdd={handleTaskAdd} onTaskSearch={handleTaskSearch} />
      </div>
      <select className='task-filter' onChange={handleFilterChange}>
        <option value="all" selected={filter==="all"}>All</option>
        <option value="1" selected={filter==="1"}>Done</option>
        <option value="0" selected={filter==="0"}>Undone</option>
      </select>
      <div className="task-list">
        {taskList.length === 0 || filteredTasks.length === 0 ? `--- No ${getLocalTaskStorage().length !== 0 ? 'matching' : ''} tasks ---` : filteredTasks}
      </div>
    </div>
  )
}

export default App
