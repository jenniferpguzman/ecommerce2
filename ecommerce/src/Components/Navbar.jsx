import '../stylesheets/Navbar.css'

function Navbar(){
    return (
        <nav className="nav_bar">
            <a href="/" className="title">Jenny Spade</a>
            <div className="nav_links">
            <ul>
                <li><a href="/products">Handbags</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;