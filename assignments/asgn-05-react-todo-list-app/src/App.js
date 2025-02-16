import React, { useState } from 'react'
import './App.css'
import './kenban.css'
import Task from './components/Task'
import AddOrSearchWidget from './components/AddOrSearchWidget'
import { getCurrentDateTime } from './utils/utils'
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

  const handleTaskAdd = (deadline, title, content) => {
    // use v4 from uuid to generate a unique id for each task
    const newTask = { id: v4(), deadline, title, content, done: false }
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

  const handleTitleChange = (id, title) => {
    const tasks = getLocalTaskStorage()
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, title } : task)

    setLocalTaskStorage(updatedTasks)

    const updatedResults = taskList.map(task => task.id === id ? { ...task, title } : task)

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

  const handleTaskSearch = (deadlineFrom, deadlineTo, titleInput, contentInput) => {
    const tasks = getLocalTaskStorage()
    // return all tasks if no search criteria is provided
    if ([deadlineFrom, deadlineTo, titleInput, contentInput].every(arg => !arg)) return setTaskList(tasks)
    const filteredTasks = tasks.filter(task => task.deadline >= deadlineFrom && (!deadlineTo || !task.deadline || task.deadline <= deadlineTo) && task.title.includes(titleInput) && task.content.includes(contentInput))
    setTaskList(filteredTasks)
  }

  const sortTasks = (task1, task2)=> {
    const now = getCurrentDateTime()

    // Done tasks first
    if (!task1.done && task2.done) return -1
    if (!task2.done && task1.done) return 1

    // for undone tasks, sort by deadline (no deadline comes last and the earliest deadline comes first)
    if (!task1.done && !task2.done) {
      if (!task1.deadline && task2.deadline) return 1
      if (!task2.deadline && task1.deadline) return -1
      if (task1.deadline && task2.deadline) {
        if (task1.deadline < task2.deadline) return -1
        if (task1.deadline > task2.deadline) return 1
      }
    }
    
    // Overdue tasks come first
    if (task1.deadline && task1.deadline < now && (!task2.deadline || task2.deadline >= now)) return -1
    if (task2.deadline && task2.deadline < now && (!task1.deadline || task1.deadline >= now)) return 1

    // Undone tasks with deadline come next
    if (!task1.done && task1.deadline && (!task2.deadline || task2.done)) return -1
    if (!task2.done && task2.deadline && (!task1.deadline || task1.done)) return 1

    // Undone tasks without deadline come later
    if (!task1.done && task1.deadline && !task2.done && !task2.deadline) return -1
    if (!task2.done && task2.deadline && !task1.done && !task1.deadline) return 1

    // Done tasks in reverse time order come last
    if (task1.done && task2.done) return task2.deadline > task1.deadline ? 1 : -1

    return 0
  }

  const allTasks = taskList.map(task => 
    <Task
      key={task.id}
      deadline={task.deadline}
      title={task.title}
      content={task.content}
      done={task.done}
      onDoneToggle={done => handleDoneToggle(task.id, done)}
      onDeadlineChange={deadline => handleDeadlineChange(task.id, deadline)}
      onTitleChange={title => handleTitleChange(task.id, title)}
      onContentChange={content => handleContentChange(task.id, content)}
      onTaskDelete={()=>handleTaskDelete(task.id)}
    />
  )

  const filteredTasks = filter === 'all' ? allTasks : allTasks.filter(task => task.props.done === !!Number(filter))

  return (
    <div className='App'>
      <div className='task-adding'>
        <AddOrSearchWidget onTaskAdd={handleTaskAdd} onTaskSearch={handleTaskSearch} />
      </div>
      <select
        className='done-filter'
        name='done-filter'
        value={filter}
        onChange={handleFilterChange}>
        <option value='all'>All</option>
        <option value='1'>Done</option>
        <option value='0'>Undone</option>
      </select>
      <div className='task-list'>
        {taskList.length === 0 || filteredTasks.length === 0 ? `--- No ${getLocalTaskStorage().length !== 0 ? 'matching' : ''} tasks ---` : filteredTasks.toSorted((a, b) => sortTasks(a.props, b.props))}
      </div>
    </div>
  )
}

export default App
