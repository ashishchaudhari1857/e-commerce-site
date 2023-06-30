import NavBar from "../NavBar/NavBar";
import React from "react";
import Showcart from "../Cart/Showcart";
import {Outlet} from 'react-router-dom'
import { useGlobalHook } from "../Store/Contex_provider";
const Header = () => {
 const ctx=useGlobalHook();
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row align-items-center">
          <div className="col-10 col-md-8">
            <NavBar />
          </div>
          
          <div className="col-2  col-md-1  ">
            <Showcart></Showcart>
          </div>
        </div>
      </div>
   
      <div className="row">
        <div className="col-12  bg-info  text-dark text-center ">
        <p className="bg-secondary text-white  "  >{ctx.userid}</p>
          <h2>The Generic</h2>
     
        </div>
    
        
      </div>
    <Outlet/>
    </>
  );
};

export default Header;
