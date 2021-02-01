import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className="task">
            <div className={`inner-task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
                <h3>{task.text} <FaTimes style={{ color: '#ff0040', 'cursor': 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
                <small>{task.day}</small>
            </div>
        </div>
    )
}

export default Task
