import { useGlobalHook } from "../Store/Contex_provider";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//  here with the help of islogged  weather the navbar show or not
const NavBar = () => {
  const ctx = useGlobalHook();
  
  const isLogged = ctx.isLogged;

  const handleLogout = () => {
    ctx.logout();
   
  };
 
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
          ShopMart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/home">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={ isLogged ?"/store":"/login"} >
                STORE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">
                ABOUT
              </NavLink>
            </li>
            {isLogged && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/addproduct"
                >
                  Add_Product
                </NavLink>
              </li>
            )}
            {isLogged && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            )}
            {!isLogged && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
            {isLogged && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
            {isLogged && (
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
