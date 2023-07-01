import React, { useCallback, useContext } from "react";
import Context from "../Store/Context";
import { useRef } from "react";
const CartItem = (props) => {
const ctx = useContext(Context);
     
    const remove = useCallback((item) => {
    ctx.removeItem(item);
  }, [ctx]);

  // 
  const IncreaseQuantity =(item)=>{
    ctx.addItem(item ,"+")
  }
  // 
  console.log(props.item ,"cartitem")

  return (
    <div className="row my-3"> 
      <div className="col-6 col-sm-2  d-flex justify-content-between">
        <img src={props.item.ImgURL} className="rounded img-fluid" style={{width:"85px"}}/>
      </div>
      <div className="col-6 col-sm-3 text-center  " style={{fontSize:"1rem"}}    >{props.item.title}</div>
      <div className="col-3   col-sm-2 fw-bold my-2" style={{fontSize:"1rem"}}>  {props.item.price}$</div>
      <div className="col-4 col-sm-3 fw-bold  my-2 d-sm-inline" style={{ fontSize: "1rem" }}>
        <div className="d-flex align-items-center justify-content-between">
          <span className=" d-sm-inline">x</span>
          <div className="border border-dark border-1 text-center ">
          <button className="fw-bold border border-dark border-1 px-1"  style={{width:""}} onClick={remove.bind(null, props.item)}>-</button>
          {props.item.quantity}  
          <button  className="fw-bold border border-dark border-1 px-1"    style={{}}onClick={IncreaseQuantity.bind(null, props.item)}>+</button>
        
          </div>
          </div>
        </div>
      <div className="col-4 col-sm-2   fw-bold d-flex align-items-start pb-2 pb-sm-0 my-2" style={{fontSize:"1rem"}} >  
      <button className="btn btn-danger p-0 px-sm-1 d-flex" onClick={remove.bind(null, props.item)}    >Remove</button>
      </div>
      <hr></hr>
    </div>
  );
};

export default CartItem;
