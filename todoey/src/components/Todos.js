import Todo from "./Todo";
import './Todos.css';

const Todos = ({ listTodos, handleDone, handleDelete }) => {
    return (
        <div className='todos'>
            {listTodos.map((todo) => {
                return <Todo key={ todo.id } todo={ todo } handleDone={ handleDone } handleDelete={ handleDelete } />
            }) }
        </div>
    )
}

export default Todos;
