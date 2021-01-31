import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{ color: '#ff0040', 'cursor': 'pointer' }} /></h3>
            <small>{task.day}</small>
        </div>
    )
}

export default Task
