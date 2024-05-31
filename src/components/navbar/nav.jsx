import './nav.css';
function Nav() {
    return (
        <nav className="navbar">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;