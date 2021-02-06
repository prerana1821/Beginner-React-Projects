import React from 'react'
import './Filters.css';

const Filters = ({ handleFilters }) => {
    return (
        <div className='filters'>
            <button onClick={ () => handleFilters('All') } className='btn'>All</button>
            <button onClick={ () => handleFilters('Completed') } className='btn'>Completed</button>
            <button onClick={ () => handleFilters('Uncompleted') } className='btn'>Uncompleted</button>
        </div>
    )
}

export default Filters
