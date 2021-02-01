const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>preCodes</h1>
            <div className="links">
                <a href="">Home</a>
                <a href="/create" style={{
                    'color': '#fff',
                    'backgroundColor': '#F50057',
                    'borderRadius': '1rem',
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;