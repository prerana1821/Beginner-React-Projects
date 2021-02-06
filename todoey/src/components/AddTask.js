import './AddTask.css';
import { useState } from "react";

const AddTask = ({ handleAddTask }) => {

    const [text, setTodoText] = useState('');
    const [imp, setImp] = useState('Least Important');

    const handleForm = (e) => {
        e.preventDefault();

        handleAddTask({ text, imp });

        setTodoText('');
        setImp('');
    }

    return (
        <div className='add-task'>
            <form className='add-task-form' onSubmit={ handleForm } >
                <label>Todo</label>
                <input type="text" required placeholder='Add Task' value={ text } onChange={ (e) => setTodoText(e.target.value) } />
                <label>Importance</label>
                <select value={ imp } onChange={ (e) => setImp(e.target.value) } >
                    <option value="Least Important">Least Important</option>
                    <option value="Important">Important</option>
                    <option value="Necessary">Necessary</option>
                </select>
                <button type="submit" className='btn-submit-task'>Add</button>
            </form>
        </div>
    )
}

export default AddTask
