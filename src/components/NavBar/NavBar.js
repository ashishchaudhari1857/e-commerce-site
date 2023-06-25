
  import { NavLink } from "react-router-dom";
const NavBar = () => {



  return (
    <>
        <ul className="nav   justify-content-center navbar navbar-expand-sm">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/store">
              STORE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to="/addproduct"
              className="nav-link "
              aria-disabled="true"
            >
              Add_Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
            to="/contact"
              className="nav-link"

              aria-disabled="true"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
            to="/login"
              className="nav-link"

              aria-disabled="true"
            >
                Login
            </NavLink>
          </li>
          {/* <li classNameName="nav-item">
            <button classNameName="btn btn-primary">Cart</button>
          </li> */}
        </ul>
  
    
    </>
  );
};
export default NavBar;