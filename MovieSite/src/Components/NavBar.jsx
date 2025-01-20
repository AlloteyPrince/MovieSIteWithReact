import{ Link } from "react-router-dom"

function NavBar (){
  
    return 
    <nav>
            <div className="navbar-brand">
                <Link to="/">Movie Site</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>
    </nav>
}

export default NavBAr;