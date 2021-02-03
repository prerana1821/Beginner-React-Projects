import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="" style={{ 'padding': '0', 'marginLeft': '0', }}><h1>preBlogs</h1></Link>
            <div className="links">
                <Link to="">Home</Link>
                <Link to="/search" style={{
                    'color': '#F50057',
                    'border': '1px solid #F50057',
                    'borderRadius': '1rem',
                    'paddingLeft': '0.8rem',
                    'paddingRight': '0.8rem',
                }}>Search</Link>
                <Link to="/create" style={{
                    'color': '#fff',
                    'backgroundColor': '#F50057',
                    'borderRadius': '1rem',
                    'paddingLeft': '0.8rem',
                    'paddingRight': '0.8rem',
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;