import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ bgColor, text }) => {

    const handleClick = (e) => {
        return console.log('Clicked', e);
    }

    return (
        <button onClick={handleClick} style={{ backgroundColor: bgColor }} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    bgColor: 'cyan'
}

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}


export default Button
