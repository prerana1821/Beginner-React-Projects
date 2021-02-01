import Task from './Task';

// const tasks = [
//     {
//         id: 1,
//         text: 'Learn React',
//         day: 'Jan 31st at 12:00pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Learn JS',
//         day: 'Jan 11st at 4:00pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Make JS Projects',
//         day: 'Jan 21st at 7:00pm',
//         reminder: true,
//     }
// ];

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
