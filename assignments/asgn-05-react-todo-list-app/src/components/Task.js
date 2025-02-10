
const Task = ({content,done}) => {
  return (
    <>
    <div className="task-content">
{content}
    </div>
    <input type="checkbox" className="btn btn-primary" checked={done} />
    </>
  )
}

export default Task