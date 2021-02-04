import headerimg from '../headerimg.svg';

const Header = ({ active }) => {

    return (
        <div className="head-container">
            <img src={headerimg} alt="header-img" className={`head-img ${active ? 'head-img-expanded' : 'head-img-contracted'}`} />
            <h1 className={`head-text ${active ? 'head-text-expanded' : 'head-text-contracted'}`}>Name Strom!</h1>
        </div>
    );
};

export default Header;
