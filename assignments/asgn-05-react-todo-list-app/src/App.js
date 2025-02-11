import React, { useState } from 'react'
import './App.css'
import Task from './components/Task'
import TaskAddingWidget from './components/TaskAddingWidget'
import { v4  } from 'uuid'

const App = () => {
  const tasksData = [
    { content: "Finish assignment 5 today", done: true },
    { content: "Finish assignment 4 today", done: false },
    { content: "Finish assignment 3 today", done: false },
    { content: "Finish assignment 2 today", done: false },
    { content: "Finish assignment 1 today", done: false },
  ]

  const taskDataWithId = tasksData.map(task => {
    // use v4 from uuid to generate a unique id for each task
    return { ...task, id: v4() }
  })

  const [taskList, setTaskList] = useState(taskDataWithId)
  const [filter, setFilter] = useState('all')
  
  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  const handleToggle = (id, done) => {
    const updatedTasks = taskList.map(task=>task.id===id? {...task,done}:task)
    setTaskList(updatedTasks)
  }

  const handleAdd = content => {
    const newTask = { id: v4(), content, done: false }
    setTaskList([...taskList, newTask])
  }

  const allTasks = taskList.map(task => 
    <Task
      key={task.id}
      content={task.content}
      done={task.done}
      onToggle={done => handleToggle(task.id, done)}
    />
  )

  const filteredTasks = filter !== 'all' ? allTasks.filter(task => task.props.done === !!Number(filter)) : allTasks

  return (
    <div className="App">
      <div className="task-adding">
        <TaskAddingWidget onAdd={handleAdd} />
      </div>
      <select className='task-filter' onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="1">Done</option>
        <option value="0">Undone</option>
      </select>
      <div className="task-list">
        {filteredTasks}
      </div>
    </div>
  )
}

export default App
