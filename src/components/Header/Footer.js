const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row  bg-primary">
             <div className=" col-6 col-sm-6 bg-success  text-white  p-2 mx-auto">
             <h1> TheGeneric </h1>
             </div>
           <div className=" col-6 col-sm-6 d-flex  justify-content-between align-items-center ">
               <i className="bi bi-youtube   fs-3 fs-sm-2" style={{ fontSize: '2rem' }}>YouTube</i>
               <i className="bi bi-facebook fs-3 fs-sm-2"   style={{ fontSize: '2rem' }}>facebook</i>
               <i className="bi bi-twitter  fs-3 fs-sm-2" style={{ fontSize: '2rem' }}>twitter</i>
          </div>
      </div>
    </div>
  );
};

export default Footer;
