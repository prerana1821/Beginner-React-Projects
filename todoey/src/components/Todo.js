import './Todo.css';
import Delete from "../assets/delete.svg";
import Done from "../assets/done.svg";

const Todo = ({ todo, handleDone, handleDelete }) => {
    return (
        <div className='todo'>
            <div className={ `todo-txt ${todo.done && 'done'}` }>
                <h3>{ todo.text }</h3>
                <small>{ todo.imp }</small>
            </div>
            <div className='todo-actions'>
                <button onClick={ () => handleDone(todo.id) } className='btn btn-done'>
                    <img className='img-done' src={ Done } alt="" />
                </button>
                <button onClick={ () => handleDelete(todo.id) } className='btn btn-delete'>
                    <img className='img-delete' src={ Delete } alt="" />
                </button>
            </div>
        </div>
    )
}

export default Todo;
