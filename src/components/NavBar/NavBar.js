import { useGlobalHook } from "../Store/Contex_provider";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const ctx = useGlobalHook();
  const isLogged = ctx.isLogged;

  const handleLogout = () => {
    console.log("this va,k")
    ctx.logout();
  };
  return (
    <>
      <ul className="nav   justify-content-center navbar navbar-expand-sm">
        {isLogged && (
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">
              HOME
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink className="nav-link" to="/store">
            STORE
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            ABOUT
          </NavLink>
        </li>
        {isLogged && (
          <li className="nav-item">
            <NavLink
              to="/addproduct"
              className="nav-link "
              aria-disabled="true"
            >
              Add_Product
            </NavLink>
          </li>
        )}
        {isLogged && (
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" aria-disabled="true">
              Contact Us
            </NavLink>
          </li>
        )}
        {!isLogged && (
          <li className="nav-item">
            <NavLink to="/login" className="nav-link" aria-disabled="true">
              Login
            </NavLink>
          </li>
        )}
        {isLogged && (
          <li className="nav-item">
            <NavLink to="/logout" className="nav-link"   onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
        {/* <li classNameName="nav-item">
            <button classNameName="btn btn-primary">Cart</button>
          </li> */}
      </ul>
    </>
  );
};
export default NavBar;
