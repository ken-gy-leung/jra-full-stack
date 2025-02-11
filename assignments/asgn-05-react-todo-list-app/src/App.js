import React, { useState } from 'react'
import './App.css'
import Task from './components/Task'
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

  const handleToggle = (id, done) => {
    const updatedTasks = taskList.map(task=>task.id===id? {...task,done}:task)
    setTaskList(updatedTasks)
    console.log(updatedTasks)
  }

  const tasks = taskList.map(task => {
    return (
      <Task
        key={task.id}
        content={task.content}
        done={task.done}
        onToggle={done => handleToggle(task.id, done)}
      />
    )
  })

  return (
    <div className="App">
      <div className='task-list'>
        {tasks}
        {/* <Task content={t0.content} done={t0.done} /> */}
      </div>
    </div>
  )
}

export default App
