import TaskListBar from "../TaskListBar/TaskListBar"
import './TaskList.css'

const TaskList = ({key, listClasses, barTitle, taskCount, color, children}) => (
    <div key={key} className={listClasses} style={{ backgroundColor: `${color}11` }}>
        <TaskListBar count={taskCount} barTitle={barTitle} color={color} />
        {children}
    </div>
)

export default TaskList