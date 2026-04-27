import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">My Portofolio</span>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>
          <Link className="btn btn-outline-light me-2" to="/project">
            Experience
          </Link>
          <Link className="btn btn-outline-light me-2" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;