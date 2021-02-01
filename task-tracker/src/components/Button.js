import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ bgColor, text, onClick }) => {

    // const handleClick = (e) => {
    //     return console.log('Clicked', e);
    // }

    return (
        <button onClick={onClick} style={{ backgroundColor: bgColor }} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    bgColor: 'cyan'
}

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired
}


export default Button
