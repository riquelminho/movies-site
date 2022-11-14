import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/TrendingPage">Navbar</Link>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/TrendingPage">HOME</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" href="#">MOVIES</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="#">TV SHOW</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="#">CATEGORIES</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#">CONTACT US</Link>
  </li>

 
</ul>

    </div>
  );
}

export default Navbar;
