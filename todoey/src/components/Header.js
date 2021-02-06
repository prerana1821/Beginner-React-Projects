import './Header.css';

const Header = ({ onShow, changeText }) => {
    return (
        <div className='header'>
            <h1>Todoey!</h1>
            <button onClick={ onShow } className='btn btn-add'>{ changeText ? 'Close' : 'Add' }</button>
        </div>
    )
}

export default Header;
