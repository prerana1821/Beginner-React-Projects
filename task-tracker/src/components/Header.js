import Button from "./Button";
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <div>
            <header className="header">
                {/* <h1>Trask Tracker</h1> */}
                {/* <h1 style={headerStyle}>{props.title}</h1> */}
                <h1>{props.title}</h1>
                <Button bgColor='pink' text='Hello'/>
                <Button bgColor='yellow' text='Hii'/>
                <Button text='Good'/>
            </header>
        </div>
    )
}


// Destructing
// const Header = ({title}) => {
//     return (
//         <div>
//             <header>
//                 {/* <h1>Trask Tracker</h1> */}
//                 <h1>{title}</h1>
//             </header>
//         </div>
//     )
// }

// Prop types
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// If props are not passed
Header.defaultProps = {
    title:'Task Tracking App'
}

// CSS in JS
// const headerStyle = {
//     color: 'red',
//     fontSize: '1rem',
//     backgroundColor : 'black'
// }

export default Header

