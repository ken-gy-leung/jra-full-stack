import { capitalizeSentence } from "../../utils/utils"
import './TaskListBar.css'

const TaskListBar = ({ count, status, color }) => (
    <div className='task-list-bar' style={{ backgroundColor: color }}>
        <div className='task-count' style={{ color: color }}>{count}</div>
        <div className='task-status'>{capitalizeSentence(status)}</div>
    </div>
)

export default TaskListBar