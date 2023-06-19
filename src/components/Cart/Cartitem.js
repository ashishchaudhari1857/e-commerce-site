import React, { useCallback, useContext } from "react";
import Context from "../Store/Context";
const CartItem = (props) => {
const ctx = useContext(Context);
  
  const remove = useCallback((id) => {
    ctx.removeItem(id);
  }, [ctx]);
  return (
    <div className="row my-3"> 
      <div className="col-2 ">
        <img src={props.item.image} className="rounded" style={{width:"85px"}}/>
      </div>
      <div className="col-4 text-center "  style={{fontWeight:"bold", fontSize:"1rem"}}  >{props.item.title}</div>
      <div className="col-1 " style={{fontWeight:"bold" }}>  {props.item.price}</div>
      <div className="col-2  " style={{fontWeight:"bold"}}>  {props.item.quantity}</div>
      <div className="col-3  " style={{fontWeight:"bold"}}>  
      <button className="btn btn-danger p-1 d-flex" onClick={remove.bind(null,props.item.id)}>Remove</button>
      </div>

    </div>
  );
};

export default CartItem;
