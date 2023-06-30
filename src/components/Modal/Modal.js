import { useGlobalHook } from "../Store/Contex_provider";
const Modal = (props) => {
  const ctx=useGlobalHook();
    console.log(props.children)
  return (
    <>

      <div className="modal d-block text-center" tabIndex="-1" >
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header text-center ">
              <h3 className="modal-title " style={{textAlign:"center"}}>Your Cart</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onclose}

              ></button>
            </div>
            <div className="modal-body">
             {props.children}
             <div className="d-block">
              <h3>TotalAmount</h3>  
             <h5>  {ctx.totalAmount} $</h5>
              </div>
            </div>
            <div className="modal-footer">
             
              <button
                 onClick={props.onclose}
                type="button"
                className="btn btn-secondary fs-0 p-1 p-sm-0 p-md-1 "
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary fs-0 p-1 p-sm-0 p-md-1">

               Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Modal;