const CartItem = (props) => {

  return (
    <div className="row my-3"> 
      <div className="col-2 ">
        <img src={props.item.imageUrl}  style={{width:"85px"}}/>
      </div>
      <div className="col-4 text-center "  style={{fontWeight:"bold"}}  >{props.item.title}</div>
      <div className="col-1 " style={{fontWeight:"bold" }}>  {props.item.price}</div>
      <div className="col-2  " style={{fontWeight:"bold"}}>  {props.item.quantity}</div>
      <div className="col-3  " style={{fontWeight:"bold"}}>  
      <button className="btn btn-primary p-1 d-flex">Remove</button>
      </div>

    </div>
  );
};

export default CartItem;
