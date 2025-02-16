import { capitalizeWord } from "../utils/utils"

const TaskListBar = ({ count, status, color }) => (
    <div className='task-list-bar' style={{ backgroundColor: color }}>
        <div className='task-count' style={{ color: color }}>{count}</div>
        <div className='task-status'>{capitalizeWord(status)}</div>
    </div>
)

export default TaskListBar