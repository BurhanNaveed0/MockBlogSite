import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* Use of the Link tag causes server to not resend html for new page.
                   Instead, react re-renders the page using the Route tag used in App.js
                */}

                <Link to="/">Home</Link> 
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;