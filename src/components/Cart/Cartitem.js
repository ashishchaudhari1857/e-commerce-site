import React, { useCallback, useContext } from "react";
import Context from "../Store/Context";
const CartItem = (props) => {
const ctx = useContext(Context);
  
    const remove = useCallback(() => {
    ctx.removeItem(props.item.key);
  }, [ctx  ,props.item.key]);

  return (
    <div className="row my-3"> 
      <div className="col-4 col-sm-2 ">
        <img src={props.item.ImgURL} className="rounded img-fluid" style={{width:"85px"}}/>
      </div>
      <div className="col-4  col-sm-3 text-center     " style={{fontSize:"1rem"}}    >{props.item.title}</div>
      <div className="col-3  fw-bold " style={{fontSize:"1rem"}}>  {props.item.price}$</div>
      <div className="col-5 col-sm-2 fw-bold d-none d-sm-inline" style={{ fontSize: "1rem" }}>
        <div className="d-flex align-items-center justify-content-between">
        <span className="d-none d-sm-inline">x</span>
          <span>100</span>
        </div>
        </div>
      <div className="col-7 col-sm-2  fw-bold d-flex align-items-start pb-2 pb-sm-0 my-2" style={{fontSize:"1rem"}} >  
      <button className="btn btn-danger p-0 px-sm-1 d-flex" onClick={remove}    >Remove</button>
      </div>
      <hr></hr>
    </div>
  );
};

export default CartItem;
