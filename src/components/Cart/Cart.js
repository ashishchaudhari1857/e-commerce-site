
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
        <div className="row my-2 p-1 d-flex border border-primary text-white ">
          <div className="col-5 bg-secondary fs" >ITEM</div>
          <div className="col-2 bg-secondary fs" >PRICE</div>
          <div className="col-5 bg-secondary fs">QUANTITY</div>
        </div>
        {cartlist}
        </Modal>
    </div>
  );
};

export default Cart;
