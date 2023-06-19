import {Outlet} from "react-router-dom"
const Footer = () => {

  return (
    <>
    <div className="container-fluid  "  style={{ position: "relative", bottom: 0, width: "100%" }}>
      <div className="row  bg-primary">
             <div className=" col-3   col-sm-4 bg-success  text-white  p-1 mx-auto">
             <h2 className="mx-5  justify-content-center d-flex"  > TheGeneric </h2>
             </div>
           <div className=" col-9 col-sm-8 d-flex  justify-content-around align-items-center ">
               <i className="bi bi-youtube   fs-3 fs-sm-2" style={{ fontSize: '2rem' }}>YouTube</i>
               <i className="bi bi-facebook fs-3 fs-sm-2"   style={{ fontSize: '2rem' }}>facebook</i>
               <i className="bi bi-twitter  fs-3 fs-sm-2" style={{ fontSize: '2rem' }}>twitter</i>
          </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Footer;


