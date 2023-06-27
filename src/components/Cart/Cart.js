
import Modal from "../Modal/Modal";
import CartItem from "./Cartitem";
// import Context from "../Store/Context";
// import { useContext } from "react";
import { useGlobalHook } from "../Store/Contex_provider";
const Cart = (props) => {
  //  const ctx=useContext(Context);
  const ctx=useGlobalHook();
 const  {items} =useGlobalHook()
     console.log(items)    // ctx is object and items is  giving direct array with  custum hook
  


  const cartlist = ctx.items.map((item, i) => {
    return <CartItem item={item} key={i}></CartItem>
  });
  console.log(cartlist)
  return (
    <div>
     
      <Modal onclose={props.onclose}>
        <div className="row my-2 p-1  border border-primary text-white  d-none d-sm-flex">
          <div className="col-7  col-sm-5 bg-secondary fw-bold" style={{fontSize:"1rem"}}  >ITEM</div>
          <div className="col-2  col-sm-2 bg-secondary fw-bold" style={{fontSize:"1rem"}}  >PRICE</div>
          <div className="col-3  col-sm-5 bg-secondary fw-bold" style={{fontSize:"1rem"}} >QUANTITY</div>
        </div>
        {cartlist}
        </Modal>
    </div>
  );
};

export default Cart;
