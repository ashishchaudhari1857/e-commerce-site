  c
const NavBar = () => {



  return (
    <>
        <ul className="nav   justify-content-center navbar navbar-expand-sm">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              STORE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
          {/* <li classNameName="nav-item">
            <button classNameName="btn btn-primary">Cart</button>
          </li> */}
        </ul>
  
    
    </>
  );
};
export default NavBar;
