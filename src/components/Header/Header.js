import NavBar from "../NavBar/NavBar";
import React from "react";
import Showcart from "../Cart/Showcart";
import {Outlet} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row align-items-center">
          <div className="col-10">
            <NavBar />
          </div>
          <div className="col-2 ">
            <Showcart></Showcart>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12  bg-info fs-1 text-dark text-center p-3">
          <h1>The Generic</h1>
        </div>
      </div>
    <Outlet/>
    </>
  );
};

export default Header;
