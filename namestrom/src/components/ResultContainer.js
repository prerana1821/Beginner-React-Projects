import React from 'react'

const ResultContainer = ({ names }) => {

    const nameCheap = 'https://www.namecheap.com/domains/registration/results/?domain=';

    return (
        <div className='result-container'>
            { names.map(name =>
                <a key={ name } href={ `${nameCheap}${name}` } target={ '_blank' } rel="noopener noreferrer"><p className='name-container'>{ name }</p></a>
            ) }
        </div>
    )
}

export default ResultContainer
